(function (window){
var helloSpeaker = {};
helloSpeaker.name = "Hello"
helloSpeaker.speak = function (name) {
  console.log(helloSpeaker.name + " " + name);
}
window.helloSpeaker = helloSpeaker;
})(window);