'use strict'

function StopWatch () {
	Object.defineProperties(this, {
		running: {
			value: 0,
			enumerable:false,
		},

		startTime: {
			value: 0,
			enumerable:false,
		},

		isStop: {
			value: false,
			enumerable:false,
		},
	})

	this.reset = function() {
		[this.duration, this.startTime, this.isStop] = [0, 0, false];
	}

	Object.defineProperty(this, 'duration', {
		get: function() {
			return this.running;
		}
	})

}

StopWatch.prototype.stop = function () {
	if(!isStop)
		throw new Error('StopWatch already Stoped');
	this.running += Math.floor((Date.now() - this.startTime) / 1000);;
	tjis.startTime = 0;
	this.isStop = false;
}

StopWatch.prototype.reset = function() {
	[this.duration, this.startTime, this.isStop] = [0, 0, false];
}
StopWatch.prototype.start = function () {
	if(this.isStop)
		throw new Error('StopWatch already Started');
	this.isStop = true;
	this.startTime = Date.now();
}

const swt = new StopWatch();
