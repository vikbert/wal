
const speak = function(text, enabled = true) {
  if (!text) {
    return;
  }

  if (!enabled) {
    return;
  }

  const msg = new SpeechSynthesisUtterance();
  msg.text = text;

  window.speechSynthesis.speak(msg);
}
export default speak;
