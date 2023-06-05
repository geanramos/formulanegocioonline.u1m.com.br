$(document).ready(function(){

	$('.faq ul li').click(function(){
		$(this).toggleClass('ativo');
	});

    $('.thumb').click(function(){
      var embed = $(this).attr('embed');
      
      $('.videoWrapper').removeClass('ativo').empty();
      $('.thumb').removeClass('ativo');
      
      $(this).addClass('ativo');
      
      $(this).parent().find('.videoWrapper').addClass('ativo').append('<iframe src="https://www.youtube.com/embed/'+embed+'?modestbranding=1&autohide=1&showinfo=0&controls=1&autoplay=1&enablejsapi=1" allow="autoplay" frameborder="0" allowfullscreen></iframe>');
    })
  
    //SLIDER DEPOIMENTOS	
		var splideDepoimentos = new Splide('.splideDepoimentos', {
			type: 'loop',
			perPage: 1,
			breakpoints: {
				1000: {
					destroy: 'completely',
				},
			  },
			}
		);

		splideDepoimentos.mount();

    //SLIDER DEPOIMENTOS	
		var splideCursos = new Splide('.splideCursos', {
			type   : 'loop',
      autoWidth: true,
      focus  : 'center',
      gap: '20px',
			breakpoints: {
				1000: {
					destroy: 'completely',
				},
			  },
			}
		);

		splideCursos.mount();

		$('.depoimentos .splideDepoimentos .splide__arrows').click(function(){
			$('.videoWrapper').removeClass('ativo').empty();
			$('.thumb').removeClass('ativo');
		  })
	  
})

$(window).scroll(function() {
    var elemento = $('.conhecaComunidade'); // Substitua 'seu-elemento' pelo seletor do elemento que você deseja monitorar

    if ($(window).scrollTop() > (elemento.offset().top - 400)) {
      $('section.topo, section.comunidadeSobre').addClass('ativo');
    } else {
      $('section.topo, section.comunidadeSobre').removeClass('ativo');
    }
  });

$(function(){	 
	$(window).scroll(function(){
		if ($(this).scrollTop() > 900 ) {$('body').addClass('_flutVideo');} else {$('body').removeClass('_flutVideo');}
		if($(this).scrollTop() + $(this).height() > $(document).height() - 185) {$('body').addClass('_finalPagina');}else{$('body').removeClass('_finalPagina');}
		});
});