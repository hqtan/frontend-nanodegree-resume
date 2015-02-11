var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John W Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function lastNameFirst(name){
  return name.split(' ').reverse().join(', ')
}

function alphabetizer(_names) {
  return _names.map(lastNameFirst).sort()
}

