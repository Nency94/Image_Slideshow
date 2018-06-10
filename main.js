
$(window ).load(function(){
	var current_img =0;
	var previous_img;
	fade(current_img,previous_img,1);
	
	function fade(current_img,previous_img,orientation){	
	// $("#main_div").addClass("float_clear");
	previous_img=current_img;
    current_img=(current_img+1)%5;
	if(orientation == 1){
		$(".img").removeClass(" top right bottom").addClass("left");
		orientation=2;
		simple_transaction(current_img,previous_img,orientation);
		setTimeout(function(){ fade(current_img,previous_img,orientation) },1000);
	}else if(orientation == 2){
		$(".img").removeClass("left   top bottom").addClass("right");
		orientation=3;
		simple_transaction(current_img,previous_img,orientation);
		setTimeout(function(){ fade(current_img,previous_img,orientation) },1000);
	}else if(orientation == 3){
		$(".img").removeClass("left top ").addClass("top");
		orientation=4;
		simple_up_down_transaction(current_img,previous_img,orientation);
		setTimeout(function(){ fade(current_img,previous_img,orientation) },1000);
	}else if(orientation == 4){
		$(".img").removeClass("left top right ").addClass("bottom");
		orientation=1;
		simple_up_down_transaction(current_img,previous_img,orientation);
		setTimeout(function(){ fade(current_img,previous_img,orientation) },1000);}
	else{
		$("#"+previous_img).css({
    	 'z-index': current_img-1
    	});
    	$("#"+current_img).css({
    	'z-index': current_img,
    	'margin':'0 auto',
    	'width': '0%',
		'height':'100%',
		'display':'block'
    	}).animate({
        'width': "100%",
        'height':"100%",
        'transform': 'rotate(180deg)' 
    	}, {
      	'duration': 1000,
      	'easing': "linear"
       	}
    	);
    	orientation=1;
    	setTimeout(function(){ fade(current_img,previous_img,orientation) },1000);
	}


	
	
	};

	function simple_transaction(current_img,previous_img,orientation){
	$(".img").css({
		'z-index': '-10',
		'width':'100%',
		'height':'100%',
		'display':'block'
	});

	$("#"+previous_img).css({'z-index': current_img-1});
    $("#"+current_img).css({
    	'z-index': current_img,
    	'width': '0',
		'height':'100%'
    }).animate({
        'width': "100%",
        'height':"100%"    
    }, {
      'duration': 1000,
      'easing': "linear"
       }
    );
   
	}

	function simple_up_down_transaction(current_img,previous_img,orientation){
	$(".img").css({
		'z-index': '-10',
		'width':'100%',
		'height':'100%',
		'display':'block'
	});

	$("#"+previous_img).css({'z-index': current_img-1});
    $("#"+current_img).css({
    	'z-index': current_img,
    	'width': '100%',
		'height':'0'
    }).animate({
        'width': "100%",
        'height':"100%"    
    }, {
      'duration': 1000,
      'easing': "linear"
       }
    );
   
	}

 });