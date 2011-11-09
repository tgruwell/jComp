try{
	var q = new jComp.struct.Queue();

	assertTrue(q.isEmpty(), "Step 1 - Queue not empty");

	q.push(123);

	assertFalse(q.isEmpty(), "Step 1 - Queue empty");

	q.push(536);

	assertEquals(q.size(), 2, "Step 1 - Queue size incorrect");
	assertEquals(q.front(), 123, "Step 1 - Front value is incorrect");
	assertEquals(q.size(), 2, "Step 2 - Queue size incorrect");

	assertEquals(q.pop(), 123, "Step 2 - Pop value incorrect");
	assertEquals(q.size(), 1, "Step 3 - Queue size incorrect");

	assertEquals(q.pop(), 536, "Step 3 - Pop value incorrect");
	assertEquals(q.size(), 0, "Step 4 - Queue size incorrect");
}catch(e){
	fail(e.stack);
}

pass();