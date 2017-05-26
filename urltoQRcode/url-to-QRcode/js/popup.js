document.addEventListener('DOMContentLoaded', function (tabId,changeInfo,tab) {
	
	chrome.tabs.getSelected(function(tab){
		var url=tab.url;
		var title=tab.title;
		reCode(url,title)
	});
	
	$('.ok').click(function(){
		var urlInput=$('input').val();
		reCode(urlInput,urlInput);
	});
	
	$('.newUrl input').keyup(function(event){
		if (event.keyCode == 13) {
			var urlInput=$('input').val();
			reCode(urlInput,urlInput);
		}
	});
	
	//生成二维码
	var $info=$('#info');//标题
	var $QRcode=$("#QRcode");//网址
	function reCode(url,title){
		$info.text("网页标题："+title);
		$QRcode.empty();
		$QRcode.qrcode({
			//render	: "table",
			text	: url,
			width:"140",
			height:"140"
		});
	}
});
