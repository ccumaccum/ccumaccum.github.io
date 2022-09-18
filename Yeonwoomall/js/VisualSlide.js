// JavaScript Document
$(document).ready(function(e) {
	

	var g=$('#visual > ul')
	var t=g.find('li');
	
	var len=t.length;
	
	var current=0;
	
	var first=t.filter(':first');
	var last=t.filter(':last');
	
	first.before(last.clone(true));
	last.after(first.clone(true));
	

	$('#btn ul li').click(function(e) {
		current=$(this).index();
		$('#btn ul li').removeClass('active');
		$(this).addClass('active');
		g.animate({left:-(100)*(current+1)+'%'});	
    });
	
	$('.right_btn').click(function(e) {
		e.preventDefault();
        g.animate({'left':'-='+'100%'}, function(){
			current++;
			if(current>2){
				current=0;
				g.css('left',-'100'+'%');
			}

			$('#btn ul li').each(function(){
				if(current==$(this).index()){
					$('#btn ul li').removeClass('active');
					$(this).addClass('active');
				}
			});
		});
    });
	
	$('.left_btn').click(function(e) {
		e.preventDefault();
        g.animate({'left':'+='+'100%'}, function(){
			current--;
			if(current<0){
				current=len-1;
				g.css('left',-'100'*len+'%');
			}

			$('#btn ul li').each(function(){
				if(current==$(this).index()){
					$('#btn ul li').removeClass('active');
					$(this).addClass('active');
				}
			});
		});
    });
	
	//var run=setInterval('autofn()',3000);
	
	function runFuc(){
		run = setInterval(function() {
			autofn();
		},3000);
	}
	
	//$('#visual').mouseenter(function(){
		//clearInterval(run);
	//}).mouseleave(function(){
		//runFuc();
	//});
	
	runFuc();
});

function autofn() {
	$('.right_btn').click();
}










