const express = require('express');
const router = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'public/uploads/' })

const UserModel = require('../models/user.js')
const pagination = require('../util/pagination.js')


//权限验证
router.use((req,res,next)=>{
	if(req.userInfo.isAdmin){
		next()
	}else{
		res.send('<h1>请用管理员账号登录</h1>')
	}
})

//显示后台首页
router.get('/', (req, res) => {
	res.render('admin/index',{
		userInfo:req.userInfo
	})
});

//后台分类列表
router.get('/users',(req,res)=>{
/*
显示每页条数
	分页:
	约定:每一页显示 2 条 limit(2) limit = 2
	
	第 1 页 跳过 0 条 skip(0)
	第 2 页 跳过 2 条 skip(2)
	第 3 页 跳过 4 条 skip(4)
	第 page 页 跳过 （page -1）* limit 条 skip(（page -1）* limit)
*/
/*
	let { page } = req.query;
	page = parseInt(page);
	if(isNaN(page)){
		page = 1
	}
	if(page == 0){
		page = 1
	}
	const limit = 2;
	
	UserModel.countDocuments({})
	.then(count=>{
		//计算总页数
		const pages = Math.ceil(count / limit);
		if(page > pages){
			page = pages
		}

		//计算生成页码数
		const list = [];
		for(let i = 1;i<=pages;i++){
			list.push(i)
		}

		//每页显示条数
		const skip = (page -1) * limit;

		UserModel.find({},'-password -__v')
		.skip(skip)
		.limit(limit)
		.then(users=>{
			res.render('admin/user_list',{
				userInfo:req.userInfo,
				users,
				page,
				list
			})
		})
	})
*/
	const options = {
		page:req.query.page,
		model:UserModel,
		query:{},
		projection:'-password -__v',
		sort:{_id:1}
	}
	pagination(options)
	.then(data=>{
		// console.log(data)
		res.render('admin/user_list',{
			userInfo:req.userInfo,
			users:data.docs,
			page:data.page,
			list:data.list,
			pages:data.pages,
			url:'/admin/users'
		})
	})
})

//处理后台图片
router.post('/uploadImage',upload.single('upload'),(req,res)=>{
	// console.log(req.file)
	const uploadedFilePath = '/uploads/'+req.file.filename
	res.json({
		uploaded:true,
		url:uploadedFilePath
	})
})

module.exports = router;