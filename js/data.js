'use strict';

$(window).on('load', function () {
  $('.preloader').find('.prePreloader').fadeOut();
  $('.preloader').delay(350).fadeOut('slow');
});


$('div.sidenav-content-item').delegate('input:checkbox', 'change', function() {
  $('.product-grid > div').hide();
  
  var selector = $('input:checked').map(function() {
      return $(this).attr('data-category');
  }).get();

  function filterCategories(elem) {
      var elemCats = elem.attr('data-category');
      
      if (elemCats) {
          elemCats = elemCats.split(' ');
      } else {
          elemCats = Array();
      }
      for (var i = 0; i < selector.length; i++) {
          if (jQuery.inArray(selector[i], elemCats) != -1) {
              return false;
          }
      }
      return true;
  }


  $('.product-grid > div').each(function(i, elem) {
      if (filterCategories(jQuery(elem))) {
          $(elem).show(); 
      }
  });

}).find('input:checkbox').change();



function burgerMenu(selector) {
	let menu = $(selector),
		button = $('.burger-menu__button'),
		links = $('.burger-menu__link'),
		overlay = $('.burger-menu__overlay');

	button.click((e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.click(() => {
		toggleMenu();
	});

	overlay.click(() => {
		toggleMenu();
	});

	function toggleMenu() {
		menu.toggleClass('burger-menu_active');		
	}
};

burgerMenu('.burger-menu');

function headerMenu(selector) {
	let menu = $(selector),
		button = $('.header-menu__button'),
		links = $('.header-menu__link'),
		overlay = $('.header-menu__overlay');

	button.click((e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.click(() => {
		toggleMenu();
	});

	overlay.click(() => {
		toggleMenu();
	});

	function toggleMenu() {
		menu.toggleClass('header-menu_active');		
	}
};

headerMenu('.header-menu');

function burgerCatalog(selector) {
	let menu = $(selector),
		button = $('.burger-catalog__button'),
		links = $('.burger-catalog__item'),
		overlay = $('.burger-catalog__overlay');

	button.click((e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.click(() => {
		toggleMenu();
	});

	overlay.click(() => {
		toggleMenu();
	});

	function toggleMenu() {
		menu.toggleClass('burger-catalog_active');		
	}
};

burgerCatalog('.burger-catalog');



$(document).on("scroll", window, function () {
  if ($(window).scrollTop()>200) 
  {
      $(".float-block").fadeIn(500);
      $('.header-grid').hide();
  }
  else
  {
      $('.header-grid').show();
      $(".float-block").fadeOut(500);
  }
});


(function($) {
  $(".prev-grid-grid2__items").click(function() {
    var targetId = $(this).attr("lock-id");
    $("#" + targetId)
      .addClass("active").removeAttr('style').siblings().removeClass("active").hide();
      event.stopPropagation();
      $("#" + targetId).parents('.product-block-item').addClass('active').siblings().removeClass("active");
      $("#" + targetId).children('.product-title').addClass('active');   
  });

  $(".product-list__buttons-button").click(function() {
    var targetId = $(this).attr("button-id");
    $(this).addClass('active').siblings().removeClass('active');
    $("#" + targetId)
      .addClass("active").removeAttr('style').siblings().removeClass("active").hide();
      event.stopPropagation();
      $("#" + targetId).parents('.product-block-item').addClass('active').siblings().removeClass("active");
      $("#" + targetId).children('.product-title').addClass('active');   
  });


(function($) {

$(".ui-slider").slider({
	min: 50,
  max: 10000,
  range: true,
  step:10,
	values: [50,7000],
	range: true,
	stop: function(event, ui) {
		$("input#minCost").val(  ui.values[ 0 ] );
    $("input#maxCost").val(  ui.values[ 1 ] );
  },
  slide: function(event, ui){
    $("input#minCost").val(  ui.values[ 0 ] );
    $("input#maxCost").val(  ui.values[ 1 ] ); 
    
    showProducts(ui.values[ 0 ] , ui.values[ 1 ]);
  }

  });

$("input#minCost").change(function(){
	var value1=$("input#minCost").val();
	var value2=$("input#maxCost").val();

  if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		$("input#minCost").val(value1);
	}
	$(".ui-slider").slider("values",0,value1);	
});

  
$("input#maxCost").change(function(){
	var value1=$("input#minCost").val();
	var value2=$("input#maxCost").val();
	
	if (value2 > 10000) { value2 = 10000; $("input#maxCost").val(10000)}

	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		$("input#maxCost").val(value2);
	}
	$(".ui-slider").slider("values",1,value2);
});

$("input#maxCost, input#minCost").keyup(function(){
  var value1=$("input#minCost").val();
  var value2=$("input#maxCost").val();
  
  showProducts(value1,value2);
});

function showProducts(minPrice, maxPrice) {
  $('.product-grid__col').hide().filter(function() {
      var price = parseInt($(this).data("price"), 10);
      return price >= minPrice && price <= maxPrice;
  }).show();
}

})(jQuery);

$('.slider__content').slick({
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000
});

function mediaQuerie(direction, n) {
  return window.matchMedia(`(${direction}-width: ${n}px)`).matches
  
}

$('ul.prev-catalog').closest('div.prev-grid').find('div.prev-grid-grid2').removeClass('active').css('display', 'none');

    $(function() {
      $('ul.prev-catalog').on('mousemove', 'li:not(.active)', function() {
        
        $('div.slider__content').css('display', 'none');
        $('img.prev-grid__col__img').css('display', 'none');
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.prev-grid').find('div.prev-grid-grid2')
          .removeClass('active').css('display', 'none')
          .eq($(this).index()).show({ direction: "left" }, 500).addClass('active');
      });
    });

    $('.prev-grid').mouseleave(function(){
      $('div.slider__content').removeAttr('style');
      $('ul.prev-catalog').closest('div.prev-grid').find('div.prev-grid-grid2').removeClass('active').css('display', 'none');

      var mql = window.matchMedia('all and (max-width: 480px)');
      if (mql.matches) {
        $('img.prev-grid__col__img').removeAttr('style');
        $('ul.prev-catalog').closest('div.prev-grid').find('div.prev-grid-grid2').removeClass('active').css('display', 'none');
      };
    });

  $(".burger-catalog__item, .prev-catalog__item").click(function () {
    var targetId = $(this).attr('c-id');
    $('.product-block').removeClass('disable');
    $('.prev-block').removeClass('disable');
    $('.question-block').removeClass('active');
    $('.delivery-block').removeClass('active');
    $(".product-list__buttons-button").removeClass('active');
    $('.stock-block').removeClass('active').addClass('disable');
    $("#" + targetId).addClass('active').siblings().removeClass('active');
    $('.product-grid ').removeAttr('style').addClass('active');
    $('.product-title').removeClass('active');
  });

  
  
  $(".footer-grid__col-product").click(function () {
    var targetId = $(this).attr('fc-id');
    $('.product-block').removeClass('disable');
    $('.prev-block').removeClass('disable');
    $('.question-block').removeClass('active');
    $('.delivery-block').removeClass('active');
    $(".product-list__buttons-button").removeClass('active');
    $('.stock-block').removeClass('active').addClass('disable');
    $("#" + targetId).addClass('active').siblings().removeClass('active'); 
    $('.product-grid ').removeAttr('style').addClass('active');
    $('.product-title').removeClass('active');
  });
  
  $(".footer-grid__col-product").click(function () {
    var targetId = $(this).attr('foot-id');
    $("#" + targetId).removeClass('disable').addClass('active').siblings().removeClass('active').addClass('disable');
  });

  $(".nav-list__link").click(function () {
    var targetId = $(this).attr('nav-id');
    $("#" + targetId).removeClass('disable').addClass('active').siblings().removeClass('active').addClass('disable');
  });

  $(".burger-menu__link").click(function () {
    var targetId = $(this).attr('burger-id');
    $("#" + targetId).removeClass('disable').addClass('active').siblings().removeClass('active').addClass('disable');
  });

  $(".header-menu__link").click(function () {
    var targetId = $(this).attr('header-id');
    $("#" + targetId).removeClass('disable').addClass('active').siblings().removeClass('active').addClass('disable');
  });

  $(".question-grid-list__items").click(function () {
    if(!$(this).hasClass('active') ) {
      $(this).addClass('active').fadeIn(500);
   } else {
      $(this).removeClass('active');
   };
  });

  $(".form-item__input").click(function () {
    
    $(this).addClass('active')
      .next('.form-item__line').addClass('active')
      .next('.form-item__text').addClass('active');

    $(this).blur(function() {
         if(!$(this).val()) {
            $(this).removeClass('active')
              .next('.form-item__line').removeClass('active')
              .next('.form-item__text').removeClass('active');
        }   
    });
  });
})(jQuery);

$('.question-grid__col').each((i, el) => {
  var wrap = $(el),
      toggler = false,
      showElem = +wrap.attr('data-show');

  wrap.find(`.question-grid-list__items:nth-child(n + ${showElem + 1})`).hide();

  wrap.find('.show-more').click( () => {
      if (toggler) {
          wrap.find(`.question-grid-list__items:nth-child(n + ${showElem + 1})`).slideUp(300);
      } else {
          wrap.find(`.question-grid-list__items:nth-child(n + ${showElem + 1})`).slideDown(300);
      }

      toggler = !toggler
  });
});


  $(".stock-block-grid").each((i, el) => {
    var wrap = $(el),
        toggler = false,
        showElem = +wrap.attr('data-show'),
        TSelem = `.stock-grid__col:nth-child(n + ${showElem + 1})`;
  
    wrap.find(TSelem).hide();
  
    wrap.find('.show-more').click( () => {
        if (toggler) {
            wrap.find(TSelem).slideUp(300);
        } else {
            wrap.find(TSelem).slideDown(300);
        }
  
        toggler = !toggler
    });
});
