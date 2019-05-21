require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')
require('util/pagination')
require('./index.css')
var _util = require('util')
var _product = require('service/product')
var _cart = require('service/cart')
var tpl = require('./index.tpl')

var page = {
	params:{
		productId:_util.getParamFromUrl('productId') || '',
	},
	init:function(){
		this.$elem = $('.detail-box');
		this.onload();
		this.bindEvent();
	},
	onload:function(){
		if(this.params.productId){
			this.loadProductDetail();
		}
	},
	bindEvent:function(){
		var _this = this;
		//1.处理切换图片
		_this.$elem.on('mouseenter','.product-small-img-item',function(){
			var $this = $(this);
			//移除事件
			$this.addClass('active')
			.siblings('.product-small-img-item').removeClass('active')

			//切换图片
			var ImgSrc = $this.find('img').attr('src');
			$('.product-main-img img').attr('src',ImgSrc)
		})
		//2.处理商品数量
		_this.$elem.on('click','.count-btn',function(){
			var $this = $(this);
			var $Input = $('.count-input');
			//获取原本值
			var current = parseInt($Input.val());

			if($this.hasClass('plus')){
				//赋值
				$Input.val(current + 1 >= _this.stock ? _this.stock : current + 1)
			}else{
				$Input.val(current - 1 <= 1 ? 1 : current - 1)
			}
		})
		//3.添加购物车
		_this.$elem.on('click','.add-cart-btn',function(){
			//发送请求
			_cart.addCart({
				productId:_this.params.productId,
				count:$('.count-input').val()
			},function(){
				window.location.href = './result.html?type=addCart'
			},function(msg){
				_util.showErrorMsg(msg)
			})
		})
	},
	loadProductDetail:function(){
		var _this = this;
		_product.getProductDetail(this.params,function(product){
			if(product){
				//处理图片
				product.images = product.images.split(',');
				product.mainImg = product.images[0];
				//缓存库存值用来处理商品数量时校验
				_this.stock = product.stock;
				var html = _util.render(tpl,product);
				_this.$elem.html(html);
			}else{
				_this.$elem.html('<p class="empty-msg">你找的商品去火星啦！！！</p>');
			}
		},function(msg){
			_this.$elem.html('<p class="empty-msg">你找的商品去火星啦！！！</p>');
		})
	}
}
$(function(){
	page.init();
})
