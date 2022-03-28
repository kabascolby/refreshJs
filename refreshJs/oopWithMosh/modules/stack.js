const _data = new WeakMap();

class Stack {
	constructor() {
		_data.set(this, {
			data: [],
			len: 0,
		});
	}

	push(obj) {
		let myArray = _data.get(this);
		myArray.data[myArray.len++] = obj;
	}

	pop() {
		let myArray = _data.get(this);
		if (myArray.len === 0) throw new Error("Stack is empty");
		return myArray.data[--myArray.len];
	}

	get count() {
		return _data.get(this).len;
	}

	peek() {
		if (this.count === 0) throw new Error("Stack is empty");
		let { data, len } = _data.get(this);
		return data[len - 1];
	}
}
// export { Stack };
module.exports = Stack;
