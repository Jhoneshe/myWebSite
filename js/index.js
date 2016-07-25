$(function(){
	var $bgMusic = $(".music");
	var $mSide = $(".music-side");
    var $voice = $("#voice");
	var onOff = true;
	
	//音乐播放控制
	$bgMusic.click(function(){
		if(onOff){
			$(this).removeClass("run");
			$mSide.removeClass("play-bar");
            $voice[0].pause();
		}else{
			$(this).addClass("run");
			$mSide.addClass("play-bar");
            $voice[0].play();
		}
		onOff = !onOff;
	});

	//侧边菜单进出控制
	var $menuBtn = $("#menu");
    var $side = $("#side");
    var sideFlag = false;

    $menuBtn.click(function (e) {
       changeSidebr(e);
    });
    
    $("#click-me").click(function(e){
    	changeSidebr(e);
    });
    
    function changeSidebr(e){
    	e.stopPropagation();
        if(!sideFlag){
            $side.css("left","0");
            $menuBtn.css("transform","rotate(-45deg)");
        }else {
            $side.css("left","-400px");
            $menuBtn.css("transform","rotate(0deg)");
        }
        sideFlag = !sideFlag;
    }
    
    $("body").click(function () {
        $side.css("left","-400px");
        $menuBtn.css("transform","rotate(0deg)");
        sideFlag = false;
    });
    

    var $pages = $(".page");
    var $lis = $("#side li");
    
    $lis.click(function () {
        $(this).siblings("li").removeClass("current");
        $(this).addClass("current");
       var index = $lis.index($(this));
        $pages.each(function (i,dom) {
            if(i != index){
                $(dom).fadeOut();
            }
        });
        $($pages[index]).fadeIn();

        var aBg = ["#000","#117639","#5e0806","#040455","#a8a205"];
        $("body").css("background-image","radial-gradient(#eee," + aBg[index] + ")");
        var mySrc = "images/menu" + index + ".png";
        $("#menu").children("img").attr("src",mySrc);
    });
    
    var myFlag = false;
    $lis[2].addEventListener("click",function(){
    	if(!myFlag){
    		$('#myStat').circliful();
        	$('#myStat2').circliful();
        	myFlag = true;
    	}
    })

    $pages.each(function (i,dom) {
        if (i != 0){
            $(dom).css("display","none");
        }
    })
 
 	//图片转换
	var $rBtn = $("#right-arrow");
	var $lBtn = $("#left-arrow");
	var $demos = $(".demo");
	var count = 0;
	$rBtn.click(function(){
		$($demos[count])
		.removeClass("w-show")
		.removeClass("w-show2")
		.removeClass("w-hide2")
		.addClass("w-hide");
		count++;
		if(count == $demos.length){
			count = 0;
		}
		$($demos[count])
		.removeClass("w-hide")
		.removeClass("w-hide2")
		.removeClass("w-show2")
		.addClass("w-show");
	});
	
	$lBtn.click(function(){
		$($demos[count])
		.removeClass("w-show")
		.removeClass("w-show2")
		.removeClass("w-hide")
		.addClass("w-hide2");
		count--;
		if(count == -1){
			count = $demos.length - 1;
		}
		$($demos[count])
		.removeClass("w-show2")
		.removeClass("w-hide")
		.removeClass("w-hide2")
		.addClass("w-show2");
	});
	
});
