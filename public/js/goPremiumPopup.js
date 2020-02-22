function onlyPremiumPopup() {
  $('#goPremiumPopup').remove();
  let div = document.createElement('div');
  $('body').append(div);
  div.setAttribute('id', 'goPremiumPopup');

  let figure = document.createElement('figure');
  $(div).append(figure);

  let img = document.createElement('img');
  $(figure).append(img);
  img.setAttribute('src', 'objetos/medal.svg');

  let p = document.createElement('p');
  $(div).append(p);
  let pText = document.createTextNode('Solo disponible en ');
  $(p).append(pText);
  let pSpan = document.createElement('span')
  pSpan.innerHTML = 'Premium Plan';
  $(p).append(pSpan);

  setTimeout(function () {
    $(div).animate({
      opacity: 0.5,
      right: "-=450",
    }, 1000, () => { });
  }, 7500);
}


