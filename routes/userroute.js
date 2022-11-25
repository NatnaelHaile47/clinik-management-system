const express = require('express')
const router = express.Router()

const userController = require('../controller/userController')
//const upload = require('../middleware/uploads')

router.get('/',userController.index)

router.post('/store',userController.create)
router.post('/update',userController.update)
router.post('/delete',userController.destroy)

module.exports = router