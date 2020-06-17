const User = require('../models/user')

createUser = (req, res) => {
    
    var myData = new User(req.body);
    if (!myData) {
        return res.status(400).json({ success: false, error: err })
    }
    myData.save()
    .then(item => {
        res.status(200).send("Create user");
    })
    .catch(err => {
        res.status(400).send("unable to save to database");
    }); 
}

loginUser = (req, res)=> {
    var login = req.body.login;
    var mdp = req.body.password;
    
    User.findOne({login: login, password: mdp}, function(err, user) {
        if(err) return next(err);
        if(!user) return res.send('Not logged in!');
        
        return res.send('Welcome !');
     });
}
module.exports = {
    createUser,
    loginUser
}