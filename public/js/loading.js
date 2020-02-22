function cargando() {
  let screen = document.createElement('div');
  $('body').append(screen);
  screen.setAttribute('id', 'backgroundWindow');

  let imageMark = document.createElement('figure');
  imageMark.setAttribute('id', 'loading');
  $(screen).append(imageMark);
  let image = document.createElement('img');
  $(imageMark).append(image);
  image.setAttribute('src', 'objetos/loading.gif');
}
