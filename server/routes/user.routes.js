const userController = require('../controllers/user.controller');
module.exports = app => {
    app.post('/api/users/register', userController.registerUser);
    app.post('/api/users/login', userController.loginUser);
    app.get('/api/users/logout', userController.logoutUser)

}