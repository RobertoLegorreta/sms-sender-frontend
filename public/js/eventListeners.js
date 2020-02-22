function listeners() {
  // Change menu colors
  $('.menu').on('click', function () {
    //Simulando el no estar logeado
    if (false) {
      $('.menu').removeClass('selected');
      $(this).addClass('selected');
    } else {
      onlyPremiumPopup();
    }
  });

  $('#options').on('click', function () {
    if (false) {
      $('.menu').removeClass('selected');
      $(this).addClass('selected');
    } else {
      onlyPremiumPopup();
    }
  });

  // Send message
  $('#enviarMensaje').on('click', function () {
    // Show loading
    cargando();

    let number = $('#destinatario').val();
    let message = $('#mensaje').val();
    $.post("https://43n92zca1e.execute-api.us-east-1.amazonaws.com/prod", JSON.stringify(
      {
        'phone': number,
        'message': message
      })).done(function (data) {
        try {
          data = JSON.parse(data.body);
          success();
          saveMessages(number, message, data.datetime);
          showMessages(number, message, data.datetime, 'Enviado');
        } catch (error) {
          failure();
        }
      });

    // number = '3112595467'
    // message = 'esto es bbva'
    // data = {
    //   datetime: '12/02/29'
    // }
    // success();
    // saveMessages(number, message, data.datetime);
    // showMessages(number, message, data.datetime, 'Enviado');
  });

  $('#destinatario').keypress(function (event) {
    var char = String.fromCharCode(event.which);
    if (!(/[0-9]/.test(char))) {
      event.preventDefault();
    }
  });

  // Close Pop ups
  $(document).on('click', '#closePopup', function (event) {
    $('#backgroundWindow').remove();
  });
}