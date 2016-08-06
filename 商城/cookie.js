$(function(){
	console.log(11);
	$("#title").removeClass().addClass($.cookie("classname"));
	 $("#product h2").removeClass().addClass($.cookie("classname"));
	 console.log(1);
	 $("#skin li").on("click",function(){
		
		$(this).addClass("selected").siblings().removeClass("selected");
		var classname2=this.className;	
		$.cookie("classname",classname2,{expires:5});
		
		$("#title").removeClass().addClass(classname2);
	 $("#product h2").removeClass().addClass(classname2);
	 });

});