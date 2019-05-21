function animate(obj,options,isLinear,fnEnd){
		if(isLinear==undefined){
				isLinear=true;
			}
		clearInterval(obj.tmer);
		var iSneep=0;
		
		obj.tmer=setInterval(function(){
			var isStopAll=true;
			for(var attr in options){
				var isStop=false;
				var current=parseFloat(getComputedStyle(obj,false)[attr])

				if(attr=='opacity'){
					current=Math.round(current*100);
				}
				if(isLinear){
					if(current<options[attr]){
						iSneep=38;
					}else{
						iSneep=-38;
					}
					if(Math.abs(options[attr]-current)<Math.abs(iSneep)){
						if(attr=='opacity'){
							obj.style.opacity=options[attr]/100;
						}else{
							obj.style[attr]=options[attr]+'px';
						}
						isStop=true;
					}else{
						isStopAll=false;
					}
				}else{
					iSneep=(options[attr]-current)/10;
					iSneep= iSneep<0?Math.floor(iSneep):Math.ceil(iSneep);
					if(!iSneep){
						isStop=true;
					}else{
						isStopAll=false;
					}
				}
				if(!isStop){
					if(attr=='opacity'){
						obj.style.opacity=(current+iSneep)/100;
					}else{
						obj.style[attr]=current+iSneep+'px'
					}
				}
			}
			if(isStopAll){
				clearInterval(obj.tmer);
				if(typeof fnEnd=='function'){
					fnEnd();
				}
			}
		},30)
	}

	function getScrollTop(){
		return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop
	}
	function getScrollLeft(){
		return window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft
	}