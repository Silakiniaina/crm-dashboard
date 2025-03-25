class AuthMiddleware {
    isAuthenticated(req, res, next) {
        if (req.session.token) {
            return next();
        }
        res.redirect("/login");
    }
}

module.exports = new AuthMiddleware();