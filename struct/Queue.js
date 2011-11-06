/**
	@class Queue A queue for handling FIFO tasks
*/
jComp.struct.Queue = function(){
	this._aryData = [];
}

/**
	Determine if the queue is empty
	@returns {Boolean} true if the queue is empty, false if it is not
*/
jComp.struct.Queue.prototype.empty = function(){
	return this._aryData.length == 0;
}

/**
	Get the object at the front of the queue without removing it
	@returns {Object} The object at the front of the queue. Does not remove the object
*/
jComp.struct.Queue.prototype.front = function(){
	return this._aryData[this._aryData.length-1];
}

/**
	Remove the object at the front of the queue
	@returns {Object} The object at the front of the queue that has just been removed
*/
jComp.struct.Queue.prototype.pop = function(){
	return this._aryData.pop();
}

/**
	Add an object to the back of the queue
	@param {Object} value The value to be added to the queue. Can be any type of object
	@returns void
*/
jComp.struct.Queue.prototype.push = function(value){
	this._aryData.splice(0, 0, value);
}