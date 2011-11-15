try{
	var obj1 = null;
	var obj2 = null;
	
	// Test with the slope and intercept
	
	obj1 = new jComp.geo.Line({slope: 1, yIntercept: 0});
	obj2 = new jComp.geo.Line({slope: 1, yIntercept: 0});
	assertTrue(obj1.equals(obj2), "Lines are not equal, step 1");
	
	obj1 = new jComp.geo.Line({slope: 1, yIntercept: 0});
	obj2 = new jComp.geo.Line({slope: 1, yIntercept: 10});
	assertTrue(obj1.isParallelTo(obj2), "Lines are not parallel, step 1");
	
	obj1 = new jComp.geo.Line({slope: 4, yIntercept: 0});
	obj2 = new jComp.geo.Line({slope: -0.25, yIntercept: 10});
	assertTrue(obj1.isPerpendicularTo(obj2), "Lines are not perpendicular, step 1");
	
	obj1 = new jComp.geo.Line({slope: 1, yIntercept: 0});
	obj2 = new jComp.geo.Line({slope: -1, yIntercept: 0});
	assertTrue(jComp.geo.equals(obj1.getIntersection(obj2), new jComp.geo.Point(0, 0)), "Lines did not intersect at the correct point, step 2");
	
	obj1 = new jComp.geo.Line({slope: 4, yIntercept: 6});
	obj2 = new jComp.geo.Line({slope: 15, yIntercept: 8});
	assertTrue(jComp.geo.equals(obj1.getIntersection(obj2), new jComp.geo.Point(-0.18182, 5.27273)), "Lines did not intersect at the correct point, step 3");

	// Test by specifying two points
	
	obj1 = new jComp.geo.Line({pointA: new jComp.geo.Point(-10, -10), pointB: new jComp.geo.Point(10, 10)});
	obj2 = new jComp.geo.Line({pointA: new jComp.geo.Point(1, 8), pointB: new jComp.geo.Point(8, 1)});
	assertTrue(jComp.geo.equals(obj1.getIntersection(obj2), new jComp.geo.Point(4.5, 4.5)), "Lines did not intersect at the correct point, step 4");
	
	// Test point on line
	
	obj1 = new jComp.geo.Line({slope: 4, yIntercept: 6});
	obj2 = new jComp.geo.Point(-0.18182, 5.27273);
	assertTrue(obj1.isPointOnLine(obj2, 0.0001), "Point was not on line, step 5");
	
	obj2 = new jComp.geo.Point(-0.18161, 5.27273);
	assertFalse(obj1.isPointOnLine(obj2, 0.0001), "Point was on line, step 5");
	
}catch(e){
	fail(e.stack);
}

pass();