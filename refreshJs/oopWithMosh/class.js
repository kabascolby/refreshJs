const _diameter = Symbol();
const _draw = Symbol();

class Circle {
	constructor(radius, diameter = 0) {
		this.radius = radius;
		this[_diameter] = diameter;
		this.move = () => {
			console.log("move");
		};
	}

	[_draw]() {
		console.log("drawing");
	}

	static parse(str) {
		const radius = JSON.parse(str).radius;
		return new Circle(radius);
	}
}

const cir = Circle.parse('{"radius" : 34}');

const c = new Circle(1);
