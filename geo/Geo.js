/**
	Determine the number of dimensions an object exists in.
	@param {Object} obj An object to look at, for example a point or a line
	@return {Integer} The number of dimensions an object exists in
*/
jComp.geo.dimensions = function(obj){
	return obj.length;
}

/** 
	Determine the distance between two points. Assumes both points have the same number of dimensions
	but bases it off of the number of dimensions point1 is in.
	@param {jComp.geo.Point} point1 The first point
	@param {jComp.geo.Point} point2 The second point
	@return {Float} The distance between the two points
*/
jComp.geo.distance = function(point1, point2){
	if(point1.length == 3){
		// 3 dimensional
		
		// We don't use Math.pow here because it is generally slower than just writing it out long hand.
		// We also compute the differences only once. Most JS engines don't optimize enough to only do it once
		// These two optimizations gives a 50% increase in performance in older FF (3.6) and a 30% increase in Chrome (v 15)
		var d1 = point1[0]-point2[0];
		var d2 = point1[1]-point2[1];
		var d3 = point1[2]-point2[2];
		return $f(Math.sqrt(d1*d1 + d2*d2 + d3*d3));
		
	}else if(point1.length == 2){
		// 2 dimensional
		
		var d1 = point1[0]-point2[0];
		var d2 = point1[1]-point2[1];
		return $f(Math.sqrt(d1*d1 + d2*d2));
		
	}else if(point1.length > 3){
		// N dimensional
		var sum = 0;
		for(var i=0; i<point1.length; i++){
			var d = point1[i]-point2[i];
			sum += d*d;
		}
		return $f(Math.sqrt(sum));
		
	}else if(point1.length == 1){
		// 1 dimensional
		return point1[0] = point2[0];
	}
	return 0;
}

/**
	Determines if two geometric objects are equal to each other. As in their points, lines, etc are numerically the same
	@param {Object} obj1 The first object to compare
	@param {Object} obj2 The second object to compare
	@returns {Boolean} true if the objects are numerically the same, false if they are not
*/
jComp.geo.equals = function(obj1, obj2){
	// TODO: make this work for other objects besides points
	
	if(obj1.length == 3){
		// 3 dimensional
		return (obj1[0] == obj2[0] && obj1[1] == obj2[1] && obj1[2] == obj2[2]);	
		
	}else if(obj1.length == 2){
		// 2 dimensional
		return (obj1[0] == obj2[0] && obj1[1] == obj2[1]);
		
	}else if(obj1.length > 3){
		// N dimensional
		for(var i=0; i<obj1.length; i++){
			if(obj1[i] != obj2[i]) return false;
		}
		return true;
		
	}else if(obj1.length == 1){
		// 1 dimensional
		return obj1[0] == obj2[0];
	}
	
	return true;
}