function success() {
  $('#loading').remove();

  let messagePopup = document.createElement('div');
  $('#backgroundWindow').append(messagePopup);
  messagePopup.setAttribute('id', 'messagePopup');

  let message = document.createElement('p');
  $(messagePopup).append(message);
  let messageText = document.createTextNode('Envío exitoso');
  $(message).append(messageText);

  let imageMark = document.createElement('figure');
  $(messagePopup).append(imageMark);
  let image = document.createElement('img');
  $(imageMark).append(image);
  image.setAttribute('src', 'objetos/success.svg');

  let figureClose = document.createElement('figure');
  $('#backgroundWindow').append(figureClose);
  figureClose.setAttribute('id', 'closePopup');
  let imageClose = document.createElement('img');
  $(figureClose).append(imageClose);
  imageClose.setAttribute('src', 'objetos/close.svg');

  //Clean inputs
  $('#destinatario').val('');
  $('#mensaje').val('');
}