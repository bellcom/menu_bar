(function ($) {
  Drupal.behaviors.menu_bar = {
    attach: function (context, settings) {

      $('body').css('padding-left', 55);
      $('.js-menu-bar-toggle').click(function(){
        var $menu_bar = $(this).parent();
        var time = 200;
        var narrow_width = Drupal.settings.menu_bar.narrow_width;
        var wide_width = Drupal.settings.menu_bar.wide_width;

        if($menu_bar.hasClass('narrow')){
          $menu_bar.animate({width: wide_width}, time, function(){
          $menu_bar.toggleClass('narrow');
          });
          $('.js-menu-bar-toggle').animate({left: wide_width}, time);
          $('body').animate({'padding-left': wide_width}, time);
        }
        else {
          $menu_bar.animate({width: narrow_width}, time);
          $menu_bar.toggleClass('narrow');
          $('.js-menu-bar-toggle').animate({left: narrow_width}, time);
          $('body').animate({'padding-left': narrow_width}, time);
        }
      });
    }
  };
}(jQuery));
