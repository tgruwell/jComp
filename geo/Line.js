/**
	@class A 2-dimensional line.
	@param {Float} slope The slope of the line. Should be a value between 0 and Infinity
	@param {Float} yIntercept Needed when the slope not Infinity
	@param {Float} xIntercept Needed when the slope is Infinity
*/
jComp.geo.Line = function(slope, yIntercept, xIntercept){
	this._m = slope;
	this._b = yIntercept;
	this._x = xIntercept;
}

/**
	Determine if two lines occupy the same space (have the same slope and y-intercept)
	@param {jComp.geo.Line} line A line to compare
	@return {Boolean} true if the lines occupy the same space
*/
jComp.geo.Line.prototype.equals = function(line){
	return this._m == line._m && this._b == line._b;
}

/**
	Determine if two lines are parallel
	@param {jComp.geo.Line} line A line to compare
	@return {Boolean} true if the lines are parallel, false if they are not
*/
jComp.geo.Line.prototype.isParallelTo = function(line){
	return this._m == line._m;
}

/**
	Determine if two lines are perpendicular
	@param {jComp.geo.Line} line A line to compare
	@return {Boolean} true if the lines are perpendicular, false if they are not
*/
jComp.geo.Line.prototype.isPerpendicularTo = function(line){
	return this._m == -1/line._m;
}

/**
	Determine where two lines intersect
	@param {jComp.geo.Line} line A line to compare
	@return {jComp.geo.Point} The point where they intersect. null if they do not intersect or if they exist in the same space
*/
jComp.geo.Line.prototype.getIntersection = function(line){
	if(this._m == line._m){
		// Parallel lines don't intersect
		return null;
	}
	
	var x = 0;
	var y = 0;
	
	if(line._m == Infinity){
		x = line._x;
	}else if(this._m == Infinity){
		x = this._x;
	}else{
		x = (line._b - this._b) / (this._m - line._m);
	}
	
	if(line._m == 0){
		y = line._b;
	}else if(this._m == 0){
		y = this._b;
	}else if(line._m == Infinity){
		if(this._m == Infinity){
			return null;
		}else{
			y = (this._m * x) + this._b;
		}
	}else{
		y = (line._m * x) + line._b;
	}
	
	return new jComp.geo.Point($f(x), $f(y));
}

