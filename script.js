//opening the menu
$('.burger, .overlay').click(function(){
    $('.burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('nav').toggleClass('show');
    $('.body').toggleClass('overflow')
  });

  //closing the menu
  $('.navitem').click(function(){
    $('.burger').removeClass('clicked');
    $('.overlay').removeClass('show');
    $('nav').removeClass('show');
    $('.body').removeClass('overflow')
  });

