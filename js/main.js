alert('Lets make a story together!');

var colour = prompt('Choose a colour (orange, indigo, etc.).');

var creature = prompt('Choose a creature (dragon, moth, etc.).');

var adjective = prompt('Choose an adjective (beautiful, super, etc.).');

var verbed = prompt('Choose a past tense verb (ran, burped, etc.).');

var story = prompt('Which story would you like?');

var a = function () {
  document.write('After snacking on' + adjective + 'treats, the' + colour + 'bellied' + creature + verbed + 'for hours.');
}

var b = function () {
  document.write('Ameilia' + verbed + 'through the' + adjective + colour + 'nebula escaping the space' + creature + '.');
}

var c = function ()  {
  document.write('Jackson chose his' + adjective + ',' + colour + creature + 'card and' + verbed + 'it to the table knowing he won.');
}

if (story == 'a' || story == 'A') {
  a();
} else if (story == 'b' || story == 'B') {
  b();
} else if (story == 'c' || story == 'C') {
  c();
}

) + var options = ['a) Snacking', 'b) Escaping', 'c) Winning'] + 'Enter the letter below:'
