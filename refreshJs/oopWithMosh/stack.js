const _data = new WeakMap();

class Stack {
	constructor() {
		_data.set(this, []);
	}

	push(obj) {
		let myArray = _data.get(this);
		myArray[myArray.length++] = obj;
	}

	pop() {
		let myArray = _data.get(this);
		if (myArray.length === 0) throw new Error("Stack is empty");
		let len = myArray.length;
		let data = myArray[len - 1];
		myArray.len = len - 1;
		return data;
	}

	get count() {
		return _data.get(this).length;
	}

	peek() {
		if (this.count === 0) throw new Error("Stack is empty");
		let myArray = _data.get(this);
		return myArray[myArray.length - 1];
	}
}

const st = new Stack();
let { data, len } = [0, 8];
