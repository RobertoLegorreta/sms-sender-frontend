function saveMessages(number, message, data) {
  let newMessage = { "number": number, "message": message, "timestamp": data };
  let messages;
  try {
    messages = JSON.parse(localStorage.getItem("messages"));
    messages.push(newMessage);
  } catch (err) {
    messages = [];
    messages.push(newMessage);
  }

  localStorage.setItem("messages", JSON.stringify(messages));
}