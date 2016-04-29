var mongoose = require('../config/mongoose');//подключаемся к mongoose
Schema = mongoose.Schema;//создаем объект
var schema = new Schema({//схема коллекций и структура
	email:{
		type:String,
		unique:true,
		required:true
	},
	password:{
		type:String,
		required: true
	},
	status:{
		type:String // пользователь может быть админом, может быть заблокирован и т.д.
	}
});
exports.User = mongoose.model('users', schema);//если нет создаст, если есть обратиться