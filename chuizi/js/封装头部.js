
function yundong(obj,num){
	return function(){
		var isShow=false;
		if(getScrollTop()>=num){
			if(!isShow){
				obj.style.display='block';
				if(num>=800){
					animate(oBoxBottom,{bottom:20},true);
				}
				isShow=true;
			}
		}else{
			if(!isShow){
				obj.style.display='none';
				if(num<800){
					animate(oBoxBottom,{bottom:0},true,function(){
						oBoxBottom.style.display='none';
					});
				}
				isShow=false;
			}	
		}
	}
}
