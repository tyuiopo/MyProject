


handleCart();
handleNav();
handleCarousel();
handleCate();
handleTime();
handleFlashProduct();
handleElecProduct();

//处理购物车
	function handleCart(){
		var oCart = document.querySelector('.top .cart');
		var oCartLink = document.querySelector('.top .cart .cart-box a');
		var oCartContent = document.querySelector('.top .cart .cart-content');
		var oLoader = oCartContent.querySelector('.loader');
		var oEmptyCart = oCartContent.querySelector('.empty-cart');
		oCart.onmouseenter = function(){
			oCartLink.style.backgroundColor = '#fff';
			oCartLink.style.color = '#ff6700';
			oLoader.style.display = 'block';
			//显示购物车内容，假设购物车完全显示就获取到了购物车数据
			animate(oCartContent,{height:100},true,function(){
				oLoader.style.display = 'none';
				oEmptyCart.style.display = 'block';
			});
		}
		oCart.onmouseleave = function(){
			oCartLink.style.backgroundColor = '#424242';
			oCartLink.style.color = '#b0b0b0';
			animate(oCartContent,{height:0},true);
			oLoader.style.display = 'none';
			oEmptyCart.style.display = 'none';
		}
	}

//处理导航栏
	function handleNav(){
		var aNavItem = document.querySelectorAll('.header .header-nav .header-nav-item');
		var oNavContent = document.querySelector('.header .header-nav-content');
		var oNavContentContainer = oNavContent.querySelector('.container');
		var hideTimer = 0;
		var loadTimer = 0;
		for(var i = 0;i<aNavItem.length-2;i++){
			aNavItem[i].index = i;
			aNavItem[i].onmouseenter = function(){
				clearTimeout(hideTimer);
				oNavContent.style.borderTop = '1px solid #fff';
				oNavContentContainer.innerHTML = '<div class="loader"></div>';
				animate(oNavContent,{height:180},true,function(){
					oNavContent.style.overflow = 'visible';
				});
				//模拟数据加载
				var index = this.index;
				//去除不必要的加载
				clearTimeout(loadTimer);
				var loadTimer = setTimeout(function(){
					loadData(index);
				},500)
			}
			aNavItem[i].onmouseleave = function(){
				hideNavContent();
			}
		}
		oNavContent.onmouseenter = function(){
			clearTimeout(hideTimer);
		}
		oNavContent.onmouseleave = function(){
			hideNavContent();
		}
		function hideNavContent(){
			hideTimer = setTimeout(function(){
				oNavContent.style.overflow = 'hidden';
				animate(oNavContent,{height:0},true,function(){
					oNavContent.style.borderTop = 'none';
				})
			},500)
		}
		function loadData(index){
			var data = aNavItemDate[index];
			var html = '<ul>';
			for(var i = 0;i<data.length;i++){
				html +=	'<li>';
				html +=	'	<div class="img-box">';
				html +=	'		<a href="#">';
				html +=	'			<img src=" '+data[i].img+' " alt="">';
				html +=	'		</a>';
				html +=	'	</div>';
				html +=	'	<p class="product-name">'+data[i].name+'</p>';
				html +=	'	<p class="product-price">'+data[i].price+'</p>';
				if(data[i].tag){
					html +=	'<span class="tag">'+data[i].tag+'</span>';
				}
				html +=	'</li>';
			}
			html += '</ul>';
			oNavContentContainer.innerHTML = html;
		}
	}

//处理轮播图
	function handleCarousel(){
		new Carousel({
			id:'carousel',
			aImg:['imagesjrx/b1.jpg','imagesjrx/b2.jpg','imagesjrx/b3.jpg'],
			width:1226,
			height:460,
			playDuration:5000
		});
	}

//处理分类面板
	function handleCate(){
		var aCateItem = document.querySelectorAll('.home .banner .cate .cate-item');
		var oCateContent = document.querySelector('.home .banner .cate-content');
		var oCateBox = document.querySelector('.home .banner .cate-box');
		for(var i = 0;i<aCateItem.length;i++){
			aCateItem[i].index = i;
			aCateItem[i].onmouseenter = function(){
				for(var j = 0;j<aCateItem.length;j++){
					aCateItem[j].className = 'cate-item';
				}
				oCateContent.style.display = 'block';
				this.className = 'cate-item active'
				loadData(this.index);
			}
			oCateBox.onmouseleave = function(){
				oCateContent.style.display = 'none';
				for(var j = 0;j<aCateItem.length;j++){
					aCateItem[j].className = 'cate-item';
				}
			}
		}
		function loadData(index){
			var data = aCateItemDate[index];
			var html = '<ul>';
			for(var k = 0;k<data.length;k++){
				html +=	'<li>';
				html +=	'	<a href="'+data[k].url+'">';
				html +=	'		<img src="'+data[k].img+'" alt="">';
				html +=	'		<span>'+data[k].name+'</span>';
				html +=	'	</a>';
				html +=	'</li>';
			}
				html += '</ul>';
			oCateContent.innerHTML = html;
		}
		/*function loadData(index){
			var data = aCateItemDate[index];
			var ZS = Math.ceil(data.length/6);
			for(var l = 0;l<ZS;l++){
				var html = '<ul class="children-list">';
				for(var k = 0;k<data.length;k++){
					html +=	'<li>';
					html +=	'	<a href="'+data[k].url+'">';
					html +=	'		<img src="'+data[k].img+'" alt="">';
					html +=	'		<span>'+data[k].name+'</span>';
					html +=	'	</a>';
					html +=	'</li>';
				}
				html += '</ul>';
				oCateContent.innerHTML = html;
			}
			console.log(html);
		}*/
	}

//倒计时
	function handleTime(){
		var oTimeNum = document.querySelectorAll('.timer-num');
		var endDate = new Date('2018-12-25 20:50:00');
		var endtimes = endDate.getTime();
		var timer = 0
		function to2Str(num){
				return num < 10 ? '0'+ num : ''+ num;
			}
		function tonow(){
			var allMilsec = endtimes - Date.now();
			if(allMilsec < 0){
				allMilsec = 0;
				clearTimeout(timer);
			}
			var allSec = parseInt(allMilsec/1000);
			var iHour = parseInt(allSec/3600);
			var iMinute = parseInt(allSec%3600/60);
			var iSecond = allSec%3600%60;
			oTimeNum[0].innerHTML = to2Str(iHour);
			oTimeNum[1].innerHTML = to2Str(iMinute);
			oTimeNum[2].innerHTML = to2Str(iSecond);
		}
		timer = setInterval(tonow,1000);
		tonow();
	}
	
//处理闪购商品
	function handleFlashProduct(){
		var oProductList = document.querySelector('.flash .product-list');
		var aSpan = document.querySelectorAll('.flash .ctr-btn');

		aSpan[0].onclick = function(){
			oProductList.style.marginLeft = '0px';
		}
		aSpan[1].onclick = function(){
			oProductList.style.marginLeft = '-978px';
		}
	}

//处理家电选项卡
function handleElecProduct(){
	var aTabItem = document.querySelectorAll('.elec .tab .tab-item');
	var oElecProduct = document.querySelector('.elec .elec-product');
	//初始化加载
	loadData(0);
	for(var i = 0;i<aTabItem.length;i++){
		aTabItem[i].index = i;
		aTabItem[i].onmouseenter = function(){
			for(var j = 0;j<aTabItem.length;j++){
				aTabItem[j].className = 'tab-item';
			}
			this.className = 'tab-item tab-item-active';
			//加载数据
			loadData(this.index);
		}
	}
	function loadData(index){
		var data = aElecItemData[index];
		var html = '';
		//根据数据构建html
		for(var k = 0;k<data.length-1;k++){
			html +=	'<li class="product-item product-item-m">';
			html +=	'	<a href="'+data[k].url+'">';
			html +=	'		<img src="'+data[k].img+'" alt="" class="product-img">';
			html +=	'	</a>';
			html +=	'	<h3 class="product-name">'+data[k].name+'</h3>';
			html +=	'	<p class="product-desc">'+data[k].desc+'</p>';
			html +=	'	<p class="product-price">';
			html +=	'		<strong>'+data[k].price+'</strong><span>&nbsp;元</span>';
			html +=	'		<del>'+data[k].del+'元</del>';
			html +=	'	</p>';
			if(data[k].flag){
				html +=	'	<span class="flag '+data[k].flag.name+'">'+data[k].flag.content+'</span>';
			}
			if(data[k].view){
				html +=	'	<div class="view">';
				html +=	'		<p class="recommend">'+data[k].view.recommend+'';
				html +=	'		</p>';
				html +=	'		<p class="author">';
				html +=	'			来自于<span>'+data[k].view.author+'</span>的评价';
				html +=	'		</p>';
				html +=	'	</div>';
			}
			html +=	'</li>';
		}
		var lastData = data[data.length-1];
		html +=	'<li class="product-item product-item-min">';
		html +=	'	<a href="'+lastData.top.url+'">';
		html +=	'		<img src="'+lastData.top.img+'" alt="" class="product-img">';
		html +=	'	</a>';
		html +=	'	<a href="../mi-band/mi-band.html">';
		html +=	'		<h3 class="product-name">'+lastData.top.name+'</h3>';
		html +=	'	</a>';
		html +=	'	<p class="product-price">';
		html +=	'		<strong>'+lastData.top.price+'</strong><span>&nbsp;元</span>';
		html +=	'	</p>';
		html +=	'</li>';
		html +=	'<li class="product-item product-item-min">';
		html +=	'	<a href="'+lastData.top.url+'" class="more">';
		html +=	'		'+lastData.bottom.txt+'<span>'+lastData.bottom.tag+'</span>';
		html +=	'		<i class="iconfont">'+lastData.bottom.icon+'</i>';
		html +=	'	</a>';
		html +=	'</li>';
		oElecProduct.innerHTML = html;
	}
}
