const express = require('express')
const router = express.Router()

const OncallController = require('../controller/oncallController')


router.get('/',OncallController.index)

router.post('/create',OncallController.create)
router.post('/update',OncallController.update)
router.post('/delete',OncallController.destroy)

module.exports = router