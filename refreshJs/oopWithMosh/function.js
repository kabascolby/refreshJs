  // object litteral
  /*
  	An object in JS is a collection of "key" "value" pair

	In OOP there is a difference between property and methode
	a property is use to hold a value;
	a methode is use to define some logic
   */

const circle = {
	radius: 1,
	location: {
		x: 1,
		y: 2
	},
	draw: function() {
		console.log('draw');
	}
};

console.log(circle);


/*
	factory function
*/

function createCircle(radius) {
	return {
		radius,
		draw: function() {
			console.log('draw');
		}
	};
}

const circle2 = createCircle(10);

console.log(circle2);

/*
	Constructor function
*/

export default function Circle(radius) {
	this.radius = radius;
	this.draw = function () {
		console.log('draw');
	}
}

const anotherCircle = new Circle(9);

console.log(anotherCircle);
