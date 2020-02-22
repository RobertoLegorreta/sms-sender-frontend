function showMessages(number, message, data) {
  $('#emptyMessageRegistry').remove();
  let logsColumnName = ['fechaTD', 'destinatarioTD', 'mensajeTD', 'estadoTD'];
  let tdValues = [data, number, message, 'Enviado'];
  let record = document.createElement('tr');
  let column;
  let columnText;
  for (i = 0; i < 4; i++) {
    column = document.createElement('td');
    column.setAttribute('class', logsColumnName[i]);
    columnText = document.createTextNode(tdValues[i]);
    column.appendChild(columnText);
    record.appendChild(column);
  }
  $('.logs table').append(record);
}