import $ from 'jquery'

$(document.body).on('keydown', function (event) {
  if (!event.target) return;
  if (event.target.nodeName !== 'INPUT') return;

  var s = new SpeechSynthesisUtterance();
  s.text = String.fromCodePoint(event.which);
  window.speechSynthesis.speak(s);
});
