const express = require('express')
const router = express.Router()

const AppointmentController = require('../controller/appointmentController')


router.get('/',AppointmentController.index)

router.post('/create',AppointmentController.create)
router.post('/update',AppointmentController.update)
router.post('/delete',AppointmentController.destroy)

module.exports = router