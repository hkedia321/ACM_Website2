$(window).scroll(function() {
	if ($("#main-nav").offset().top > 50) {
		$("#main-nav").fadeIn("fast");
	} else {
		$("#main-nav").fadeOut("slow");
	}
});
// When the DOM is ready, run this function
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });
});

var evecli1=0;
$(document).ready(function(){
	$("#eveliid1").click(function(){
		evecli1++;
		if(evecli1%2==0){
			$("#eveliid1").css("background-color","#ffffff");
			$("#eveliid1 .events3dots").removeClass('fa-arrow-up');
			$("#eveliid1 .events3dots").addClass('fa-arrow-down');
		}

		else{
			$("#eveliid1").css("background-color","#eeeeee");
			$("#eveliid1 .events3dots").removeClass('fa-arrow-down');
			$("#eveliid1 .events3dots").addClass('fa-arrow-up');
		}
	});
});
$(document).ready(function(){
	$("#eveliid1").hover(function(){
		if(evecli1%2==0){
			$("#eveliid1 .events3dots").addClass('fa-arrow-down');
			$("#eveliid1 .events3dots").fadeIn("fast");
		}
		else{
			$("#eveliid1 .events3dots").addClass('fa-arrow-up');
			$("#eveliid1 .events3dots").fadeIn("fast");
		}
	}, function(){
		if(evecli1%2==0){
			$("#eveliid1 .events3dots").fadeOut("fast");
			$("#eveliid1 .events3dots").removeClass('fa-arrow-down');
		}
		else{
			$("#eveliid1 .events3dots").fadeOut("fast");
			$("#eveliid1 .events3dots").removeClass('fa-arrow-up');
		}
	});
});

var evecli2=0;
$(document).ready(function(){
	$("#eveliid2").click(function(){
		evecli2++;
		if(evecli2%2==0){
			$("#eveliid2").css("background-color","#ffffff");
			$("#eveliid2 .events3dots").removeClass('fa-arrow-up');
			$("#eveliid2 .events3dots").addClass('fa-arrow-down');
		}

		else{
			$("#eveliid2").css("background-color","#eeeeee");
			$("#eveliid2 .events3dots").removeClass('fa-arrow-down');
			$("#eveliid2 .events3dots").addClass('fa-arrow-up');
		}
	});
});
$(document).ready(function(){
	$("#eveliid2").hover(function(){
		if(evecli2%2==0){
			$("#eveliid2 .events3dots").addClass('fa-arrow-down');
			$("#eveliid2 .events3dots").fadeIn("fast");
		}
		else{
			$("#eveliid2 .events3dots").addClass('fa-arrow-up');
			$("#eveliid2 .events3dots").fadeIn("fast");
		}
	}, function(){
		if(evecli2%2==0){
			$("#eveliid2 .events3dots").fadeOut("fast");
			$("#eveliid2 .events3dots").removeClass('fa-arrow-down');
		}
		else{
			$("#eveliid2 .events3dots").fadeOut("fast");
			$("#eveliid2 .events3dots").removeClass('fa-arrow-up');
		}
	});
});

var evecli3=0;
$(document).ready(function(){
	$("#eveliid3").click(function(){
		evecli3++;
		if(evecli3%2==0){
			$("#eveliid3").css("background-color","#ffffff");
			$("#eveliid3 .events3dots").removeClass('fa-arrow-up');
			$("#eveliid3 .events3dots").addClass('fa-arrow-down');
		}

		else{
			$("#eveliid3").css("background-color","#eeeeee");
			$("#eveliid3 .events3dots").removeClass('fa-arrow-down');
			$("#eveliid3 .events3dots").addClass('fa-arrow-up');
		}
	});
});
$(document).ready(function(){
	$("#eveliid3").hover(function(){
		if(evecli3%2==0){
			$("#eveliid3 .events3dots").addClass('fa-arrow-down');
			$("#eveliid3 .events3dots").fadeIn("fast");
		}
		else{
			$("#eveliid3 .events3dots").addClass('fa-arrow-up');
			$("#eveliid3 .events3dots").fadeIn("fast");
		}
	}, function(){
		if(evecli3%2==0){
			$("#eveliid3 .events3dots").fadeOut("fast");
			$("#eveliid3 .events3dots").removeClass('fa-arrow-down');
		}
		else{
			$("#eveliid3 .events3dots").fadeOut("fast");
			$("#eveliid3 .events3dots").removeClass('fa-arrow-up');
		}
	});
});

var evecli4=0;
$(document).ready(function(){
	$("#eveliid4").click(function(){
		evecli4++;
		if(evecli4%2==0){
			$("#eveliid4").css("background-color","#ffffff");
			$("#eveliid4 .events3dots").removeClass('fa-arrow-up');
			$("#eveliid4 .events3dots").addClass('fa-arrow-down');
		}

		else{
			$("#eveliid4").css("background-color","#eeeeee");
			$("#eveliid4 .events3dots").removeClass('fa-arrow-down');
			$("#eveliid4 .events3dots").addClass('fa-arrow-up');
		}
	});
});
$(document).ready(function(){
	$("#eveliid4").hover(function(){
		if(evecli4%2==0){
			$("#eveliid4 .events3dots").addClass('fa-arrow-down');
			$("#eveliid4 .events3dots").fadeIn("fast");
		}
		else{
			$("#eveliid4 .events3dots").addClass('fa-arrow-up');
			$("#eveliid4 .events3dots").fadeIn("fast");
		}
	}, function(){
		if(evecli4%2==0){
			$("#eveliid4 .events3dots").fadeOut("fast");
			$("#eveliid4 .events3dots").removeClass('fa-arrow-down');
		}
		else{
			$("#eveliid4 .events3dots").fadeOut("fast");
			$("#eveliid4 .events3dots").removeClass('fa-arrow-up');
		}
	});
});

var evecli5=0;
$(document).ready(function(){
	$("#eveliid5").click(function(){
		evecli5++;
		if(evecli5%2==0){
			$("#eveliid5").css("background-color","#ffffff");
			$("#eveliid5 .events3dots").removeClass('fa-arrow-up');
			$("#eveliid5 .events3dots").addClass('fa-arrow-down');
		}

		else{
			$("#eveliid5").css("background-color","#eeeeee");
			$("#eveliid5 .events3dots").removeClass('fa-arrow-down');
			$("#eveliid5 .events3dots").addClass('fa-arrow-up');
		}
	});
});
$(document).ready(function(){
	$("#eveliid5").hover(function(){
		if(evecli5%2==0){
			$("#eveliid5 .events3dots").addClass('fa-arrow-down');
			$("#eveliid5 .events3dots").fadeIn("fast");
		}
		else{
			$("#eveliid5 .events3dots").addClass('fa-arrow-up');
			$("#eveliid5 .events3dots").fadeIn("fast");
		}
	}, function(){
		if(evecli5%2==0){
			$("#eveliid5 .events3dots").fadeOut("fast");
			$("#eveliid5 .events3dots").removeClass('fa-arrow-down');
		}
		else{
			$("#eveliid5 .events3dots").fadeOut("fast");
			$("#eveliid5 .events3dots").removeClass('fa-arrow-up');
		}
	});
});
/*-------------for achievements-----------------*/
var achicli1=0;
$(document).ready(function(){
	$("#achili1").click(function(){
		achicli1++;
		if(achicli1%2==0){
			$("#achili1").css("background-color","#ffffff");
			$("#achili1 .events3dots").removeClass('fa-arrow-up');
			$("#achili1 .events3dots").addClass('fa-arrow-down');
		}

		else{
			$("#achili1").css("background-color","#eeeeee");
			$("#achili1 .events3dots").removeClass('fa-arrow-down');
			$("#achili1 .events3dots").addClass('fa-arrow-up');
		}
	});
});
$(document).ready(function(){
	$("#achili1").hover(function(){
		if(achicli1%2==0){
			$("#achili1 .events3dots").addClass('fa-arrow-down');
			$("#achili1 .events3dots").fadeIn("fast");
		}
		else{
			$("#achili1 .events3dots").addClass('fa-arrow-up');
			$("#achili1 .events3dots").fadeIn("fast");
		}
	}, function(){
		if(achicli1%2==0){
			$("#achili1 .events3dots").fadeOut("fast");
			$("#achili1 .events3dots").removeClass('fa-arrow-down');
		}
		else{
			$("#achili1 .events3dots").fadeOut("fast");
			$("#achili1 .events3dots").removeClass('fa-arrow-up');
		}
	});
});

var achicli2=0;
$(document).ready(function(){
	$("#achili2").click(function(){
		achicli2++;
		if(achicli2%2==0){
			$("#achili2").css("background-color","#ffffff");
			$("#achili2 .events3dots").removeClass('fa-arrow-up');
			$("#achili2 .events3dots").addClass('fa-arrow-down');
		}

		else{
			$("#achili2").css("background-color","#eeeeee");
			$("#achili2 .events3dots").removeClass('fa-arrow-down');
			$("#achili2 .events3dots").addClass('fa-arrow-up');
		}
	});
});
$(document).ready(function(){
	$("#achili2").hover(function(){
		if(achicli2%2==0){
			$("#achili2 .events3dots").addClass('fa-arrow-down');
			$("#achili2 .events3dots").fadeIn("fast");
		}
		else{
			$("#achili2 .events3dots").addClass('fa-arrow-up');
			$("#achili2 .events3dots").fadeIn("fast");
		}
	}, function(){
		if(achicli2%2==0){
			$("#achili2 .events3dots").fadeOut("fast");
			$("#achili2 .events3dots").removeClass('fa-arrow-down');
		}
		else{
			$("#achili2 .events3dots").fadeOut("fast");
			$("#achili2 .events3dots").removeClass('fa-arrow-up');
		}
	});
});

var achicli3=0;
$(document).ready(function(){
	$("#achili3").click(function(){
		achicli3++;
		if(achicli3%2==0){
			$("#achili3").css("background-color","#ffffff");
			$("#achili3 .events3dots").removeClass('fa-arrow-up');
			$("#achili3 .events3dots").addClass('fa-arrow-down');
		}

		else{
			$("#achili3").css("background-color","#eeeeee");
			$("#achili3 .events3dots").removeClass('fa-arrow-down');
			$("#achili3 .events3dots").addClass('fa-arrow-up');
		}
	});
});
$(document).ready(function(){
	$("#achili3").hover(function(){
		if(achicli3%2==0){
			$("#achili3 .events3dots").addClass('fa-arrow-down');
			$("#achili3 .events3dots").fadeIn("fast");
		}
		else{
			$("#achili3 .events3dots").addClass('fa-arrow-up');
			$("#achili3 .events3dots").fadeIn("fast");
		}
	}, function(){
		if(achicli3%2==0){
			$("#achili3 .events3dots").fadeOut("fast");
			$("#achili3 .events3dots").removeClass('fa-arrow-down');
		}
		else{
			$("#achili3 .events3dots").fadeOut("fast");
			$("#achili3 .events3dots").removeClass('fa-arrow-up');
		}
	});
});

$('#nav nav a').on('click', function(event) {
	$('.navbara').removeClass('aactive');
	$(this).addClass('aactive');
});



/*For navbar active*/
$(window).on('scroll', function() {
	$('.target').each(function() {
		if($(window).scrollTop() >= $(this).position().top-120) {
			var id = $(this).attr('id');
			$('#nav nav a').removeClass('aactive');
			$('#nav nav a[href=#'+ id +']').addClass('aactive');
		}
	});
});
