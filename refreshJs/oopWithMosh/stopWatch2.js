"use strict";

function StopWatch2() {
	Object.defineProperties(this, {
		startTime: {
			configurable: false,
			enumrable: false,
			writable: true,
			value: 0,
		},

		endTime: {
			configurable: false,
			enumrable: false,
			writable: false,
			value: 0,
		},

		running: {
			configurable: false,
			enumrable: false,
			writable: true,
			value: 0,
		},
	});

	let getDuration = (time) => {
		return Math.floor((time - this.startTime) / 1000);
	};
	Object.defineProperty(this, "duration", {
		get: () =>
			this.running ? getDuration(Date.now()) : getDuration(this.endTime),
	});
}

StopWatch2.prototype.start = function () {
	if (this.running) throw new Error("Time already started");
	this.startTime = Date.now();
	this.running = 1;
};

StopWatch2.prototype.stop = function () {
	if (!this.running) throw new Error("StopWatch already stopped");
	this.endTime = Date.now();
	this.running = 0;
};

StopWatch2.prototype.reset = function () {
	this.running = 0;
	this.startTime = 0;
};
let mytimer = new StopWatch2();
