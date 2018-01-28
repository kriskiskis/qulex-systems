jQuery(document).ready(function(){

$(function() {
  $(".main-navigation__button").click(function() {
    $(".main-navigation").toggleClass("main-navigation--opened");
    })
  });

$(function() {
  $(".site-list__info").click(function(e) {
    e.preventDefault();
    $(".site-list__info").removeClass('site-list__info--active');
    $(this).addClass('site-list__info--active');
    })
  });

$(function() {
  $(".content-extra__link").click(function(e) {
    e.preventDefault();
    $(".content-extra__link").removeClass('content-extra__link--active');
    $(this).addClass('content-extra__link--active');
    })
  });
});
