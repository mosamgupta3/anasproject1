function order_now_value(objButton){  
x = objButton.name;
document.getElementById('lead_area').value = x;
document.getElementById('lead_org_price').value = "99";
}

$(document).ready(function() {
 
 $('.portfolio_various').fancybox({
	 padding: 2
	 });
	 
	 
	 
	 
	 
 $(".various").click(function(){
        var pkgname=$(this).attr('title');
         if ($(this).attr('title') !== undefined)
            {
                $('#lead_pkg_name').html(pkgname);
                $('#lead_name_field').val(pkgname);
                return;
            }
          else {
            var pkgname=$(this).attr('title');
            $('#lead_pkg_name').html("As Good as it Gets!");
          
            }
        return false;
        //Second Inner Function
         $('#lead_pkg_name').html(function(index, curHTML) {
            var lead_popup_text = curHTML.split(/[\s-]/),
            lead_new_text = '<span class="some">' + lead_popup_text.pop() + '</span>';
            return lead_popup_text.join(' ').concat(' ' + lead_new_text);
        });
        
    });

        $(".various").click(function(){
        var orgPrice=$(this).attr('href').split('=')[1]
        return false;
    });


	
	
	

	$('.s-bar').hover(function(){
		$(this).stop(true,true).animate({right:'184px'}, 500, 'easeOutExpo');
		$('.side-bars').css('z-index','1004');
		}, function(){
			$(this).animate({right:'0px'}, 500, 'easeOutBounce');
			$('.side-bars').css('z-index','999');
	});
	
	$('.cus-overlay').click( function(){
		$('.popup-form, .callback-form, .bxch').css({'overflow':'hidden'})
		$('.popup-form, .callback-form, .bxch').hide(300);
		$(this).fadeOut(300);
		$('.floating-form-wrap').animate({'margin-right': '-584px'})
	});
	
	$('.floating-form-wrap .form-handle, #slideform').click( function(){
		if($('.floating-form-wrap').css('margin-right')=='-584px'){
			$('.floating-form-wrap').animate({'margin-right': '0px'})
			$('.cus-overlay').fadeIn(300);
		}
		else{
			$('.floating-form-wrap').animate({'margin-right': '-584px'})
			$('.cus-overlay').fadeOut(300);
		}
	});
	
	$('.floating-banner').hover(function(){
	$('.floating-banner').stop(1,1).animate({'margin-left': '0px'},200);
	$('.cus-overlay').stop(1,1).fadeIn(200);
	},function(){
		$('.floating-banner').animate({'margin-left': '-610px'}, 200);
		$('.cus-overlay').fadeOut(200);
	});
	
 
	

 
	
	$('.cus-overlay').click( function(){
		$(this).fadeOut(300);
		$('.callback-form, .popup-form').removeClass('visibleit');
		$('.floating-form-wrap').animate({'margin-right': '-584px'})
	})
	
 
	
	
	$('.floating-form-wrap .form-handle, #slideform').click( function(){
		if($('.floating-form-wrap').css('margin-right')=='-584px'){
			$('.floating-form-wrap').animate({'margin-right': '0px'})
			$('.cus-overlay').fadeIn(300);
		}
		else{
			$('.floating-form-wrap').animate({'margin-right': '-584px'})
			$('.cus-overlay').fadeOut(300);
		}
	})
	
	
	$(window).scroll(function(){
		var topPlusWindowSize = $(window).scrollTop()+ $( window ).height();
		
		if( $('.floating-form-wrap')[0] && $('.side-bars')[0] ){
			var headerHeight = $( '.banner' ).height()-140; 
			if ( ( $(window).scrollTop() >= headerHeight  ) ){
				$('.floating-form-wrap, .side-bars').fadeIn( 300 );
				$('.floating-banner').fadeIn(300);
			}
			else {
				$('.floating-form-wrap, .side-bars').fadeOut( 300 );
				$('.floating-banner').fadeOut(300);
			}
		}
	});//window scroll end
	

	
	



    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");
    
    $('.order_button, .order-now-btn a.various, section.banner .col-md-5 a').click( function(){
        $('.popup-form').show(300).addClass('visibleit');
        $('.cus-overlay').fadeIn(300);
    });


    $('.cus-overlay').click( function(){
        $('.popup-form').css({'overflow':'hidden'})
        $('.popup-form').hide(300);
        $(this).fadeOut(300);
    });

    $('a.close').click( function(){
        $('.cus-overlay').trigger('click');
    });


//Website step Function


    $(".various").click(function(){
        var pkgname=$(this).attr('title');
         if ($(this).attr('title') !== undefined)
            {
                $('#lead_pkg_name').html(pkgname);
                $('#lead_name_field').val(pkgname);
                return;
            }
          else {
            var pkgname=$(this).attr('title');
            $('#lead_pkg_name').html("As Good as it Gets!");
          
            }
        return false;
        //Second Inner Function
         $('#lead_pkg_name').html(function(index, curHTML) {
            var lead_popup_text = curHTML.split(/[\s-]/),
            lead_new_text = '<span class="some">' + lead_popup_text.pop() + '</span>';
            return lead_popup_text.join(' ').concat(' ' + lead_new_text);
        });
        
    });

        $(".various").click(function(){
        var orgPrice=$(this).attr('href').split('=')[1]
        return false;
    });


	
	
	
	
	
	
	
	
	
        //process-slider
      
 var owl = $(".process-slider");
      if (screen.availWidth < $(window).width()) {
        var sWidth = screen.availWidth / 300;
      } else {
        var sWidth = $(window).width() / 300;
      }
      var qua = Math.floor(sWidth);
      if (qua < 1) { qua = 1; }
      owl.owlCarousel({
        items : qua,
        autoPlay:true,
        loop: true,
        pagination : true,
        paginationNumbers: false,
        responsiveClass:true,
        navigation : false ,
        singleItem : true,
        smartSpeed: 600,
        navRewind: false,
        nav: true,
         navText: ['',''],
      });
      owl.on('changed.owl.carousel',function(event) {
        var item      = event.item.index;
        var totitems = event.item.count;
        if (item + qua === totitems) {
          $('.owl-next').css('opacity',0.3);
        } else {
          $('.owl-next').css('opacity',1);
        }
        if (item === 0) {
          $('.owl-prev').css('opacity',0.3);
        } else {
          $('.owl-prev').css('opacity',1);
        }
      });


$("form.jform.validate").validate();
$(".contact_form").validate();


});
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
/*s1.src='https://embed.tawk.to/58a32a6d55c2fd09f8550fbf/default';*/
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();


function setButtonURL() {
        Tawk_API.toggle(); return false;
}


    /*$('.chat').click( function(){
        Tawk_API.toggle(); return false;
    })*/
	
	new WOW().init();
	
	