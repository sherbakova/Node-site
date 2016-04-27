/* GET home page. */
var Maintext = require('../models/maintext').Maintext;
exports.index = function(req, res){
	if(req.params.id){
		var index = req.params.id;
	}else{
		var index = 'index';
	}
	Maintext.findOne({url: index}, function(err,text){//возвращает одну строку по условию
		if(! text){
			text = {
				name: 'Добро пожаловать на сайт',
				body: 'Текст'
			}
		}
		  res.render('index', { title: text });
	})

};
