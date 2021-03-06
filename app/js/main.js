"use strict";



(function() {
	$(function() {



		/*AOS*/
		if( "AOS" in window ){
			AOS.init({
				offset: 100,
				once: true,
				duration: 1100,
				delay: 150
			});
			setTimeout(function() { AOS.refresh(); }, 1);
		}

		/* bootstrap tooltip*/		
		$('[data-toggle="tooltip"]').tooltip({
			html: true
		})

		/* SELECT2 */
		if ( $(".js-select").length )
			$(".js-select").select2({
				placeholder: "Выберите...",
				minimumResultsForSearch: Infinity,
				allowClear: false
			});
		
		if ( $(".js-select").length )
		$(".js-select.search-hide").select2({
			minimumResultsForSearch: Infinity
		});


		/*Owl carousel*/
		var owlBtn = [
			'<span class="owl-btn previous">'+
				'<i class="fa fa-angle-right"></i>'+
			'</span>', 
			'<span class="owl-btn next">'+
				'<i class="fa fa-angle-right"></i>'+
			'</span>'
		]



		$(".familycar-carousel.owl-carousel").owlCarousel({
			nav: true,
			//items: 3,
			dots: false,
			dotsEach: true,
			autoplay: false,
			touchDrag: checkSm(),
			responsive:{
				0:{items:1},
				991:{items:1}
			},
			navText : owlBtn,
			margin: 30
		});
		$(".news-article-items.owl-carousel").owlCarousel({
			nav: true,
			//items: 3,
			dots: false,
			dotsEach: true,
			autoplay: false,
			touchDrag: checkSm(),
			responsive:{
				0:{items:1},
				991:{items:1}
			},
			navText : owlBtn,
			margin: 30
		});
		$(".about-history-items.owl-carousel").owlCarousel({
			nav: true,
			//items: 3,
			dots: false,
			dotsEach: true,
			autoplay: false,
			touchDrag: checkSm(),
			responsive:{
				0:{items:1},
				991:{items:4}
			},
			navText : owlBtn,
			margin: 30
		});
		$(".about-best-items.owl-carousel").owlCarousel({
			nav: true,
			//items: 3,
			dots: false,
			dotsEach: true,
			autoplay: false,
			touchDrag: checkSm(),
			responsive:{
				0:{items:1},
				991:{items:4}
			},
			navText : owlBtn,
			margin: 30
		});
		

		var spoCarousel = $(".short-projects-items.owl-carousel").owlCarousel({
			nav: true,
			//items: 3,
			dots: false,
			dotsEach: true,
			autoplay: true,
			touchDrag: checkSm(),
			responsive:{
				0:{items:1},
				991:{items:4}
			},
			navText : owlBtn,
			margin: 30
		});



		$(".projects-items.owl-carousel").owlCarousel({
			nav: true,
			//items: 3,
			dots: false,
			dotsEach: true,
			autoplay: true,
			touchDrag: checkSm(),
			responsive:{
				0:{items:1},
				991:{items:2}
			},
			navText : owlBtn,
			margin: 30
		});

		$(".certifications-items.owl-carousel").owlCarousel({
			nav: true,
			//items: 3,
			dots: false,
			dotsEach: true,
			autoplay: true,
			touchDrag: checkSm(),
			responsive:{
				0:{items:1},
				991:{items:2}
			},
			navText : owlBtn,
			margin: 30
		});

		$(".owl-carousel.owl-meter .owl-prev").after('<div class="owl-counter"><span class="meter-current"></span>/<span class="meter-max"></span></div>');

		$(".owl-carousel.owl-meter").map(function(index, item){
			item = $(item);
			item.on("changed.owl.carousel", function(event){
				console.log(event);
				item.find(".meter-current").text(event.item.index+1);
				item.find(".meter-max").text(event.item.count);
			})
			item.trigger("next.owl.carousel");
			item.trigger("prev.owl.carousel");
		})



		/*FANCYBOX*/
		if ($("[data-fancybox]").length != 0)
			$("[data-fancybox]").fancybox({
				afterShow: function(instance, current) {},
				animationEffect : "zoom",
				animationDuration : 800,
				thumbs : {
					autoStart   : true
				},
				touch : false,
				transitionDuration : 366,
				transitionEffect: "zoom-in-out"
			});
		// SMOTHSCROLL-LINK
		if( "smoothScroll" in window )
			smoothScroll.init({
				easing: 'easeInOutCubic',
				offset: 85
			});
		/*ELEVATEZOOM*/
		if ( !checkSm() && $("[data-zoom-image]:not([group])").length )
			var x = $("[data-zoom-image]:not([group])").elevateZoom({
				scrollZoom: true,
				zoomWindowFadeIn: 500,
				zoomWindowFadeOut: 500,
				lensFadeIn: 300,
				lensFadeOut: 300,
				//cursor: 'pointer', 
				tint: true,
				tintColour: '#000',
				tintOpacity: 0.5,
				//zoomType        : "lens",
				//lensShape : "round",
				//lensSize    : 200,
				imageCrossfade: true,
				easing: true
			});



		//MIN-MENU
		$("#min-menu").mmenu({
			extensions: [
				"wrapper-bg", // wrapper-bg black
				"theme-dark",
				//"theme-white",
				//"fullscreen",
				"listview-50",
				"fx-panels-slide-up",
				"fx-listitems-drop",
				"border-offset",
				"position-front",
				"position-right"
			],
			navbar: {
				title: "Меню"
			},
			navbars: [{
					height: 0,
					content: [
						// '<div class="close-btn close-content bar">' +
						// '<a  href="#page" ><span class="icon-bar"></span><span class="icon-bar"></span></a>' +
						// '</div>'
					]
				},
				{
					content: ["prev", "title"]
				}
			]
		}, {});







		/*FLIKITY*/
		var arrowStyle = "M265.171,125.577l-80-80c-4.881-4.881-12.797-4.881-17.678,0c-4.882,4.882-4.882,12.796,0,17.678l58.661,58.661H12.5 c-6.903,0-12.5,5.597-12.5,12.5c0,6.902,5.597,12.5,12.5,12.5h213.654l-58.659,58.661c-4.882,4.882-4.882,12.796,0,17.678 c2.44,2.439,5.64,3.661,8.839,3.661s6.398-1.222,8.839-3.661l79.998-80C270.053,138.373,270.053,130.459,265.171,125.577z";

		/*bnr-carousel*/
		if( $(".bnr-carousel .carousel-items figure").length ){
			window.bnrCarousel = $(".bnr-carousel").children(".carousel-items").flickity({
				imagesLoaded: true,
				autoPlay: 6000,
				pauseAutoPlayOnHover: true,
				arrowShape: arrowStyle,
				initialIndex: 0,
				friction: 0.5,
				//selectedAttraction: 1,
				prevNextButtons: !checkSm(),
				draggable: false,
				wrapAround: true,
				pageDots: true,
				contain: false,
				percentPosition: true,
				cellSelector: 'figure',
				cellAlign: "center"
			});
			bnrCarousel.data("flickity");

			$(".bnr-carousel .carousel-items").append("<div class='container-arrows'></div>").find(".container-arrows").append($(".bnr-carousel .carousel-items .flickity-prev-next-button"))




		}

		if ($(".carousel-article").length >= 0) {
			window.carouselArticle = function() {
				var carouselMain = $(".carousel-article .carousel-main"),
					carouselNav = $(".carousel-article .carousel-nav");

				for (var i = 0; i < carouselMain.length; i++) {
					var crs = $(carouselMain)
						.eq(i)
						.flickity({
							imagesLoaded: true,
							prevNextButtons: false,
							cellAlign: "center",
							bgLazyLoad: 1,
							//friction: 1,
							//selectedAttraction: 1,
							initialIndex: 1,
							draggable: false,
							contain: true,
							pageDots: false
						});
					var flkty = crs.data("flickity");

					$(carouselNav).eq(i).flickity({
						imagesLoaded: true,
						initialIndex: 1,
						asNavFor: $(carouselMain)[i],
						prevNextButtons: false,
						draggable: true,
						percentPosition: true,
						//wrapAround: true,
						cellAlign: "center",
						adaptiveHeight: true,
						//contain: true,
						pageDots: false
					});
          $("[data-fancybox]").fancybox({
            afterShow: function(instance, current) {
              this.$content.find(".carousel-main").flickity("resize");
              this.$content.find(".carousel-nav").flickity("resize");
            }
          });
				}
			}
		};
		carouselArticle();
		
		window.albumMainCarousel = $(".album-main-items.owl-carousel").owlCarousel({
			nav: checkSm(),
			//items: 3,
			dots: false,
			dotsEach: true,
			autoplay: false,
			animateOut: 'fadeOut',
			smartSpeed:450,
			touchDrag: false,
			responsive:{
				0:{items:1},
				991:{items:1}
			},
			navText : owlBtn,
			margin: 30
		});

		$(".album-items figure").on("click", function(){
			var index = $(this).index();
			albumMainCarousel.trigger('to.owl.carousel', [index]);
		})



	//VERTICAL CAROUSEL
	var jcarouselWrapper = $('.jcarousel-wrapper') || null;
	if (jcarouselWrapper)
		for( var i =  0; i < jcarouselWrapper.length; i++ ){
			
			jcarouselWrapper.eq(i).find(".jcarousel")
				.jcarousel({
		      vertical: checkSm() ? true : true,
		      wrap: 'both',
		       animation: {
			        duration: 600,
			        easing:   'linear',
			        complete: function() {
			        }
			    },
		      center: false
		    })
				.on('jcarousel:targetin', 'figure', function( event, carousel ) {
				    $(this).addClass('active');
				    var index = $(this).index();
				})
				.on('jcarousel:targetout', 'figure', function( event, carousel ) {
						$(this).removeClass('active');
				})

				jcarouselWrapper.eq(i).find(".jcarousel").jcarousel('scroll', '0');
				jcarouselWrapper.eq(i).find(".jcarousel").jcarousel('fullyvisible');


			// CONTROLS
			var prevNext = jcarouselWrapper.eq(i).find(".jcarousel-prev-next");

			//prev
			prevNext.find(".jcarousel-control-prev")
			  .on('jcarouselcontrol:active', function() {
	          $(this).removeClass('inactive');
	      })
	      .on('jcarouselcontrol:inactive', function() {
	          $(this).addClass('inactive');
	      })
	      .jcarouselControl({
	          target: '-=1'
	      });

	     //next
	    prevNext.find(".jcarousel-control-next")
	      .on('jcarouselcontrol:active', function() {
	          $(this).removeClass('inactive');
	      })
	      .on('jcarouselcontrol:inactive', function() {
	          $(this).addClass('inactive');
	      })
	      .jcarouselControl({
	          target: '+=1'
	      });
		}//:end for;



    // Прибавление-убавление значении
    (function(){
      var form = $("[data-counter]") || null;;
      if( !form )
        return;
      var cntfactor = form.attr("data-counter")*1;

      $(document).on("click", "[data-counter-btn]", function(){
        var cntVal;
        var cntInput = $(this).closest( form ).find("[data-counter-input]");
        
        cntVal = (cntInput.val()*1);

        if( $(this).hasClass("plus") )
          cntVal = cntVal + cntfactor;
        if( $(this).hasClass("minus") & cntVal > 0 )
          cntVal = cntVal - cntfactor;
        if( isNaN( cntVal ) || cntVal < 0) cntVal = 0;
        cntInput.val( cntVal ).attr("value", cntVal)
      })
      $(".cnt-input").on( "keypress", function(e){
        //console.log(this, e);
      } )

    })();


    
		$("[data-toggle-menbar]").on("click", function(){
			$(".menbar").toggleClass("opened");
		});


		function onLoaded() {
			/*MASONRY*/
			if ($(".grid-img").length != 0) {
				var $grid = $(".grid-img").masonry({
					itemSelector: ".grid-img-item",
					columnWidth: ".grid-img-sizer",
					percentPosition: true
				});
			}
			$(window).trigger("resize");
		}

		//Лимит текста
		$("[data-text-limit]").map(function( i, el ){
			el = $(el);
			var text = el.text();
			var textLimit = el.attr("data-text-limit");

			if( text.length > textLimit*1 ){
				text = text.substring(0, textLimit )
				el.text( text+ " ..." );
			}
		})

		$(".parallax-scene").map(function(i, el){
			var parallaxInstance = new Parallax(el);
		})

		//SCROLL
		var minMenu = $(".header-scroll") || null;
		var headerRange = false;
		var staffProgressStatus = false;
		$(window).on("scroll", function(e) {

			//Адаптация хедера при скролинге
			if ($(window).scrollTop() > 180 && headerRange == false) {

				headerRange = true;
				if (minMenu) minMenu.addClass("scrolled");

			} else if ($(window).scrollTop() < 180 && headerRange == true) {
				headerRange = !true;
				if (minMenu) minMenu.removeClass("scrolled");
			} //.originalEvent.wheelDelta


		});
		$(window).trigger("scroll");

		$('[data-toggle="tab"]').on("click", function(){
			try{
				var input = $(this).find("input");
				input[0].checked = true;
				input.trigger("change");
			}catch(e){

			}
		})

		window.Summary = {

			car: {},
			prefix: "$",

			addTable: function(tablerow){
				var appendEl = 
												'<tr>'+
													'<td>'+tablerow.text+'</td>'+
													'<td>'+tablerow.value+'</td>'+
												'</tr>';
				$("[summary-table-append]").append(appendEl);
			},

			parsePriceText: function(price){
				return this.prefix+spaceBetweenNum(price);
			},
			calc: function(){

				Summary.car["addpack"] = [];
				$("[summary-field]:checked").map(function(i, el){

					el = $(el);
					var nameField = el.attr("summary-field");
					var text = el.attr("summary-text");
					var value = el.attr("value");
					var price = el.attr("price");
					var field = {};

					if( text ) field["text"] = text;
					if( value ) field["value"] = value;
					if( price ) field["price"] = price;

					if( nameField == "addpack" ){
						Summary.car["addpack"].push(field);
					}else{
						Summary.car[nameField] = field;
					}

					//console.log(nameField);
				});

				var color = Summary.car.color.value;
				var imgSrc = $("[car-color='"+color+"']").attr("src");
				var positionText = Summary.car.position.text;
				var positionPrice = Summary.parsePriceText(Summary.car.position.price);
				var carName = $("[name='carname']").attr("summary-text");

				$("[summary-img]").attr("src", imgSrc)
				$("[car-name-text]").text(carName);
				$("[car-position-text]").text(positionText);
				$("[car-price-text]").text(positionPrice);

				for( var field in Summary.car){
					var elField = Summary.car[field];
					//console.log(elField);
					var tableRow = {
						text: elField.text,
						value: elField.value || Summary.parsePriceText(elField.price),
					}
					if( field == "name" || field == "color")
						continue;
					if( field == "addpack" ){
						//console.log(elField[i]);
						for (var i = 0; i < elField.length; i++) {
							tableRow = {
								text: elField[i].text,
								value: elField[i].value || Summary.parsePriceText(elField[i].price),
							}
							Summary.addTable(tableRow);
						}
						continue;
					}
					Summary.addTable(tableRow);
				}
				var totalPrice = 0;
				for( field in Summary.car){
					var elField = Summary.car[field];
					if ( "price" in elField ){
						totalPrice += elField.price*1;
					}
					if( field == "addpack" ){
						//console.log(elField);
						for (var i = 0; i < elField.length; i++) {
							totalPrice += elField[i].price*1;
						}
					}
				}
				$('[summary-total-price]').text(Summary.parsePriceText(totalPrice));
			}
		}


		//car-color
		$(document).on("click", '[summary-btn]', function(){
			$("[summary-table-append] *").remove();
			Summary.calc();
			//$("[summary-car-color]:checked")
		});
		$(document).on("change", '[summary-field="position"]', function(){
			Summary.calc();
			$("[car-position-text]").text(Summary.car.position.text);
			$('[summary-field="addpack"]').map(function(i, el){
				el.checked = false;
			})

		})
		$(document).on("click", "[carbuild-mode-change]", function(){
			$("[carbuild-mode]").attr("carbuild-mode", $(this).attr("carbuild-mode-change"));
		})
		$(document).on("change", "[carbuild-color]", function(){
			$("[carbuild-color-text]").text($(this).attr("carbuild-color"));
		})
		$(document).on("click", "[addclass]", function(){
			var arrattr = $(this).attr("addclass").trim().split(":");
			$(arrattr[0]).addClass(arrattr[1]);
		})
		$(document).on("click", "[removeclass]", function(){
			var arrattr = $(this).attr("removeclass").trim().split(":");
			$(arrattr[0]).removeClass(arrattr[1]);
		})
		$(document).on("click", "[toggleclass]", function(){
			var arrattr = $(this).attr("toggleclass").trim().split(":");
			$(arrattr[0]).toggleClass(arrattr[1]);
		})

		$(document).on("click", ".print-summary", function(){
			print();
		})
		$(document).on("click", ".carbuild-summary", function(e){
			console.log(e, this);
		})

		if($(".carbuild-summary").length)
			Summary.calc();



	});
})(jQuery);

var isWebkit = /Webkit/i.test(navigator.userAgent),
		isChrome = /Chrome/i.test(navigator.userAgent),
		isMac = /Mac/i.test(navigator.userAgent),
		isMobile = !!("ontouchstart" in window),
		isAndroid = /Android/i.test(navigator.userAgent),
		isEdge = /Edge/i.test(navigator.userAgent);


// COMMON FUNCTION




function checkSm() {
	return $(document).width() <= 991;
}

function checkMd() {
	return $(document).width() < 1199 && !checkSm();
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntFloat(min, max) {
	return Math.random() * (max - min) + min;
}

function onResized(f) {
	if (typeof f === "function") f();
	$(window).on("resize", function(e) {
		if (typeof f === "function") f();
	});
	return this;
}

function scrolledDiv(el) {
	try {
		var docViewTop = $(window).scrollTop(),
			docViewBottom = docViewTop + $(window).height(),
			elTop = $(el).offset().top,
			elBottom = elTop + $(el).height() / 1.8;
	} catch (err) {
		console.error();
	}

	return elBottom <= docViewBottom && elTop >= docViewTop;
}

function roundFix( num, cnt ){
	num = num+""
	cnt = cnt + (/./.test(num) || null ? 1 : 0);
	return num.substring( 0,  cnt)*1
}


function spaceBetweenNum(str, char) {
	str = str+"";
	char = char || ","
	var pattern = /(-?\d+)(\d{3})/;
	while (pattern.test(str))
		str = str.replace(pattern, "$1"+char+"$2");
	return str;
}