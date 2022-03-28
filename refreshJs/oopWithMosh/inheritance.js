import Circle from './function.js';
/*
	Inheritance is one of the core concept of OOP
	which enable an object to take on the propreties and methods
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
	belong to that constructor.

	because JS is a dynamique language. We can use tha mecanism
	to add a property to a prototype of a constructor.


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
What is Method overriding?
	it's consist to change a signature of a method
Ex: Because every Object in JS inherit of the Object Base
wich has toString method we can use the prototypical inheritance to overewrite
the toString method
*/

Circle.prototype.toString = function() {
	console.log('this circle has a radius of ' + this.radius);
}
console.log(new Circle(20).toString());

//We can access instance member from a prototype member
//Also we can access prototype member from instance member

Circle.prototype.color = function(color) {
	console.log(`this circle has a ${color} color`);

	//accessing an instance member
	this.draw();
}

let circle3 = new Circle(20);
console.log(circle3.color('red'));

/*
listing the members of an object
*/

//the Object.keys return only instance members
console.log(Object.keys(circle3));

//to return the instance and prototype members we use
//the for in loop

for (let key in circle3)
	console.log(key)

//this return the hierachy of an object it's replace __proto__
console.log(Object.getPrototypeOf(circle3))
console.log(circle3.__proto__ )

/*
What is the use case of inheritance?
	One of the core concept of inheritance is to avoid
	code dupplication.
	if we have two or multiple object using the same functionality
	it's will be better to create another object to be parent of those objects
	ex: circle and square need to be duplicated
	We can use a third object called shape and make circle and square to inherit
	from shape.
*/

function Shape() {
}

Shape.prototype.duplicate = function () {
	console.log('this -------->', this)
	return Object.getPrototypeOf(this).constructor.name + ' is duplicated';
}

const shape = new Shape();
// console.log(shape)

//implementation of inheritance
//this has to be before creating a new object
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

const inheritCircle = new Circle(34);

console.log(inheritCircle.duplicate());
