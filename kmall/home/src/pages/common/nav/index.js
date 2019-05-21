require('node_modules/font-awesome/css/font-awesome.min.css')
require('./index.css')

var _user = require('service/user')
var _cart = require('service/cart')
var _util = require('util')


var nav = {
	init:function(){
		this.bindEvent();
		this.loadUsername();
		this.loadCartCount();
		return this;
	},
	bindEvent:function(){
		//绑定退出事件
		$('#logout').on('click',function(){
			_user.logout(function(result){
				window.location.reload();
			},function(msg){
				_util.showErrorMsg(msg)
			})
		})
	},
	//用户登录跳转
	loadUsername:function(){
		_user.getUsername(function(data){
			$('.not-login').hide();
			$('.login')
			.show()
			.find('.username')
			.text(data.username)
		})
	},
	//获取购物车信息
	loadCartCount:function(){
		_cart.getCartCount(function(count){
			$('.nav-list .cart-num').text(count || 0)
		},function(){
			$('.nav-list .cart-num').text(0)
		})
	}
}

module.exports = nav.init();
