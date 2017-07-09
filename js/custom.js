var iliketo = $('#i-like-to');
var actionCount = 1;
var actions = [
  'code',
  'create',
  'write',
  'dream',
  'design',
  'tinker',
  'explore',
  'learn',
  'adventure',
  'invent',
  'build',
  'collaborate',
  'travel'
];

function changeAction() {
  var index = (actionCount%(actions.length));
  iliketo.fadeOut(500, function () {
      $(this).html(actions[index]).fadeIn(500);
    });
  actionCount++;
}

function startTimer() {
  setInterval(changeAction, 4000);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

(function() {
  shuffle(actions);
  startTimer();
})();