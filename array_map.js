var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(pair) {
  var x = pair.x;
  var y = pair.y;
  return Math.sqrt((x * x) + (y * y));

});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);


// refactored code:
// var input = [
//   { x: 3, y: 4 },
//   { x: 12, y: 5 },
//   { x: 8, y: 15 }
// ];
// var result = input.map(pair => {
//   var x = pair.x;
//   var y = pair.y;
//   return Math.sqrt((x * x) + (y * y));

// });

// console.log(result[0] === 5);
// console.log(result[1] === 13);
// console.log(result[2] === 17);