const router = require('express').Router();
const passport = require('passport');


router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/logout', (req, res) => {
    res.send('logging out');
});

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', (req, res) => {
    res.send('hello motto');
});

module.exports = router;
