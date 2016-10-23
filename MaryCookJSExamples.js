// Examples from A practical introduction to functional programming written by Mary Rose Cook execute in JavaScript

// This is a functional function:
function functionalIncrement(){
	var a = 1
	return a++
}

functionalIncrement();

// This is a simple map that takes a list of names and returns a list of the lengths of those names:
var nameLengths = ['Mary', 'Isla', 'Sam'].map(function(n){ return n.length});

console.log(nameLengths);

// This is a map that squares every number in the passed collection:
var squares = [0,1,2,3,4].map(function(x){ return x*x})
console.log(squares);

// The unfunctional code below takes a list of real names and replaces them with randomly assigned code names.
//
// var names = ['Mary', 'Isla', 'Sam']
// var codeNames = ['Señora Blonde','Señor Pinky', 'Señora Orangina' ]

// for (var i in names){
// 	names[i] = codeNames[x]
// }
// //always returns same value for x
// console.log(names);

// This can be rewritten as a map: HELP
var names = ['Mary', 'Isla', 'Sam'].map(function(){
	 var x = Math.floor((Math.random() * 2) + 1)
	 var codeNames = ['Señora Blonde','Señor Pinky', 'Señora Orangina' ]
	 return codeName[x]
})
