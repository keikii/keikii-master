var express = require('express');
var router = express.Router();

var controller = require('../controllers/book')

router.get('/', controller.list());
router.post('/', controller.create());
router.delete("/:id", controller.del());
router.get("/:id", controller.get());
router.put("/:id", controller.put());

module.exports = router;
