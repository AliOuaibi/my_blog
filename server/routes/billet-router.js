const express = require('express')

const BilletCtrl = require('../controllers/billet-ctrl')

const router = express.Router()

router.post('/addBillet', BilletCtrl.createBillet)
router.put('/billet/:NumeroBillet', BilletCtrl.updateBillet)
router.delete('/billet/:NumeroBillet', BilletCtrl.deleteBillet)
router.get('/billet/:NumeroBillet', BilletCtrl.getBilletByNum)
router.get('/billets', BilletCtrl.getBillet)

module.exports = router