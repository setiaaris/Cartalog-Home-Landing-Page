//LANDING PAGE

// nav active
$('#NavActive').onePageNav({
	currentClass: 'current',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});

$(document).on('scroll',function() {
    
    if($(this).scrollTop() > 4750) {

        $('.nav-active').addClass('active');
    } else{

        $('.nav-active').removeClass('active');
    }
})

//// smooth scrolling
//            
//        $(function() {
//          $('a[href*="#"]:not([href="#"])').click(function() {
//            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//              var target = $(this.hash);
//              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//              if (target.length) {
//                $('html, body').animate({
//                  scrollTop: target.offset().top
//                }, 1000);
//                return false;
//              }
//            }
//          });
//        });
            
//mobil impian
var swiper = new Swiper('.dream-car .swiper-container', {
  pagination: {
    el: '.dream-car .swiper-pagination',
  },
});

//berita
var swiper = new Swiper('.news .swiper-container', {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: '.news .swiper-pagination',
    clickable: true,
  },
});

//mobil impian
var swiper = new Swiper('.car-inspect .swiper-container', {
  pagination: {
    el: '.car-inspect .swiper-pagination',
  },
});

//kendaraan inspeksi
var swiper = new Swiper('.popular-car .swiper-container', {
  pagination: {
    el: '.popular-car .swiper-pagination',
  },
});

//chat active
$(document).ready(function() {          
    $('.chat .intro').click(function() {
        $('.chat .intro').toggleClass('active');
        $('.chat .sld').toggleClass('active');
        $('.chat .sld .wa').toggleClass('active');
        $('.chat .sld .cht').toggleClass('active');
    })
    
    $('.chat .sld .cls').click(function() {
        $('.chat .intro').removeClass('active');
        $('.chat .sld').removeClass('active');
        $('.chat .sld .wa').removeClass('active');
        $('.chat .sld .cht').removeClass('active');
    })
})

//nav sidebar
$(document).ready(function() {             
    $('.navbar .wrapper-nav .hamburger').click(function() {
        $('.navbar .sidebar').toggleClass('active');
    })
})

//cartalog garage responsive chevron
$(document).ready(function() {             
    $('.cartgarage .infos .cllps .first').click(function() {
        $('.cartgarage .infos .cllps .first .cvrn').toggleClass('active');
    })
    $('.cartgarage .infos .cllps .second').click(function() {
        $('.cartgarage .infos .cllps .second .cvrn').toggleClass('active');
    })
    $('.cartgarage .infos .cllps .third').click(function() {
        $('.cartgarage .infos .cllps .third .cvrn').toggleClass('active');
    })
})

//riset dan testi responsive chevron
$(document).ready(function() {             
    $('.riset-testi .infos .cllps .first').click(function() {
        $('.riset-testi .infos .cllps .first .cvrn').toggleClass('active');
    })
    $('.riset-testi .infos .cllps .second').click(function() {
        $('.riset-testi .infos .cllps .second .cvrn').toggleClass('active');
    })
    $('.riset-testi .infos .cllps .third').click(function() {
        $('.riset-testi .infos .cllps .third .cvrn').toggleClass('active');
    })
})

//footer responsive chevron
$(document).ready(function() {             
    $('footer .infos .cllps .first').click(function() {
        $('footer .infos .cllps .first .cvrn').toggleClass('active');
    })
    $('footer .infos .cllps .second').click(function() {
        $('footer .infos .cllps .second .cvrn').toggleClass('active');
    })
    $('footer .infos .cllps .third').click(function() {
        $('footer .infos .cllps .third .cvrn').toggleClass('active');
    })
    $('footer .infos .cllps .fourth').click(function() {
        $('footer .infos .cllps .fourth .cvrn').toggleClass('active');
    })
})

//search bar on navbar responsive chevron
$(document).ready(function() {             
    $('.navbar .wrapper-nav .search-rspv .icos').click(function() {
        $('.navbar .wrapper-nav .search-rspv input').toggleClass('active');
        $('.navbar .wrapper-nav .logo').toggleClass('active');
        $('.navbar .wrapper-nav .notif').toggleClass('active');
        $('.navbar .wrapper-nav .hamburger').toggleClass('active');
        $('.navbar .wrapper-nav .search-rspv .icos .ico-srch').toggleClass('active');
        $('.navbar .wrapper-nav .search-rspv .bfr ').toggleClass('active');
        $('.navbar .sidebar').removeClass('active');
    })
})

















