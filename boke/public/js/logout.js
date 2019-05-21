
//用户退出
;(function($){
	$('#logout').on('click',function(){
		$.ajax({
			url:'/user/logout'
		})
		.done(function(result){
			if(result.status == 0){//成功
				// window.location.reload();
				window.location.href = '/'
			}else{//失败
				$err.html(result.message);
			}
		})
		.fail(function(err){
			$err.html('请求失败,请稍后再试一试');	
		})
	})
})(jQuery);