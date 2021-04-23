// object litteral
/*
	Oject litteral syntax is not a good way to duplicate an object
	if that object has one more methods
	We use object Litteral in a case an object does not
	have a behavior(method).
 */

const circle = {
	radius: 1,
	location: {
		x: 1,
		y: 1
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

