const express           = require('express');
const router            = express.Router();
const DashController    = require('../controllers/DashController');
const authentication    = require('../authentication');

router.use('*', authentication.isAuthenticated, (req, res, next) => {
  next();
});

router.get('/', DashController.home.get);
router.get('/doprobiv', DashController.doprobiv.get);

module.exports = router;
