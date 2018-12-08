window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
$.src="https://v2.zopim.com/?5KCwQwYmTYFWP2rM3UpDhM6x6UMnjyVi";z.t=+new Date;$.
type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");



window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-112172756-1');


  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-110958003-1');



  'undefined'=== typeof _trfq || (window._trfq = []);'undefined'=== typeof _trfd && (window._trfd=[]),_trfd.push({'tccl.baseHost':'secureserver.net'}),_trfd.push({'ap':'cpsh'},{'server':'a2plcpnl0731'}) 



  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

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



