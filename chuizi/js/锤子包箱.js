var oBox=document.querySelector('.oneself2')
var oBoxBottom=document.getElementById('box3')
language();


window.addEventListener('scroll',yundong(oBox,100),false)
window.addEventListener('scroll',yundong(oBoxBottom,800),false)


function language(){
	var oBox8=document.querySelector('.survey');
	var oBox9=document.querySelector('.skill');
	var oFather1=document.querySelector('.main');

	var oBox10=document.querySelector('.span2');
	var oBox11=document.querySelector('.span3');
	var oFather2=document.querySelector('.main2');
	

	oBox8.onclick=function(){
		oFather1.style.display='block';
		oFather2.style.display='none';
		this.className='survey active';
		oBox10.className='span2 active';
		oBox9.className='skill';
		oBox11.className='span3';
	}
	oBox9.onclick=function(){
		oFather2.style.display='block';
		oFather1.style.display='none';
		oBox8.className='survey';
		oBox10.className='span2';
		this.className='skill active';
		oBox11.className='span3 active';
	}
	oBox10.onclick=function(){
		oFather1.style.display='block';
		oFather2.style.display='none';
		this.className='span2 active';
		oBox8.className='survey active';
		oBox9.className='skill';
		oBox11.className='span3';
	}
	oBox11.onclick=function(){
		oFather2.style.display='block';
		oFather1.style.display='none';
		oBox9.className='skill active'
		this.className='span3 active';
		oBox8.className='survey';
		oBox10.className='span2';	
	}
}

