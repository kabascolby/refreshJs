// window.onload = () => {
function HtmlElement() {
	this.click = function () {
		console.log("clicked");
	};
}

function extend(Parent, Child) {
	Child.prototype = new Parent();
	Child.prototype.constructor = Child;
}
HtmlElement.prototype.focus = function () {
	console.log("focus");
};

function HtmlSelectElement(items = []) {
	this.items = items;
	this.addItem = function (item) {
		this.items.push(item);
	};

	this.removeItem = function (item) {
		let index = this.items.indexOf(item);
		this.items.splice(index, 1);
	};
}

// HtmlSelectElement.prototype = new HtmlElement();
// HtmlSelectElement.prototype.constructor = HtmlSelectElement;

extend(HtmlElement, HtmlSelectElement);

HtmlSelectElement.prototype.render = function () {
	return `<select>
	${this.items.map((item) => `<option>${item}<\option>`).join("")}
	</select>`;
};

let e = new HtmlSelectElement([1, 3, 5, 8]);

function HtmlImageElement(src) {
	this.src = src;
	this.render = function () {
		return `img src="${this.src}" />`;
	};
}

extend(HtmlElement, HtmlImageElement);

/*  New verison

function HtmlElement () {
	this.click  = function () {
		console.log("clicked");
	};
}

HtmlElement.prototype.focus = function () {
	console.log("focus");
};

HtmlElement.prototype.render = function() {
	return `<select>
	${this.items.map(item => `  <option> ${item} </option>`).join('\n')}
	</select>`
}


function HtmlSelectElement(items = []) {
	this.items = items;

	this.addItem = function (item) {
		this.items.push(item);
	}

	this.removeItem = function (item) {
		let index = this.items.indexOf(item);
		if (index > 0)
		this.items.splice(index, 1);
	}

}

function extendsProto(Child, Parent) {
	Child.prototype = new Parent();
	Child.prototype.constructor = Child;
}

extendsProto(HtmlSelectElement, HtmlElement);

function HtmlImageElement(src) {
	this.src = src;

	this.render = function () {
	  return `<img src="${this.src} " />`;
	}
}

  extendsProto(HtmlImageElement, HtmlElement);


  const e = new HtmlElement();

  e.click();

  e.focus();

  const s = new HtmlSelectElement([1, 8, 5, 9, 5]);

  s.removeItem(8)
  console.log(s.items)

  const items = [s, new HtmlImageElement('http://lamine.jpg')];

  for (item of items)
	console.log(item.render()); */
