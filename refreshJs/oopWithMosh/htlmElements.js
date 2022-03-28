function HtmlElement () {
    this.click = function () {
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function () {
    console.log('focus');
}


function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function(item) {
        this.items.push(item);
    }

    this.removeItem = function(item) {
        let index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }

}

HtmlSelectElement.prototype = new HtmlElement()
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

let e = new HtmlSelectElement([1,3,5,8]);
e.addItem(5);
e.removeItem(5);

e.click();
e.focus();
