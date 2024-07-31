var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller.js')

/* GET home page. */
router.get('/', controller.getUsernames);
router.post('/search', controller.redirectSearch);
router.get('/new', controller.createUsernameGet);
router.post('/new', controller.createUsernamePost);
router.get('/delete', controller.deleteUserGet);
router.post('/delete', controller.deleteUserPost);

module.exports = router;
