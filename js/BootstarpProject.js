$(document).ready(function(){
    $('.list').click(function(){
      const value = $(this).attr('data-filter');
      if (value == 'all'){
        $('.itemBox').show('1000')
      } else {
        $('.itemBox').not('.' + value).hide('1000');
        $('.itemBox').filter('.' + value).show('1000');
    }
    })
})

$('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
})

$(document).ready(function(){
  $(".active").click(function(){
    $(".color").css("height", "2200px");
  });
});

$(document).ready(function(){
  $(".ht").click(function(){
    $(".color").css("height", "1000px");
  });
});