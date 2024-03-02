function init(){
  $('.contentSect').fadeOut(100);
  $('#home').fadeIn(100);

  $('.menuItem').click(function(){
    let targetSect = $(this).attr('sref'); 

    $('.contentSect').fadeOut(100);
    $('.menuItem').css('background-color', 'blanchedalmond');

    $('.menuItem').filter(function(){
      return `${$(this).attr('sref')}` === targetSect;
    }).css('background-color', 'rgb(255, 248, 237)');    

    setTimeout(function(){
      $('.contentSect').filter(function(){
        return `${$(this).attr('id')}` === targetSect;
      }).fadeIn(100);
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0; 
    }, 200)

  });

  $('#titleLink').click(function(){

    $('.menuItem').css('background-color', 'blanchedalmond');
    $('.contentSect').fadeOut(100);

    setTimeout(function(){
      $('#home').fadeIn(100);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 200)

  });




}