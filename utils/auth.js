module.exports = (req, res) => {
    if (!req.session.loggedIn){
        res.redirect('/login');
        return;
    }
    next();
}