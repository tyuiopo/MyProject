const mongoose = require('mongoose');

const pagination = require('../util/pagination.js')

//1.定义Schema
const ArticleSchema = new mongoose.Schema({
	title:{
		type:String
	},
	intro:{
		type:String
	},
	content:{
		type:String
	},
	user:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'User'
	},
	category:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Category'
	},
	click:{
		type:Number,
		default:0
	},
	createdAt:{
		type:Date,
		default:Date.now
	}
});
ArticleSchema.statics.getPaginationArticles = function(req,query={}){
	const options = {
		page:req.query.page,
		model:this,
		query:query,
		projection:'-__v',
		sort:{_id:-1},
		populates:[{path:"user",select:'username'},{path:'category',select:'name'}]
	}
	return pagination(options)	
}

//2.生成模型Model
	//2.1 mongoose.model 第一个参数是指定集合的名称，mongoose会自动变为复数
	//2.2 mongoose.model 第二个参数是指定Schema
const ArticleModel = mongoose.model('Article', ArticleSchema);
//3.导出模型Model
module.exports = ArticleModel;