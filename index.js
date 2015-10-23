//just waiting for clarification. :)

$(function(){
  console.log('ready');
  init();
});

function init(){
  $('.founder-title').on('click', function(){
    var $header = $(this);
    var detailDisplay = $(this).siblings().css('display');

    if(detailDisplay !== 'none'){
      $($header).siblings().css('display', 'none');
    } else {
      $($header).siblings().css('display', 'block');
    }
    
  });
}
