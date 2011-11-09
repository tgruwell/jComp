try{
	var obj = new jComp.struct.Set();

	assertTrue(obj.isEmpty(), "Step 1 - Set not empty");

	obj.insert(123);

	assertFalse(obj.isEmpty(), "Step 1 - Set empty");

	obj.insert(536);

	assertEquals(obj.size(), 2, "Step 1 - Set size incorrect");
	assertTrue(obj.contains(536), "Step 1 - Could not find element");
	assertFalse(obj.contains(478), "Step 1 - Found element that wasn't inserted");
}catch(e){
	fail(e.stack);
}

pass();