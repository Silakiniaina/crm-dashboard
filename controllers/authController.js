const authService = require("../services/authService");

class AuthController {

    getLogin(req, res) {
        res.render("login", {
            title : "Authentification",
            error: null 
        });
    }

    async postLogin(req, res) {
        const { username, password } = req.body;
        const response = await authService.login(username, password);

        if (response.success) {
            req.session.user = response.data.userDetails;
            req.session.token = response.data.token;
            return res.redirect("/dashboard");
        }

        res.render("login", { error: response.message });
    }

    getDashboard(req, res) {
        res.send("Welcome to the Dashboard!"); 
    }
}

module.exports = new AuthController();