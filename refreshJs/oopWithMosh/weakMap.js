const _side = new WeakMap();
const _draw = new WeakMap();

class Square {
	constructor(side) {
		_side.set(this, side);

		//WeakMap has to be only inside a constructor
		_draw.set(this, () => {
			console.log("drawing ", side, this);
		});
	}
	// WeakMap can be called inside a methode
	move() {
		_draw.get(this)();
		console.log("Moving");
	}

	// Implementing getter and Setter in ES6

	get side() {
		return _side.get(this);
	}

	set side(value) {
		if (value <= 0) throw new Error("Invalide value");
		_side.set(this, value);
	}
}

const s = new Square(5);
