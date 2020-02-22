function generateBasicView() {
  try {
    let savedMessages = JSON.parse(localStorage.getItem("messages"));
    for (let i = 0; i < savedMessages.length; i++) {
      showMessages(savedMessages[i].number, savedMessages[i].message, savedMessages[i].timestamp, 'Enviado');
    }
    $('#emptyMessageRegistry').remove();
  } catch (err) {
    console.log('No messages in the storage');
  }

  for (j = 0; j < 0; j++) {
    let groupsColumnName = ['nombreTD', 'grupoTD'];
    let tdValues = ['Nombre del grupo', '1356'];
    let record = document.createElement('tr');
    let column;
    let columnText;
    for (i = 0; i < 2; i++) {
      column = document.createElement('td');
      column.setAttribute('class', groupsColumnName[i]);
      columnText = document.createTextNode(tdValues[i]);
      column.appendChild(columnText);
      record.appendChild(column);
    }
    $('.groups table').append(record);
  }

  creatorPopup();
}