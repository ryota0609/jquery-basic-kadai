$(function() {
  $('#change-color').click(function() {
    $('#target').css('color','#ff0000');
  });
  $('#change-text').click(function() {
    $('#target').text('Hello!');
  });
  $('#fade-out').click(function() {
    $('#target').fadeOut();
  });
  $('#fade-in').click(function(){
    $('#target').fadeIn();
  });
});