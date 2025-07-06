const express = require('express');
const {
  generate2FASecret,
  verify2FACode,
  enable2FA,
  disable2FA,
  get2FAStatus
} = require('../controllers/twoFactorController');

const router = express.Router();
const cors = require("cors");

// Middleware
router.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL || 'https://quiet-zabaione-c6e293.netlify.app'
  })
);

// 2FA routes
router.get('/2fa/status', get2FAStatus);
router.post('/2fa/generate', generate2FASecret);
router.post('/2fa/verify', verify2FACode);
router.post('/2fa/enable', enable2FA);
router.post('/2fa/disable', disable2FA);

module.exports = router;
