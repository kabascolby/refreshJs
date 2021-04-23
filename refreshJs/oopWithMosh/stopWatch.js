'use strict'

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
