$(window).scroll(function() {
	if ($("#main-nav").offset().top > 50) {
		$("#main-nav").fadeIn("fast");
	} else {
		$("#main-nav").fadeOut("slow");
	}
});
var evecli1=0;
$(document).ready(function(){
	$("#eveliid1").click(function(){
		evecli1++;
		if(evecli1%2==0)
			$("#eveliid1").css("background-color","#ffffff");
		else
			$("#eveliid1").css("background-color","#eeeeee");
	});
	$("#eveliid1").hover(function(){
		$("#eveliid1 .events3dots").fadeIn("fast");
	}, function(){
		$("#eveliid1 .events3dots").fadeOut("fast");
	});
});

var evecli2=0;
$(document).ready(function(){
	$("#eveliid2").click(function(){
		evecli2++;
		if(evecli2%2==0)
			$("#eveliid2").css("background-color","#ffffff");
		else
			$("#eveliid2").css("background-color","#eeeeee");
	});
	$("#eveliid2").hover(function(){
		$("#eveliid2 .events3dots").fadeIn("fast");
	}, function(){
		$("#eveliid2 .events3dots").fadeOut("fast");
	});
});

var evecli3=0;
$(document).ready(function(){
	$("#eveliid3").click(function(){
		evecli3++;
		if(evecli3%2==0)
			$("#eveliid3").css("background-color","#ffffff");
		else
			$("#eveliid3").css("background-color","#eeeeee");
	});
	$("#eveliid3").hover(function(){
		$("#eveliid3 .events3dots").fadeIn("fast");
	}, function(){
		$("#eveliid3 .events3dots").fadeOut("fast");
	});
});

var evecli4=0;
$(document).ready(function(){
	$("#eveliid4").click(function(){
		evecli4++;
		if(evecli4%2==0)
			$("#eveliid4").css("background-color","#ffffff");
		else
			$("#eveliid4").css("background-color","#eeeeee");
	});
	$("#eveliid4").hover(function(){
		$("#eveliid4 .events3dots").fadeIn("fast");
	}, function(){
		$("#eveliid4 .events3dots").fadeOut("fast");
	});
});

var evecli5=0;
$(document).ready(function(){
	$("#eveliid5").click(function(){
		evecli5++;
		if(evecli5%2==0)
			$("#eveliid5").css("background-color","#ffffff");
		else
			$("#eveliid5").css("background-color","#eeeeee");
	});
	$("#eveliid5").hover(function(){
		$("#eveliid5 .events3dots").fadeIn("fast");
	}, function(){
		$("#eveliid5 .events3dots").fadeOut("fast");
	});
});
/*-------------for achievements-----------------*/
var achicli1=0;
$(document).ready(function(){
	$("#achili1").click(function(){
		achicli1++;
		if(achicli1%2==0)
			$("#achili1").css("background-color","#ffffff");
		else
			$("#achili1").css("background-color","#eeeeee");
	});
	$("#achili1").hover(function(){
		$("#achili1 .events3dots").fadeIn("fast");
	}, function(){
		$("#achili1 .events3dots").fadeOut("fast");
	});
});

var achicli2=0;
$(document).ready(function(){
	$("#achili2").click(function(){
		achicli2++;
		if(achicli2%2==0)
			$("#achili2").css("background-color","#ffffff");
		else
			$("#achili2").css("background-color","#eeeeee");
	});
	$("#achili2").hover(function(){
		$("#achili2 .events3dots").fadeIn("fast");
	}, function(){
		$("#achili2 .events3dots").fadeOut("fast");
	});
});

var achicli3=0;
$(document).ready(function(){
	$("#achili3").click(function(){
		achicli3++;
		if(achicli3%2==0)
			$("#achili3").css("background-color","#ffffff");
		else
			$("#achili3").css("background-color","#eeeeee");
	});
	$("#achili3").hover(function(){
		$("#achili3 .events3dots").fadeIn("fast");
	}, function(){
		$("#achili3 .events3dots").fadeOut("fast");
	});
});

$('#nav nav a').on('click', function(event) {
    $('.navbara').removeClass('aactive');
    $(this).addClass('aactive');
});

$(window).on('scroll', function() {
    $('.target').each(function() {
        if($(window).scrollTop() >= $(this).position().top-120) {
            var id = $(this).attr('id');
            $('#nav nav a').removeClass('aactive');
            $('#nav nav a[href=#'+ id +']').addClass('aactive');
        }
    });
});
