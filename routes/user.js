/* GET users listing. */
var User = require('../models/user').User;
exports.index = function(req, res){
	console.log(req.param('err'));
	if(req.param('err')){
		var err = 'Ошибка';
	}else{
		var err = '';
	}
   res.render('user',{err:err});

};

exports.add = function(req, res){
	var email = req.body.email;// обратились к элементу//console.log(req.body);//все запросы, которые мы перехватили с тиекущей страницы(проверяли)
	var password = req.body.password;
	var users = new User({
		email: email,
		password: password,
		status: 'new'
	});
	users.save(function(err,user){
		if (err){
			res.redirect('/users?err=true');//передаем get параметр

}else{
		res.redirect('/');//перенапрвление
}
  
	});
	 
};

