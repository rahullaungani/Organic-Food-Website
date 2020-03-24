$(document).ready(function() {
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky');
        }
        
        else{
            $('nav').removeClass('sticky');
        }
        
    }, {
        offset: '60px;'
    });
    
    
    /* Scrolling effect for Im hungry */
    
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},2000 )
        
    });
    
    
    /* Scrolling effect for show me more */
    
     $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000 )
        
    });
    
    
    /* Animation on scroll */
    
    /* waypoint-1 */
    
    $('.js--wp-1').waypoint(function(direction){
        
        $('.js--wp-1').addClass('animated fadeIn');
        
    }, {
        offset: '50%'
    });
    
    
     /* waypoint-2 */
    
    $('.js--wp-2').waypoint(function(direction){
        
        $('.js--wp-2').addClass('animated fadeInUp');
        
    }, {
        offset: '50%'
    });
    
    
     /* waypoint-3 */
    
    $('.js--wp-3').waypoint(function(direction){
        
        $('.js--wp-3').addClass('animated fadeIn');
        
    }, {
        offset: '50%'
    });
    
    
     /* waypoint-4 */
    
    $('.js--wp-4').waypoint(function(direction){
        
        $('.js--wp-4').addClass('animated pulse');
        
    }, {
        offset: '50%'
    });
    
    /* mobile navigation */
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        nav.slideToggle(200);
        
        var icon = $('.js--nav-icon i');
        
        if(icon.hasClass('ion-navicon-round'))
            {
                icon.addClass('ion-close-round');
                icon.removeClass('ion-navicon-round');
            }
        else{
            
                icon.addClass('ion-navicon-round');
                icon.removeClass('ion-close-round');
        }
    });
    
});

   var map = new GMaps({
      div: '.map',
      lat: 19.0644698,
      lng: 72.8336715
});

map.addMarker({
  lat: 19.0644698,
  lng: 72.8336715,
  title: 'Thadomal Engineering College',
  infoWindow: {
  content: '<p>Our College</p>'
}
});

    /* PRACTICE
    $('h1').click(function(){
        $(this).css('background-color','#ff0000');
    })
    
    */
    
    /*
        var waypoints = $('#handler-first').waypoint(function(direction) {
          notify(this.element.id + ' hit 25% from top of window') 
        }, {
          offset: '25%'
        })

    */