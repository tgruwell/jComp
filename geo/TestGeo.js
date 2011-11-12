try{
	var obj1 = null;
	var obj2 = null;
	
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
	
}catch(e){
	fail(e.stack);
}

pass();