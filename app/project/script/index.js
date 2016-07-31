(function() {

	//自适应页面高度
	var fixedHeight = 0;
//	var headerHeight = $('header').height() || 0;
	var headerHeight = 0;
	var footerHeight = 0;
	
	//document.title = document.documentElement.clientHeight;
	setTimeout(function(){
		//延迟以便获取准确的高度，微信中默认打开webview获取的页面高度很高
		var mHeight = document.documentElement.clientHeight - headerHeight;
		$('.container').css('min-height',mHeight);
	}, 100);
})();























