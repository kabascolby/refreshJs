"use strict";
/*
function StopWatch () {
	let duration = 0;
	let startTime = 0;
	let isStop = false;

	function getDuration(time) {
		return Math.floor((Date.now() - time) / 1000);
	}

	this.start = function () {
		if(isStop)
			throw new Error('StopWatch already Started');
		isStop = true;
		startTime = Date.now();
	}

	this.stop = function () {
		if(!isStop)
			throw new Error('StopWatch already Stoped');
		duration += getDuration(startTime);
		startTime = 0;
		isStop = false;
	}

	this.reset = function() {
		[duration, startTime, isStop] = [0, 0, false];
	}

	Object.defineProperty(this, 'duration', {
		get: function() {
			return duration;
		}
	})

}

const sw = new StopWatch();
*/

function StopWatch() {
	let startTime = 0;
	let endTime = 0;
	let running = 0;

	this.start = function () {
		if (running) throw new Error("Time already started");
		startTime = Date.now();
		running = 1;
	};

	this.stop = function () {
		if (!running) throw new Error("StopWatch already stopped");
		endTime = Date.now();
		running = 0;
	};

	let getDuration = (time) => {
		return Math.floor((time - startTime) / 1000);
	};
	Object.defineProperty(this, "duration", {
		get: () => (running ? getDuration(Date.now()) : getDuration(endTime)),
	});

	this.reset = function () {
		running = 0;
		startTime = 0;
	};
}

let mytimer = new StopWatch();
