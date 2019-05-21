

var aNavItem1=[
	[	
		{
			name:'手机',
			img1:'images/02.png',
			oneself1:'坚果U系列',
			img2:'images/05.png',
			oneself2:'坚果R系列',
		},
		{
			name:'官方配件',
			img1:'images/04.png',
			oneself1:'保护膜',
			img2:'images/04.png',
			oneself2:'保护膜',
			img3:'images/04.png',
			oneself3:'保护膜',
			img4:'images/04.png',
			oneself4:'保护膜',
		},
		{
			name:'&nbsp;',
			img1:'images/04.png',
			oneself1:'保护膜',
			img2:'images/04.png',
			oneself2:'保护膜',
			img3:'images/04.png',
			oneself3:'保护膜',
			img4:'images/04.png',
			oneself4:'保护膜',
		},
		{
			name:'畅呼吸系列',
			img1:'images/09.jpg',
			oneself1:'生活电器',
			img2:'images/09.jpg',
			oneself2:'配件',
		},
		{
			name:'服饰箱包',
			img1:'images/08.jpg',
			oneself1:'服饰',
			img2:'images/08.jpg',
			oneself2:'鞋',
		},
	],
	[
		{
			img:'images/02.png',
			name:'坚果R1',
			price:'2999元起',
		},
		{
			img:'images/05.png',
			name:'坚果R1',
			price:'2999元起',
		},
		{
			img:'images/07.png',
			name:'坚果R1',
			price:'2999元起',
		},
		{
			img:'images/07.png',
			name:'坚果R1',
			price:'2999元起',
		},
	],
	[
		{
			img:'images/02.png',
			name:'坚果R1',
			price:'2999元起',
		},
		{
			img:'images/05.png',
			name:'坚果R1',
			price:'2999元起',
		},
		{
			img:'images/07.png',
			name:'坚果R1',
			price:'2999元起',
		},
		{
			img:'images/07.png',
			name:'坚果R1',
			price:'2999元起',
		},
	],
	[	
		{
			name:'手机',
			img1:'images/02.png',
			oneself1:'坚果U系列',
			img2:'images/05.png',
			oneself2:'坚果R系列',
		},
		{
			name:'官方配件',
			img1:'images/04.png',
			oneself1:'保护膜',
			img2:'images/04.png',
			oneself2:'保护膜',
			img3:'images/04.png',
			oneself3:'保护膜',
			img4:'images/04.png',
			oneself4:'保护膜',
		},
		{
			name:'&nbsp;',
			img1:'images/04.png',
			oneself1:'保护膜',
			img2:'images/04.png',
			oneself2:'保护膜',
			img3:'images/04.png',
			oneself3:'保护膜',
			img4:'images/04.png',
			oneself4:'保护膜',
		},
		{
			name:'畅呼吸系列',
			img1:'images/09.jpg',
			oneself1:'生活电器',
		},
		{
			name:'服饰箱包',
			img1:'images/08.jpg',
			oneself1:'服饰',
		},
	],
	[
		{
			img:'images/02.png',
			name:'坚果R1',
			price:'2999元起',
		},
		{
			img:'images/05.png',
			name:'坚果R1',
			price:'2999元起',
		},
		{
			img:'images/07.png',
			name:'坚果R1',
			price:'2999元起',
		},
	],
	[
		{
			img:'images/02.png',
			name:'坚果R1',
			price:'2999元起',
		},
		{
			img:'images/05.png',
			name:'坚果R1',
			price:'2999元起',
		},
		{
			img:'images/07.png',
			name:'坚果R1',
			price:'2999元起',
		},
		{
			img:'images/07.png',
			name:'坚果R1',
			price:'2999元起',
		},
	],
	[	
		{
			name:'手机',
			img1:'images/02.png',
			oneself1:'坚果U系列',
			img2:'images/05.png',
			oneself2:'坚果R系列',
		},
		{
			name:'官方配件',
			img1:'images/04.png',
			oneself1:'保护膜',
			img2:'images/04.png',
			oneself2:'保护膜',
			img3:'images/04.png',
			oneself3:'保护膜',
			img4:'images/04.png',
			oneself4:'保护膜',
		},
		{
			name:'手机配件',
			img1:'images/04.png',
			oneself1:'保护膜',
			img2:'images/04.png',
			oneself2:'保护膜',
			img3:'images/04.png',
			oneself3:'保护膜',
		},
		{
			name:'畅呼吸系列',
			img1:'images/09.jpg',
			oneself1:'生活电器',
			img2:'images/09.jpg',
			oneself2:'配件',
		},
		{
			name:'服饰箱包',
			img1:'images/08.jpg',
			oneself1:'服饰',
		},
		{
			name:'服饰箱包',
			img1:'images/08.jpg',
			oneself1:'鞋',
		},
	],
]

headleNav();
language();
shopp();


//头部
function headleNav(){
	var oBox=document.querySelector('.box');
	var oLi=document.querySelectorAll('.header ul li');
	var handTmer=0;
	for(var i=0;i<oLi.length-3;i++){
		oLi[i].index=i;
		oLi[i].onmouseenter=function(){
			clearTimeout(handTmer);
			handTmer=setTimeout(function(){
				oBox.style.border='1px solid #ccc';
				animate(oBox,{height:280,opacity:100},true,function(){
					oBox.style.overflow = 'visible';
				});
			},200)
			oBox.innerHTML='';
			loadData1(this.index);
		}
		oLi[i].onmouseleave = function(){
				hideNavContent();
		}
	}
	oBox.onmouseenter=function(){
		clearTimeout(handTmer);
	}
	oBox.onmouseleave=function(){
		hideNavContent();
	}
	function hideNavContent(){
		handTmer=setTimeout(function(){
			oBox.style.overflow = 'hidden';
			animate(oBox,{opacity:0,height:0},true,function(){
				oBox.style.borderTop = 'none';
			});
		},200)
	}
	
	function loadData1(index){
		var data1=aNavItem1[index];
		var html='';
		if(index%3==0){
			for(var i=0;i<data1.length;i++){
				html+='<dl class="dl-item">';
				html+=	'<dt>'+data1[i].name+'</dt>';
				html+=	'	<dd class="centent"><img src="'+data1[i].img1+'" alt="">'+data1[i].oneself1+'</dd>';
				if(data1[i].img2){
					html+=	'	<dd class="centent"><img src="'+data1[i].img2+'"alt="">'+data1[i].oneself2+'</dd>';
				}
				
				if(data1[i].img4){
					html+=	'	<dd class="centent"><img src="'+data1[i].img3+'" alt="">'+data1[i].oneself3+'</dd>';
					html+=	'	<dd class="centent"><img src="'+data1[i].img4+'"alt="">'+data1[i].oneself4+'</dd>';
				}
				html+=	'</dl>';
				
			}
		}else{
			html+=	'<ul class="centent2">'
			for(var i=0;i<data1.length;i++){
				html+=	'<li class="li99"><img src="'+data1[i].img+'" alt="" class="photo"><p class="name">'+data1[i].name+'</p><p class="price">'+data1[i].price+'</p></li>';
			}
			html+=	'</ul>';
		}
		
		oBox.innerHTML=html;
	}
}



//购物车

function shopp(){
	var oBox1=document.getElementById('shopping');
	var oShopp=document.getElementById('boxshopp');
	var Tmer=0;
	oBox1.onmouseenter=function(){
		clearTimeout(Tmer);
		oShopp.style.display='block';
	}
	oShopp.onmouseenter=function(){
		clearTimeout(tmer)
		this.style.display='block';
	}
	oShopp.onmouseleave=function(){
		this.style.display='none';
	}
	oBox1.onmouseleave=function(){
		tmer=setTimeout(function(){
			oShopp.style.display='none';
		},500);
	}
}



//底部中英文切换
function language(){
	var oBox8=document.querySelector('.box8');
	var oBox9=document.querySelector('.box9');
	var oBox10=document.querySelector('.box10');
	var oBox11=document.querySelector('.box11');
	var oFather=document.querySelector('.father');
	

	oBox10.onclick=function(){
		oFather.style.display='block';
		oBox10.style.display='none';

		oBox8.onclick=function(){
			oFather.style.display='none';
			oBox10.style.display='block';
		}
		oBox9.onclick=function(){
			oFather.style.display='none';
			oBox10.style.display='none';
			oBox11.style.display='block'
		}
		oBox11.onclick=function(){
			oFather.style.display='block';
			oBox11.style.display='none';
		}
	}
}

