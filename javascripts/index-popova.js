$(function() {
	var rectangle = (element) => {
		document.querySelector(element).style.left = Math.floor(Math.random()*(80-10)+10)+'%';
		document.querySelector(element).style.top = Math.floor(Math.random()*(80-10)+10)+'%';
		// document.querySelector(element).style.width = Math.floor(Math.random()*(100-20)+20)+'%';
		// document.querySelector(element).style.height = Math.floor(Math.random()*(100-20)+20)+'%';
		// document.querySelector(element).style.backgroundColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
		document.querySelector(element).style.transform = 'rotate(' + Math.floor(Math.random()*360) + 'deg) translateX(' + Math.floor(Math.random()*(70-0)+0) + '%) translateY(' + Math.floor(Math.random()*(70-0)+0) + '%) scale(' + Math.floor(Math.random()*(12-6)+6)/10 + ')';
	}

	// var card = $(".ddd");
  // $(document).on("mousemove",function(e) {
  //   card.attr("style", "transform: rotateY(0deg) rotateX(0deg);");
  // });

	$('.screen').click(function() {
		rectangle('.rectangle.f1');
		rectangle('.rectangle.f2');
		rectangle('.rectangle.f3');
		rectangle('.rectangle.f4');
		// rectangle('.rectangle.f5');
		// rectangle('.rectangle.f6');
		// rectangle('.rectangle.f7');
		// rectangle('.rectangle.f8');
		$('div.tooriginal').removeClass('original')
	});

	$('.random').click(function() {
		rectangle('.rectangle.f1');
		rectangle('.rectangle.f2');
		rectangle('.rectangle.f3');
		rectangle('.rectangle.f4');
		// rectangle('.rectangle.f5');
		// rectangle('.rectangle.f6');
		// rectangle('.rectangle.f7');
		// rectangle('.rectangle.f8');
		$('div.tooriginal').removeClass('original')
	});

	var button = document.querySelector('.newWallpaper');
	document.onkeyup = (e) => {
		if(e.keyCode == 32){
			rectangle('.rectangle.f1');
			rectangle('.rectangle.f2');
			rectangle('.rectangle.f3');
			rectangle('.rectangle.f4');
			// rectangle('.rectangle.f5');
			// rectangle('.rectangle.f6');
			// rectangle('.rectangle.f7');
			// rectangle('.rectangle.f8');
			$('div.tooriginal').removeClass('original')
		}
	}


});

$(function() {
	var rectangle = (element) => {
		$('.rectangle').attr('style', '')
	}



	$('.tooriginal').click(function() {
		rectangle('.rectangle.f1');
		rectangle('.rectangle.f2');
		rectangle('.rectangle.f3');
		rectangle('.rectangle.f4');
		// rectangle('.rectangle.f5');
		// rectangle('.rectangle.f6');
		// rectangle('.rectangle.f7');
		// rectangle('.rectangle.f8');
		$('div.tooriginal').addClass('original')
	});
});
