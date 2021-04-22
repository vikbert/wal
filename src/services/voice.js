
const speak = function(text) {
  if (!text) {
    return;
  }

  const msg = new SpeechSynthesisUtterance();
  msg.text = text;

  window.speechSynthesis.speak(msg);
}
export default speak;
