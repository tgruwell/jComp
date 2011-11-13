try{
	var obj1 = null;
	var obj2 = null;
	
	// Test jComp.geo.distance
	
	obj1 = new jComp.geo.Point();
	obj2 = new jComp.geo.Point();
	assertEquals(jComp.geo.distance(obj1, obj2), 0, "Distance between points incorrect, step 1");
	
	obj1 = new jComp.geo.Point(0);
	obj2 = new jComp.geo.Point(10);
	assertEquals(jComp.geo.distance(obj1, obj2), 10, "Distance between points incorrect, step 2");
	
	obj1 = new jComp.geo.Point(0, 0);
	obj2 = new jComp.geo.Point(10, 10);
	assertEquals(jComp.geo.distance(obj1, obj2), 14.14214, "Distance between points incorrect, step 3");
	
	obj1 = new jComp.geo.Point(0, 0, 0);
	obj2 = new jComp.geo.Point(10, 10, 10);
	assertEquals(jComp.geo.distance(obj1, obj2), 17.32051, "Distance between points incorrect, step 4");
	
	obj1 = new jComp.geo.Point(0, 0, 0, 0);
	obj2 = new jComp.geo.Point(10, 10, 10, 10);
	assertEquals(jComp.geo.distance(obj1, obj2), 20, "Distance between points incorrect, step 5");
	
	obj1 = new jComp.geo.Point(12.421273, 15.215522112);
	obj2 = new jComp.geo.Point(51.532, 10.8922212);
	assertEquals(jComp.geo.distance(obj1, obj2), 39.34895, "Distance between points incorrect, step 6");
	
	obj1 = new jComp.geo.Point(12.421273, 15.215522112);
	obj2 = new jComp.geo.Point(12.421273, 15.215522112);
	assertEquals(jComp.geo.distance(obj1, obj2), 0, "Distance between points incorrect, step 7");
	
	// Test jComp.geo.equals
	
	obj1 = new jComp.geo.Point();
	obj2 = new jComp.geo.Point();
	assertTrue(jComp.geo.equals(obj1, obj2), "Empty points were not equal, step 2");
	
	obj1 = new jComp.geo.Point(0);
	obj2 = new jComp.geo.Point(10);
	assertFalse(jComp.geo.equals(obj1, obj2), "1-dimensional points were equal , step 2");
	
	obj1 = new jComp.geo.Point(41.2);
	obj2 = new jComp.geo.Point(41.2);
	assertTrue(jComp.geo.equals(obj1, obj2), "1-dimensional points were not equal , step 2");
	
	obj1 = new jComp.geo.Point(0, 0);
	obj2 = new jComp.geo.Point(10, 10);
	assertFalse(jComp.geo.equals(obj1, obj2), "2-dimensional points were equal , step 2");
	
	obj1 = new jComp.geo.Point(41.2, 10);
	obj2 = new jComp.geo.Point(41.2, 10);
	assertTrue(jComp.geo.equals(obj1, obj2), "2-dimensional points were not equal , step 2");
	
	obj1 = new jComp.geo.Point(0, 0, 0);
	obj2 = new jComp.geo.Point(10, 10, 10);
	assertFalse(jComp.geo.equals(obj1, obj2), "3-dimensional points were equal , step 2");
	
	obj1 = new jComp.geo.Point(41.2, 10, -12.4);
	obj2 = new jComp.geo.Point(41.2, 10, -12.4);
	assertTrue(jComp.geo.equals(obj1, obj2), "3-dimensional points were not equal , step 2");
	
	obj1 = new jComp.geo.Point(0, 0, 0, 0);
	obj2 = new jComp.geo.Point(10, 10, 10, 10);
	assertFalse(jComp.geo.equals(obj1, obj2), "4-dimensional points were equal , step 2");
	
	obj1 = new jComp.geo.Point(41.2, 10, -12.4, 0);
	obj2 = new jComp.geo.Point(41.2, 10, -12.4, 0);
	assertTrue(jComp.geo.equals(obj1, obj2), "4-dimensional points were not equal , step 2");
	
	
}catch(e){
	fail(e.stack);
}

pass();