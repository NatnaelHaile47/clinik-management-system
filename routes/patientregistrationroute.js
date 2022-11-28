const express = require('express')
const router = express.Router()

const PatientController = require('../controller/patientregistrationController')


router.get('/',PatientController.index)

router.post('/create',PatientController.create)
router.post('/update',PatientController.update)
router.post('/delete',PatientController.destroy)

module.exports = router