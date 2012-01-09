try{
	var items_1 = [3,1,4,5,8,2,6,8,42,3,4,0,-5,5,6];
	var items_2 = [6,1,4,0,8,2,3,8,42,6,4,5,5,-5,3];
	var items_asc = [-5,0,1,2,3,3,4,4,5,5,6,6,8,8,42];
	var items_desc = [42,8,8,6,6,5,5,4,4,3,3,2,1,0,-5];
	
	jComp.algo.insertionSort(items_1, true);
	assertTrue(arrayCompare(items_1, items_asc), "Array incorrect, step 1");
	
	jComp.algo.insertionSort(items_2, false);
	assertTrue(arrayCompare(items_2, items_desc), "Array incorrect, step 2");
	
	function arrayCompare(ary1, ary2){
		if(ary1.length != ary2.length) return false;
		for(var i=0; i<ary1.length; i++){
			if(ary1[i] != ary2[i]) return false;
		}
		return true;
	}
}catch(e){
	fail(e.stack);
}

pass();