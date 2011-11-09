/**
	@class A generic set object
*/
jComp.struct.Set = function(){
	this._aryData = [];
}

/**
	Iterate over the items in the set
	@param {Function} f The function to execute for each item in the set. If the function returns false then the iterator will halt
	@returns {Boolean} true if the iterator processed all items without being terminated. false if the iterator was told to terminate before completion
*/
jComp.struct.Set.each = function(f){
	var blnTerminated = false;
	for(var i=0; i<this._aryData; i++){
		if(!f(this, this._aryData[i])){
			blnTerminated = true;
			break;
		}
	}
	return blnTerminated;
}

/**
	Determine if the set is empty
	@returns {Boolean} true if the set is empty, false if it is not
*/
jComp.struct.Set.prototype.isEmpty = function(){
	return this._aryData.length == 0;
}

/**
	Get the number of items in the set
	@returns {Integer} The number of items in the set
*/
jComp.struct.Set.prototype.size = function(){
	return this._aryData.length;
}

/**
	Determine if the set contains this item
	@param {Object} value The item to look for
	@returns {Boolean} true if the set contains the item, false if it does not
*/
jComp.struct.Set.prototype.contains = function(value){
	for(var i=0; i<this._aryData.length; i++){
		if(this._aryData[i] == value) return true;
	}
	return false;
}

/**
	Insert an item into the set if the set does not already contain that item
	@param {Object} value An item to be inserted into the set
	@returns void
*/
jComp.struct.Set.prototype.insert = function(value){
	if(!this.contains(value)){
		this._aryData.push(value);
	}
}

/**
	Union this set with another set. After the function, this set will have all of the elements of set that was passed in.
	@param {jComp.struct.Set} otherSet The set with which to union
	@return void
*/
jComp.struct.Set.prototype.union = function(otherSet){
	otherSet.each(function(caller, value){
		caller.insert(value);
	});
}
