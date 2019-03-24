var Router= require('koa-router');
var bodyParser = require('koa-body')();

module.exports = function(app){

    var router = new Router();

    //Welcome Routes
    var welcomeCtrl = require('./../controllers/WelcomeCtrl');
    var userCtrl =require('../controllers/UserCtrl');
    router.get('/home', welcomeCtrl.showHomePage);

    router.post('/login',userCtrl.login); 

    router.post('/signup',userCtrl.signup); 

    router.get('/logout',userCtrl.logout);

    return router.middleware();
}
