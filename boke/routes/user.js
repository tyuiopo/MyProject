

const express = require('express');
const UserModel = require('../models/user.js')
const hmac = require('../util/hmac.js')

const router = express.Router();

//处理注册
router.post('/register', (req, res) => {
	// console.log(req.body)
	const {username,password} = req.body;
	const result = {
		status:0,//成功
		message:''
	}
	UserModel.findOne({username:username})//去数据库查找用户名是否已存在
	.then(user=>{
		if(user){//用户名已存在
			result.status = 10;
			result.message = '用户名已存在';
			res.json(result)
		}else{//开始插入数据库
			UserModel.insertMany({
				username,
				password:hmac(password),
				isAdmin:true
			})
			.then(user=>{
				res.json(result)
			})
			.catch(err=>{
				throw err
			})
		}
	})
	.catch(err=>{//不是查找不到的err
		result.status = 10;
		result.message = '服务器端出错';
		res.json(result)
	})
});

//处理登录
router.post('/login', (req, res) => {
	// console.log(req.body)
	const {username,password} = req.body;
	const result = {
		status:0,//成功
		message:''
	}
	UserModel.findOne({username,password:hmac(password)},'-password -__v')//去数据库查找用户名
	.then(user=>{
		if(user){//匹配成功
			result.data = user;
			// req.cookies.set('userInfo',JSON.stringify(user));
			req.session.userInfo = user;
			res.json(result)
		}else{//匹配失败
			result.status = 10;
			result.message = '用户名和密码不正确';
			res.json(result)
		}
	})
	.catch(err=>{//不是查找不到的err
		result.status = 10;
		result.message = '找不到用户名,是否注册？';
		res.json(result)
	})
});

//退出处理
router.get('/logout',(req,res)=>{
	const result = {
		status:0,//成功
		message:''
	}
	// req.cookies.set('userInfo',null);
	req.session.destroy()
	res.json(result)
})

module.exports = router;