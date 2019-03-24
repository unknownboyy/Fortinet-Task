var sessionUtils = require('../utils/sessionUtils');  
var databaseUtils = require('../utils/databaseUtils');
var util = require('util');
var redisUtils = require('../utils/redisUtils');



module.exports = {
    signup: function* (next) { 
        var name=this.request.body.name;
        var password=this.request.body.password;
        var email=this.request.body.email;
        var phone=this.request.body.phone;
        console.log("signup m aya");
        console.log(email,password,phone,name);

        // var address=this.request.body.address; 
        try {
            var res = yield databaseUtils.executeQuery(util.format('insert into user(name,phone,email,password) values("%s","%s","%s","%s")',name,phone,email,password));
            
            this.body={status:'1'} 
            console.log(this.body);
        } catch (error) {
            console.log("Error",error);
            this.body={status:'0'}
        } 
    }, 

    login: function* (next) { 
        var email=this.request.body.email;
        var password=this.request.body.password;
        console.log(email,password);
        try {
            var res = yield databaseUtils.executeQuery(util.format('select * from user where email="%s" and password="%s"',email,password));
            console.log(res);
            if (res.length!=0){
                var user=res[0]
                sessionUtils.saveUserInSession(user,this.cookies);
                this.body= {status:'1'}
            }
        } catch (error) {
            this.body= {status:'0'}
        }  
    }, 

    logout: function* (next) {
        var sessionId = this.cookies.get("SESSION_ID");
        console.log("logout");
        if(sessionId) {
            sessionUtils.deleteSession(sessionId);
        }
        this.cookies.set("SESSION_ID", '', {expires: new Date(1), path: '/'});

        this.redirect('/app/home');
    }
}
