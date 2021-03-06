require('pages/common/footer')
require('pages/common/logo')

require('./index.css')

var _util = require('util')
var _user = require('service/user')

var formErr = {
	show:function(msg){
		$('.error-item')
		.show()
		.find('.error-msg')
		.text(msg)
	},
	hide:function(){
		$('.error-item')
		.hide()
		.find('.error-msg')
		.text('')		
	}
}

var page = {
	init:function(){
		this.bindEvent();
	},
	bindEvent:function(){
		var _this = this;
		//1.验证用户名是否已存在
		$('[name="username"]').on('blur',function(){
			var username = $(this).val();
			//1.1验证用户名是否合法
			if(!_util.validate(username,'require')){
				return result;
			}
			if(!_util.validate(username,'username')){
				return result;
			}
			//1.2 发送请求
			_user.checkUsername(username,function(){
				formErr.hide();
			},function(msg){
				formErr.show(msg)
			})
			
		})
		//2.用户注册
		$('#btn-submit').on('click',function(){
			_this.submitRegister();
		})
		$('input').on('keyup',function(ev){
			if(ev.keyCode == 13){
				_this.submitRegister();
			}
		})
	},
	submitRegister:function(){
		//1.获取数据
		var formData = {
			username:$.trim($('[name="username"]').val()),
			password:$.trim($('[name="password"]').val()),
			repassword:$.trim($('[name="repassword"]').val()),
			phone:$.trim($('[name="phone"]').val()),
			email:$.trim($('[name="email"]').val()),
		}
		//2.验证数据
		var validataResult = this.validate(formData);
	
		if(validataResult.status){//验证通过
			formErr.hide();
			//3.发送请求
			_user.register(formData,function(){
				window.location.href='./result.html?type=register'
			},function(msg){
				formErr.show(msg)
			})
		}else{//验证失败
			formErr.show(validataResult.msg)
		}
	},
	validate:function(formData){
		var result = {
			status:false,
			msg:''
		}
		//用户名不能为空
		if(!_util.validate(formData.username,'require')){
			result.msg='用户名不能为空';
			return result;
		}
		//用户名格式不正确
		if(!_util.validate(formData.username,'username')){
			result.msg='用户名格式不正确';
			return result;
		}
		//密码不能为空
		if(!_util.validate(formData.password,'require')){
			result.msg='密码不能为空';
			return result;
		}
		//密码格式不正确
		if(!_util.validate(formData.password,'password')){
			result.msg='密码格式不正确';
			return result;
		}
		//两次密码不一致
		if(formData.password != formData.repassword){
			result.msg = '两次密码不一致'
			return result;			
		}
		//手机号码不能为空
		if(!_util.validate(formData.phone,'require')){
			result.msg = '手机号码不能为空'
			return result;
		}
		//手机号码格式不正确
		if(!_util.validate(formData.phone,'phone')){
			result.msg = '手机号码格式不正确'
			return result;
		}
		//邮箱不能为空
		if(!_util.validate(formData.email,'require')){
			result.msg = '邮箱不能为空'
			return result;
		}
		//邮箱格式不正确
		if(!_util.validate(formData.email,'email')){
			result.msg = '邮箱格式不正确'
			return result;
		}
		result.status = true;
		return result;
	}
}

$(function(){
	page.init();
})
