 $(document).ready(function(){
    $("#header").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 800);
        
        
         $('.menu a').on('click', function () {
        $('.menu').removeClass('is-open');
      });
    });
     
});
