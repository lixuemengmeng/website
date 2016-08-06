$(function(){
	$li=$("#change-img li");
	$img=$("#change-img img");
	$navDiv=$(".senav");

	var index=0;
	$("#ipt").focus(function(){
		if($("#ipt").val()=="请输入商品名称"){
			$("#ipt").val("");
		}
		
	});
	$("#ipt").blur(function(){
		if($("#ipt").val()==""){
			$("#ipt").val("请输入商品名称");
		}
	
	});
	// $("#skin li").on("click",function(){
	// 	$(this).addClass("selected").siblings().removeClass("selected");
	// 	$.cookie("",$name.val(),{expires:5});
	
	// });
	// $("#skin1").on("click",function(){
		
	// 	$("#title").css({
	// 		 background: "#4A4A4A"
	// 	});
	// 	$("#product h2").css({
	// 		 background: "#4A4A4A"
	// 	});
		
	// });
	// $("#skin2").on("click",function(){
		
	// 	$("#title").css({
	// 		 background: "#BE46D8"
	// 	});
	// 	$("#product h2").css({
	// 		 background: "#BE46D8"
	// 	});
	// });
	// $("#skin3").on("click",function(){
		
	// 	$("#title").css({
	// 		 background: "#E44072"
	// 	});
	// 	$("#product h2").css({
	// 		 background: "#E44072"
	// 	});
	// });
	// $("#skin4").on("click",function(){
		
	// $("#title").css({
	// 		 background: "#37C7D4"
	// 	});
	// 	$("#product h2").css({
	// 		 background: "#37C7D4"
	// 	});
	// });
	// $("#skin5").on("click",function(){
		
	// 	$("#title").css({
	// 		 background: "#F9AF2A"
	// 	});
	// 	$("#product h2").css({
	// 		 background: "#F9AF2A"
	// 	});
	// });
	// $("#skin6").on("click",function(){
		
	// 	$("#title").css({
	// 		 background: "#B1D410"
	// 	});
	// 	$("#product h2").css({
	// 		 background: "#B1D410"
	// 	});
	// });

	$("#title-content li").hover(function(){
		console.log($(this));
		$(this).children(".senav").show();
		
	},function(){
		$(this).children(".senav").hide();
	});
	setInterval(function(){
		if(index==$img.length-1){
			index=-1;
		}
		index++
		$li.eq(index).trigger("mouseover");
	},2000);
	

	$li.on("mouseover",function(){
		index=$(this).index();
		$img.eq($(this).index()).stop().fadeIn("slow").siblings("img").stop().fadeOut("slow");

		$(this).addClass("li-select").siblings().removeClass("li-select");
});


$("#actitle li").on("click",function(){
	$(this).addClass("red").siblings().removeClass("red");
	
	
	$(".acimg").animate({
		left:-$(this).index()*790
	});

});
$("#announcement li a").hover(function(e){
	this.mytitle=this.title;
	var $tit=$("<div id='title1' style='left:"+(e.pageX+30)+ 'px; top:'+(e.pageY+30)+"px;'>"+this.mytitle+"</div>");
	
	$tit.appendTo("body").stop().show("slow");
	this.title="";
},function(){
	this.title=this.mytitle;
	$("#title1").remove();


});
$("#announcement li a").on("mousemove",function(e){
		$("#title1").offset({
			top:e.pageY+30,
			left:e.pageX+30
		})
});








	});
	