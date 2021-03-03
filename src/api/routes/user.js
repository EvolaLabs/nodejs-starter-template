const express = require('express');
const router = express.Router();
const { auth } = require('../middlewares');

const userController = require('../controllers/user/');

// AUTH
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', auth, userController.logout);
router.post('/verify-email', userController.verifyEmail);
router.post('/refresh-token', userController.refreshToken);
router.post('/forgot-password', auth, userController.forgotPassword);
router.post('/send-verification-code', userController.sendVerificationCode);
//TODO: Social logins will be added

// EDIT
router.post('/change-password', userController.changePassword);

module.exports = router;