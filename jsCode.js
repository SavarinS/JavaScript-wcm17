//contain JavaScript

$(document).ready(function() {
  //after the page is load
  $('.wrapper').hide().fadeIn(3000); //header and wrapper appear

  //to scroll to content and animation to image
  $('.navigation').click(function(e) {
    e.preventDefault();
    var link = $(this).attr('href'); //variable to target the link
    //console.log(link);
    //console.log($(link).offset().top);
    $('html, body').animate({
      scrollTop: $(link).offset().top
    }, 2000);

    $('.image').hide().show(3000);
  });
  //end of scroll to content


  //to change button color when hover
  $('li').on('mouseover', function(event) {
    event.preventDefault();
    $('li').removeClass('active');
    $(this).addClass('active');
  });
  //end of button hover


  //scroll to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('#toTop').fadeIn(300);
      console.log('Fade In');
    } else {
      $('#toTop').fadeOut(300);
      console.log('Fade Out');
    }
  });

  $('#toTop').click(function(e) { //animation to to top button
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 2000);
  });

  //top button hover
  $('#toTop a').on('mouseenter ', function(e) {
    e.preventDefault();
    $('#toTop').css("background-color", "rgba(191, 191, 191, 0.5)",);
  });
  $('#toTop a').on('mouseout', function() {
    $('#toTop').css("background-color", "rgba(129, 207, 224, 0.5)")
  });
  //end of top button
});
