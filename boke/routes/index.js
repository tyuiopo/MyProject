const express = require('express');
const CategoryModel = require('../models/category.js')
const ArticleModel = require('../models/article.js')

const router = express.Router();

async function getCommonData(){
	
	const categoriesPromise = CategoryModel.find({},'name').sort({order:-1});
	const topArticlesPromise = ArticleModel.find({},'_id click title').sort({click:-1}).limit(10);

	const categories = await categoriesPromise;
	const topArticles = await topArticlesPromise

	return {
		categories,
		topArticles
	}
}

//获取显示首页
router.get('/', (req, res) => {
	/*
	CategoryModel.find({},'name')
	.sort({order:-1})
	.then(categories=>{
		res.render('main/index',{
			userInfo:req.userInfo,
			categories
		})
	})
	*/
	getCommonData()
	.then(data=>{
		const {categories,topArticles} = data;
		ArticleModel.getPaginationArticles(req)
		.then(pageArticles=>{
			res.render('main/index',{
				userInfo:req.userInfo,
				categories,
				topArticles,
				//首页文章分页数据
				articles:pageArticles.docs,
				page:pageArticles.page,
				list:pageArticles.list,
				pages:pageArticles.pages	
			})			
		})
	})
});

//处理文章数据的ajax请求
router.get('/articles',(req,res)=>{
	const { id } = req.query;
	const query = {};
	if(id){
		query.category = id
	}
	ArticleModel.getPaginationArticles(req,query)
	.then(data=>{
		res.json({
			status:0,
			data
		})
	})
})

module.exports = router;