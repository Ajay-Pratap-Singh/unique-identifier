const router = require('express').Router();

const registerContoller = require('../controllers/registerController');

router.get('/', registerContoller.getindex);

router.get('/user-register', registerContoller.getRegsiterForm);

router.post('/user-register', registerContoller.postData);

module.exports = router;
