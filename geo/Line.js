/**
	@class A 2-dimensional line. Can be specified by either providing the slope and one of the intercepts, or by providing two points that make up the line
	@constructor
	@param {Object} params A structure with keys for the attributes of the line.
	@param {Float} params.slope The slope of the line. Should be a value between 0 and Infinity
	@param {Float} params.yIntercept Needed when the slope not Infinity
	@param {Float} params.xIntercept Needed when the slope is Infinity
	@param {jComp.geo.Point} params.pointA A point that exists on the line
	@param {jComp.geo.Point} params.pointB Another point that exists on the line
*/
jComp.geo.Line = function(params){
	if(params.slope){
		this._m = params.slope;
		this._b = params.yIntercept;
		this._x = params.xIntercept;
	}else{
		this._dy = params.pointA[1] - params.pointB[1];
		this._dx = params.pointA[0] - params.pointB[0];
		this._m = this._dy / this._dx;
		if(this._m == -Infinity) this._m = Infinity;
		this._b = params.pointA[1] - (this._m * params.pointA[0]);
		this._x = params.pointA[0];
	}
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

/**
	Determine if a point falls on this line
	@param {jComp.geo.Point} point The point to check
	@param {Float} tolerance How accurate the determination should be. For example, setting to 0.001 will allow 3.123 to fall on the line as well as 3.124
	@return {Boolean} true if the point falls on the line, false if it doesn't
*/
jComp.geo.Line.prototype.isPointOnLine = function(point, tolerance){
	var y = point[0]*this._m + this._b;
	return Math.abs(y-point[1]) <= tolerance;
}