var sessionUtils = require('../utils/sessionUtils'); 
var fs= require('fs');
var csvToJson = require('../controllers/csvToJson');


module.exports = {
    showHomePage: function* (next) {
        var data1= fs.readFileSync('restaurantsa9126b3.csv','utf-8');
        var data2= fs.readFileSync('restaurant_addc9a1430.csv','utf-8');
        var arrData = csvToJson.convert(data1); 
        var arrAddress = csvToJson.convert(data2);
        console.log(arrData[0],arrAddress[0]);
        yield this.render('home',{
            arrData:arrData,
            arrAddress:arrAddress,
        });
    },
}