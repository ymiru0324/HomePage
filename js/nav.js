// scroll시 nav바 fontSize 조정
$(window).on('scroll', function() {
  if (window.scrollY > 100) {
    $('.navbar-brand').css('fontSize', '20px')
  } else {
    $('.navbar-brand').css('fontSize', '30px')
  }
});