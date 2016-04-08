/* GET home page. */
exports.index = function(req, res){
	if(req.params.id){
		var index = req.params.id;
	}else{
		var index = 'Hello';
	}
  res.render('index', { title: index });
};
