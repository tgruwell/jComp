/**
	Sort the input array using the insertion sort method.
	@param {Array} obj An array of numbers to sort
	@param {Boolean} asc Boolean value indicating the direction to sort. True for ascending. False for decending.
*/
jComp.algo.insertionSort = function(obj, asc){
	if(asc){
		for(var i=1; i<obj.length; i++){
			var current = obj[i];
			var j=i-1;
			while(j>=0 && obj[j]>current){
				obj[j+1] = obj[j];
				j--;
			}
			obj[j+1] = current;
		}
	}else{
		for(var i=obj.length-2; i>=0; i--){
			var current = obj[i];
			var j=i+1;
			while(j<=obj.length && obj[j]>current){
				obj[j-1] = obj[j];
				j++;
			}
			obj[j-1] = current;
		}
	}
}