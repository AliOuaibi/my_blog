const Billet = require('../models/billet')

createBillet = (req, res) => {
    
    const myData = new Billet(req.body);
    if (!myData) {
        return res.status(400).json({ success: false, error: err })
    }
    myData.save()
    .then(item => {
        res.status(200).send("Create billet");
    })
    .catch(err => {
        res.status(400).send("unable to save to database");
    }); 
}

updateBillet = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({ success: false, error: err })
    }
    Billet.findOne({ NumeroBillet: req.params.NumeroBillet}, (err, billet) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        billet.NumeroBillet = body.NumeroBillet
        billet.titre = body.titre
        billet.prix = body.prix
        billet.description = body.description
        billet.categorie = body.categorie
        billet.save()
        .then(() => {                                    
            res.status(200).send('Billet updated!');
        })
    })
    .catch(error => {
        res.status(400).send("unable to save to database");
    })
}

getBilletByNum = async (req, res) => {
    await Billet.findOne({ NumeroBillet: req.params.NumeroBillet }, (err, billet) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!billet) {
            return res.status(404).json({ success: false, error: `Billet not found` })
        }
        return res.status(200).json({ success: true, data: billet })
    }).catch(err => console.log(err))
}

getBillet = async (req, res) => {
    await Billet.find({}, (err, billet) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!billet.length) {
            return res.status(404).json({ success: false, error: `Billet not found` })
        }
        return res.status(200).json({ success: true, data: billet })
    }).catch(err => console.log(err))
}
deleteBillet = async (req, res) => {
    await Billet.findOneAndDelete({ NumeroBillet: req.params.NumeroBillet }, (err, billet) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!billet) {
            return res.status(404).json({ success: false, error: `Billet not found` })
        }

        return res.status(200).json({ success: true, data: billet})
    }).catch(err => console.log(err))
}


module.exports = {
    createBillet,
    updateBillet,
    getBilletByNum,
    getBillet,
    deleteBillet,
}