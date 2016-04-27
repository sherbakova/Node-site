var mongoose = require('../config/mongoose');//подключаемся к mongoose
Schema = mongoose.Schema;//создаем объект
var schema = new Schema({//схема коллекций и структура
	name:{
		type:String,
		required:true
	},
	body:{
		type:String,
		unique:true,
		required: true
	},
	url:{
		type:String,
		unique:true,
		required: true
	}
});
exports.Maintext = mongoose.model('maintexts', schema);//если нет создаст, если есть обратиться