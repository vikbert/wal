
const speak = function(text) {
  var msg = new SpeechSynthesisUtterance();
  msg.text = text;

  window.speechSynthesis.speak(msg);
}
export default speak;
