/* GET home page. */
var Maintext = require('../models/maintext').Maintext;
exports.index = function(req, res){
  var maintext = new Maintext({
	  name:'О компании',
	  body: 'Текст компании',
	  url: 'about'
  });
   console.log('ее'); 
  maintext.save(function(err, main){ //ошибка и объект
	 console.log('OK'); 
  });
};
