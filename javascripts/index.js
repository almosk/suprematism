$(function() {
	var rectangle = (element) => {
		document.querySelector(element).style.left = Math.floor(Math.random()*(40-20)+20)+'%';
		document.querySelector(element).style.top = Math.floor(Math.random()*(40-20)+20)+'%';
		// document.querySelector(element).style.width = Math.floor(Math.random()*(100-20)+20)+'%';
		// document.querySelector(element).style.height = Math.floor(Math.random()*(100-20)+20)+'%';
		// document.querySelector(element).style.backgroundColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
		document.querySelector(element).style.transform = 'rotate(' + Math.floor(Math.random()*360) + 'deg) translateX(' + Math.floor(Math.random()*(100-0)+0) + '%) translateY(' + Math.floor(Math.random()*(100-0)+0) + '%)';
	}

	// rectangle('.rectangle.f1');
	// rectangle('.rectangle.f2');
	// rectangle('.rectangle.f3');
	// rectangle('.rectangle.f4');
	// rectangle('.rectangle.f5');
	// rectangle('.rectangle.f6');
	// rectangle('.rectangle.f7');
	// document.querySelector('.screen').style.backgroundColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

	$('.elements').click(function() {
		rectangle('.rectangle.f1');
		rectangle('.rectangle.f2');
		rectangle('.rectangle.f3');
		rectangle('.rectangle.f4');
		rectangle('.rectangle.f5');
		rectangle('.rectangle.f6');
		rectangle('.rectangle.f7');
	});

	var button = document.querySelector('.newWallpaper');
	document.onkeyup = (e) => {
		if(e.keyCode == 32){
			rectangle('.rectangle.f1');
			rectangle('.rectangle.f2');
			rectangle('.rectangle.f3');
			rectangle('.rectangle.f4');
			rectangle('.rectangle.f5');
			rectangle('.rectangle.f6');
			rectangle('.rectangle.f7');

		}
	}
});
