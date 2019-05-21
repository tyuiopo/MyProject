


var oBox=document.getElementById('header2')

var oBoxBottom=document.getElementById('box3')

Top();

window.addEventListener('scroll',yundong(oBox,100),false)
window.addEventListener('scroll',yundong(oBoxBottom,800),false)


function Top(){
	var oBtn1=document.getElementById('p1');
	var oBtn2=document.getElementById('p2');
	var oBtn3=document.getElementById('p3');
	var oBtn4=document.getElementById('p4');
	var oBoxMain1=document.querySelector('.main1');
	var oBoxMain2=document.querySelector('.main2');


	function Img1(){
	oBoxMain1.style.display='block';
	oBoxMain2.style.display='none';
	}

	function Img2(){
		oBoxMain1.style.display='none';
		oBoxMain2.style.display='block';
	}

	oBtn1.onclick=function (){
		oBtn2.className='active2';
		this.className='active1';
		Img1();
	}

	oBtn2.onclick=function (){
		oBtn1.className='active2';
		this.className='active1';
		Img2();
	}

	oBtn3.onclick=function(){
		oBtn4.className='active2';
		this.className='active1';
		Img1();
	}
	oBtn4.onclick=function(){
		oBtn3.className='active2';
		this.className='active1';
		Img2();
	}
}

