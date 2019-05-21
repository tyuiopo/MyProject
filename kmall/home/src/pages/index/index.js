
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')
require('./index.css')
var _side = require('pages/common/side')
var _util = require('util')
var _user = require('service/user')
var keywordsTpl = require('./keywords.tpl')
var swiperTpl = require('./swiper.tpl')
var floorTpl = require('./floor.tpl')
var page = {
	keywords:[
		{item:[{name:'手机'},{name:'运营商'},{name:'智能数码'}]},
		{item:[{name:'空调'},{name:'电视'},{name:'冰箱'},{name:'洗衣机'}]},
		{item:[{name:'厨卫大电'},{name:'生活家电'},{name:'厨具'}]},
		{item:[{name:'家居'},{name:'家具'},{name:'家装'},{name:'家纺'}]},
		{item:[{name:'食品'},{name:'酒水'},{name:'生鲜'},{name:'特产'}]},
		{item:[{name:'美妆'},{name:'个护'},{name:'清洁'},{name:'宠物'}]},
		{item:[{name:'运动'},{name:'户外'},{name:'足球'},{name:'跑步机'}]},
		{item:[{name:'男装'},{name:'女装'},{name:'内衣'},{name:'鞋靴'}]},
		{item:[{name:'汽车'},{name:'汽摩'},{name:'二手车'},{name:'车品'}]},
		{item:[{name:'图书'},{name:'艺术'},{name:'原版'},{name:'文学'}]},
	],
	swiper:[
		{image:require('images/carousel/01.jpg'),categoryId:'111'},
		{image:require('images/carousel/02.png'),categoryId:'222'},
		{image:require('images/carousel/03.png'),categoryId:'333'},
		{image:require('images/carousel/04.png'),categoryId:'444'},
		{image:require('images/carousel/05.png'),categoryId:'555'},
	],
	floor:[
		{
			title:'F1 家用电器',
			item:[
				{image:require('images/floor/floor01-01.png'),text:'冰箱洗衣机',categoryId:'5b84b36c50f099037f316c64'},
				{image:require('images/floor/floor01-02.png'),text:'热水器',categoryId:'5b84b36c50f099037f316c64'},
				{image:require('images/floor/floor01-03.png'),text:'平板电视',categoryId:'5b84b36c50f099037f316c64'},
				{image:require('images/floor/floor01-04.png'),text:'空调',categoryId:'5b84b36c50f099037f316c64'},
				{image:require('images/floor/floor01-05.png'),text:'智能影音',categoryId:'5b84b36c50f099037f316c64'},
			]
		},	
		{
			title:'F2 智能数码',
			item:[
				{image:require('images/floor/floor02-01.jpg'),text:'相机频道',categoryId:'5b84b36c50f099037f316c64'},
				{image:require('images/floor/floor02-02.jpg'),text:'智能频道',categoryId:'5b84b36c50f099037f316c64'},
				{image:require('images/floor/floor02-03.jpg'),text:'单反相机',categoryId:'5b84b36c50f099037f316c64'},
				{image:require('images/floor/floor02-04.jpg'),text:'平衡车',categoryId:'5b84b36c50f099037f316c64'},
				{image:require('images/floor/floor02-05.jpg'),text:'汽车用品',categoryId:'5b84b36c50f099037f316c64'},
			]
		},
		{
			title:'F3 生活家电',
			item:[
				{image:require('images/floor/floor03-01.png'),text:'生活家电',categoryId:'5b84b36c50f099037f316c64'},
				{image:require('images/floor/floor03-02.png'),text:'日用家纺',categoryId:'5b84b36c50f099037f316c64'},
				{image:require('images/floor/floor03-03.jpg'),text:'厨具频道',categoryId:'5b84b36c50f099037f316c64'},
				{image:require('images/floor/floor03-04.png'),text:'个护健康',categoryId:'5b84b36c50f099037f316c64'},
				{image:require('images/floor/floor03-05.jpg'),text:'卫浴馆',categoryId:'5b84b36c50f099037f316c64'},
			]
		},
	],
	init:function(){
		this.loadKeywords();
		this.loadSwiper();
		this.loadFloor();
	},
	loadKeywords:function(){
		var html = _util.render(keywordsTpl,{keywords:this.keywords});//生成html
		$('.keywords').html(html)//插入html
	},
	loadSwiper:function(){
		var html = _util.render(swiperTpl,{swiper:this.swiper});
		$('.swiper-container').html(html)
		var mySwiper = new Swiper ('.swiper-container', {
			loop: true, // 循环模式选项
			autoplay:{
				delay:3000
			},//自动播放

			// 如果需要分页器
			pagination: {
				el: '.swiper-pagination',
				clickable:true
			},

			// 如果需要前进后退按钮
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		})
	},
	loadFloor:function(){
		var html = _util.render(floorTpl,{floor:this.floor});
		$('.floor-wrap').html(html)
	}
}
$(function(){
	page.init();
})
