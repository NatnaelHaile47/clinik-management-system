const express = require('express')
const router = express.Router()

const MedicationController = require('../controller/medicationController')


router.get('/',MedicationController.index)

router.post('/create',MedicationController.create)
router.post('/update',MedicationController.update)
router.post('/delete',MedicationController.destroy)

module.exports = router