const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require ('../utils/auth');

router.get ('/', withAuth, async (req, res) => {
    try {

///////


        const posts = postData.map((post) => post.get ({ plain: true}));


        //////

        res.render('', {
            
            layout: 'dashboard',

            posts,
        });
    } catch(err) {
        res.redirect('login');
    }
});

module.exports = router;