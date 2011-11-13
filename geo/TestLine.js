try{
	var obj1 = null;
	var obj2 = null;
	
	obj1 = new jComp.geo.Line(1, 0);
	obj2 = new jComp.geo.Line(1, 0);
	assertTrue(obj1.equals(obj2), "Lines are not equal, step 1");
	
	obj1 = new jComp.geo.Line(1, 0);
	obj2 = new jComp.geo.Line(1, 10);
	assertTrue(obj1.isParallelTo(obj2), "Lines are not parallel, step 1");
	
	obj1 = new jComp.geo.Line(4, 0);
	obj2 = new jComp.geo.Line(-0.25, 10);
	assertTrue(obj1.isPerpendicularTo(obj2), "Lines are not perpendicular, step 1");
	
	obj1 = new jComp.geo.Line(1, 0);
	obj2 = new jComp.geo.Line(-1, 0);
	assertTrue(jComp.geo.equals(obj1.getIntersection(obj2), new jComp.geo.Point(0, 0)), "Lines did not intersect at the correct point, step 2");
	
	obj1 = new jComp.geo.Line(4, 6);
	obj2 = new jComp.geo.Line(15, 8);
	assertTrue(jComp.geo.equals(obj1.getIntersection(obj2), new jComp.geo.Point(-0.18182, 5.27273)), "Lines did not intersect at the correct point, step 3");

}catch(e){
	fail(e.stack);
}

pass();