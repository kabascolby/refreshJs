/*
	This example show us how to use abstraction principle
	in JS by using local variable to hide implementation details.
*/

function Circle(radius) {
	this.radius = radius;

	let defaultLocation = {
		x: 0,
		y: 0,
	}

	let computeOptimumLocation = function(factor) {
		// ...
	}

	this.draw = function () {
		computeOptimumLocation(0.1);
		console.log('draw');
	}

}


/*
	function Getter and Setter
*/
function Circle2(radius) {
	this.radius = radius;

	let defaultLocation = {
		x: 0,
		y: 0,
	};

	this.draw = function () {
		console.log('draw');
	};

	this.getDefaultLocation = function () {
		return defaultLocation;
	};

}
const circle = new Circle2(10).getDefaultLocation();

/*
	Proprer way to do Getter and Setter
*/

function Circle3(radius) {
	this.radius = radius;

	let defaultLocation = {
		x: 0,
		y: 0,
	};

	this.draw = function () {
		console.log('draw');
	};

	Object.defineProperty(this, 'defaultLocation', {
		get: function() {
			return defaultLocation;
		},

		set: (value) => {
			if (!value.x || !value.y)
				throw new Error('Invalide location');
			defaultLocation = value;
		},
	})

}

console.log(circle);
console.log(T = new Circle3(14));
