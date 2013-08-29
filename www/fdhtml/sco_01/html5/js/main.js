var anchopantalla;
var playVideo=false
$(document).ready(function(){
	$('#simple-menu').sidr();
	$(window).bind('orientationchange',function(){
                $.sidr('close');
            });
	//$('#responsive-menu').sidr();
	$('.dialogo').popover(
                {
                    trigger: "click",
                    placement: "top"
                });
	$('.dialogo').click(function() {
		$('.dialogo').not($(this)).popover('hide');
		return false;
	});

	$('a,select').not('.dialogo').bind('click focus',function(){
		$('.dialogo').popover('hide');
		
	});

    anchopantalla=$(window).width();
    $('#menu_mini').hide();
    $('#btn-menu').click(function(){
        $('#menu_mini').slideToggle('slow');
    });

	$('#botContenidos').toggle(
	    function(){
	        $('#cajaContenidos').css("display","");
	        $('#cajaContenidos').animate(
	            {'max-height':'1000px'}, 
	            {queue: false, duration: 0},
	            "swing",
	            function(){
	                //$('#cajaContenidos').css("overflow","visible");
	            }
	        );
	        //$('body').removeClass('quita-scroll-horizontal');
	    },
	    function(){
	        //$('body').addClass('quita-scroll-horizontal');
	        $('#cajaContenidos').animate(
	            {'max-height':'0px'}, 
	            {queue: false, duration: 0}, 
	            "swing", 
	            function(){
	                //$('#cajaContenidos').css("overflow","hidden");
	                $('#cajaContenidos').css("display","none");
	            }
	        );
	    }
	);

	$(window).resize(function(){
	    var nuevoancho=$(window).width();
	    if(nuevoancho!=anchopantalla){
	        $('#menu_mini').slideUp('fast');
	        $('#cajaContenidos').css("display","none");
	    	//$('#cajaContenidos').css("right","10px");
	    }
	    anchopantalla=nuevoancho;
	});


	//Tablas dinámicas
	$('.tabla-dinamica th').click(function(){
		var tablaDinamica = $(this).parent().parent().parent();

		$(tablaDinamica).find('th.active').each(function(){
			$(this).removeClass('active');
		});

		$(this).addClass('active');

		var opcion = $(this).attr('data-id');

		$(tablaDinamica).find('td div.active').each(function(){
			$(this).removeClass('active');
		});

		$(tablaDinamica).find('td div[data-id='+opcion+']').addClass('active');
	});

	//Imágenes tabs
	$('.tabs-imagenes').each(function(){
		var tabsImagenesMobile = $(this).find('div.tabs-imagenes-mobile');
		var that = this;
		$(that).find('ul.nav-pills li a').each(function(){
			var ruta = $(this).find('img').attr('src');
			var texto = $(that).find($(this).attr('href'));
			$(tabsImagenesMobile)
				.append($('<div>').addClass('contenedor-pill-mobile').addClass('clearfix')
					.append($('<div>').addClass('imagen').append($('<img>').attr('src', ruta)))
					.append($('<div>').addClass('texto').html(texto.html()))
					);

		});
	});

	//Obtengo los html de todos los elementos y los guardo en un array
	var contenidosImagenesRoll = [];
	var lo = 0;
	$('.cajaImagenRoll').each(function(){
		var date = new Date();
		var id = 'i_'+lo;
		$(this).attr('id', id);

		contenidosImagenesRoll[id] = $(this).html();
		lo++;
	});

	function redimensionar() {
		$('.cajaImagenRoll').each(function(){
			var id = $(this).attr('id');
			$(this).html(contenidosImagenesRoll[id]);
			$('.flippyOff').click(function(){
				aplicarFlippy(this);
			});
			var ancho = Math.max($(this).find('.flippyContent').innerWidth(), $(this).find('.flippyOff').innerWidth());
			var alto = Math.max($(this).find('.flippyContent').height(), $(this).find('.flippyOff').height());
			//alert(Math.min($(this).find('.flippyContent').height(), $(this).find('.flippyOff').height()));
			$(this).find('.flippyContent').innerWidth(ancho);
			$(this).find('.flippyOff').innerWidth(ancho);
			$(this).find('.flippyContent').height(alto);
			$(this).find('.flippyOff').height(alto);
		});
	}
	redimensionar();
	$(window).resize(function(){
		redimensionar();
	});

	$('.flippyOff').click(function(){
		aplicarFlippy(this);
	});

	function aplicarFlippy(flippyOff){
		$(flippyOff).flippy({
			content: $(flippyOff).parent().find('.flippyContent').html(),
			duration: 750,
			direction: 'LEFT',
			depth: 1.5,
			light: 0,
			//color_target: 'rgba(33,133,197,1)',
			onFinish: function(){
				$(flippyOff).unbind('click');
				$(flippyOff).click(function(){
					$(flippyOff).flippyReverse();
				});
			}
		});
	}


	//Mapas sensibles
	$('.mapa-sensible area').click(function(){

        var destino = $(this).attr('href');
        var cajaSensible = $(this).parent().parent().find('.cajaSensible');
        var that=this;
        $(cajaSensible).find('.elementoSensible').each(function(){
        	$(this).addClass('ocultar');
        });
        $(cajaSensible).find(destino).removeClass('ocultar');
        $(cajaSensible).removeClass('ocultar');
        //return false;
    });
    function redimensionarMapa()
    {
        $('.mapa-sensible img[usemap]').each(function(){
            that = this;
            var ancho = $(this).width();
            var alto = $(this).height();
            $('map[name='+$(this).attr('usemap').substring(1)+'] area').each(function(){
                var porcentajes = $(this).attr('data-coords').replace('%','').replace('%','').replace('%','').replace('%','').split(',');
                var enteros = "";
                for (var i = 0; i < porcentajes.length; i++) {
                    if(enteros!='')
                    {
                        enteros+=',';
                    }
                    var valor = alto;
                    if(i==0 || i==2)
                    {
                        var valor = ancho;
                    }
                    enteros+=(porcentajes[i]*valor)/100;
                };
                $(this).attr('coords', enteros);
            });
        });
    }
    redimensionarMapa();

	

    $(window).resize(function(){
        redimensionarMapa();
        //PARAMOS EL VIDEO
        $('.modelo_video video').each(function(){
			$(this).attr('poster', 'img/poster.png');
			$(this).attr('class', 'borderVideo');
			$(this).get(0).pause();
			playVideo=false;
		});
    });

    //Ventanas modales
    $('span.enlacemodal').each(function(){
    	var a = $(this).find('a');

    	$(this).append(
    		$('<a>')
    			.attr('href', $(a).attr('href').replace('#', '')+'.html')
    			.attr('class', $(a).attr('class'))
    			.html($(a).html())
    			.addClass('visible-phone')
    			.removeClass('hidden-phone')
    		);
    });
    
    
    //BOTON CERRAR
	$('.bot_cerrar').click (function() {
		top.close();
	});

	
	function updateScore()
	{
		var scoreRaw = window.parent.SCOGetValue("cmi.score.raw");
		if(scoreRaw==''){
			scoreRaw = "100"
		}
		$('#score_progress').text(scoreRaw +"%")
	}
	updateScore();
    
});
