$(function(){
  console.log('ready');
  init();
});

function init(){
  function closeBio() {
    $('.details .founder-title').removeClass('active');
    $('.details .founder-name').removeClass('active');
    $('.details .unique-bio').slideUp(300);
  }

  $('.founder-title').on('click', function(e){
    var $currentAttrValue = $(this).parent('a').attr('href');
    var $el = $(this);
    if($($el).children('.founder-name').hasClass('active')) {
      closeBio();
    }else {
      closeBio();
      if($($el).hasClass('founder-name')){
        $($el).addClass('active');
        $('.details ' + $currentAttrValue).slideDown(300).addClass('open');
      }
      else if($($el).hasClass('founder-title')){
        $($el).children('.founder-name').addClass('active');
        $('.details ' + $currentAttrValue).slideDown(300).addClass('open');
      }
    }
    e.preventDefault();
  });
}
