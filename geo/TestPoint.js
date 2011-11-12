try{
	var obj0 = new jComp.geo.Point();
	assertEquals(jComp.geo.dimensions(obj0), 0, "Incorrect dimensions, step 0");
	
	var obj1 = new jComp.geo.Point(1);
	assertEquals(jComp.geo.dimensions(obj1), 1, "Incorrect dimensions, step 1");
	
	var obj2 = new jComp.geo.Point(1, 2);
	assertEquals(jComp.geo.dimensions(obj2), 2, "Incorrect dimensions, step 2");
	
	var obj3 = new jComp.geo.Point(1, 2, 3);
	assertEquals(jComp.geo.dimensions(obj3), 3, "Incorrect dimensions, step 3");

}catch(e){
	fail(e.stack);
}

pass();