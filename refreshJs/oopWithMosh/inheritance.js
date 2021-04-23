import Circle from './function.js';
/*
	Inheritance is one of the core concept of OOP
	which enable an object to take on the proprety and methode
	of another object

	there is two type of inheritance:
		Prototypical inheritance,
		classical inheritance,
*/


/*
	Protypical inheritance
*/

let person = {name: 'Lamine'};

// to get the prototype of an object
let objectBase = (Object.getPrototypeOf(person));

//to get a proprety descriptor of one the method of an object

let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

//To change a proprety descriptor of an  object

Object.defineProperty(person, 'name', {
	writable: false, // this will make the propriety readonly
	enumerable: false, // this will make the property to not be iterrable
	configurable:false // this will make the property not be deleted;
})

console.log(descriptor)

// person.name = "Mohamed Kaba";
// delete person.name;

// console.log(person);

/*
	what is a prototype of an object?
	 a prototype is a parent object wich was use to create that object.

	What is constructor?
		a constructor is a function use to create an object.
	because in JS function are objects that mean every constructor function
	has a prototype.

	the protoype of a constructor is the Object that will be use for all objects created'
	by that constructor
*/


/*
	How to implement inheritance?
	Every constructor has a prototype property wich will be use to create all the object
	from belong to that constructor.

	because JS is a dynamique language. We can use that to add a property to a prototype of
	a constructor.


	Ex:
	Circle(radius) {
		//instance proprety
		this.radius = radius;

		//instance method
		this.draw = function () {
			console.log('draw');
	}
}
*/

//this is a prototype method
Circle.prototype.move = function () {
	console.log('move');
}

/*
What is Method overwriting?
	it's consist to change a signature of a method
Ex: Because every Object in JS inherite of the Object Base
wich has toString method we can use the prototypical inheritance to overewrite
the toString method
*/

Circle.prototype.toString = function() {
	console.log('this circle has a radius of ' + this.radius);
}
console.log(new Circle(20).toString());

//We can access instance member from a prototype member

Circle.prototype.color = function(color) {
	console.log(`this circle has a ${color} color`);

	//accessing an instance member
	this.draw();
}
console.log(new Circle(20).color('red'));

