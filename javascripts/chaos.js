$(function() {
  $('.chaos').click(function() {
    $('div.rectangle').toggleClass('chaosON')
    $('div.chaos').toggleClass('chaosON')
    $('section.screen').toggleClass('chaosON')
    $('div.bg').toggleClass('chaosON')
    // var rectangle = (element) => {
    //   document.querySelector(element).style.backgroundColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    // }
  })
})
