$(function(){
	// начало кода
	$('.topmenu a').bind({
		'mouseover':function(){
			data = $(this).attr('data-url');
			//console.log(data);
			$('#header').css('background','url('+data+')');
	
		},
		'mouseout':function(){
			$('#header').css('background','url(media/img/fon.jpg');
		}
		
	});

	$('.leftmenu a').click(function(){
			 data = $(this).attr('data-title');
			 databody = $(this).attr('data-body');
			 $('.h2main').text(data);
			 $('.maintext').html(databody);
	});
});			