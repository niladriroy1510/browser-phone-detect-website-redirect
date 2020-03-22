if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
	   var url = "http://test.com";    
	   $(location).attr('href',url);
}