const express = require('express')
const router = express.Router()

const blockController = require('../controller/blockController')


router.get('/',blockController.index)

router.post('/create',blockController.create)
router.post('/update',blockController.update)
router.post('/delete',blockController.destroy)

module.exports = router