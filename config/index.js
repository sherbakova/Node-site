var nconf =  require('nconf');//модуль, который скачали
var path = require('path');// глобальный модуль
nconf.argv()
     .env()
	 .file({file: path.join(__dirname,'config.json')});//переменная, кот возвращает текущую папку
module.exports = nconf;// создали конфиг и через него подключились через конфиг.json