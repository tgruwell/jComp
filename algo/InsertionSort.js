/**
	Sort the input array using the insertion sort method.
	@param {Array} ary An array of numbers to sort
	@param {Object} params A structure with keys for the sort options
	@param {String} params.dir The direction of the sort: "asc" or "desc". Default is "asc".
	@param {Boolean} params.copy Copy the result into a new variable and leave the original untouched. Default is false.
	@return {Array} A sorted array. If params.copy was false then this is a pointer to the original. Otherwise it is a new array.
*/
jComp.algo.insertionSort = function(ary){
	// The "params" argument name isn't included in the function definition. When it is redefined
	// in the function body some browsers *Chrome, cough* slow down quite a bit.
	if(arguments.length == 1) var params = {};
	else var params = arguments[1];
	
	if(typeof params["dir"] == "undefined") params["dir"] = "asc";
	if(typeof params["copy"] == "undefined") params["copy"] = false;
	
	if(params["copy"] == true){
		var result = [];
		for(var i=0; i<ary.length; i++) result.push(ary[i]);
	}else{
		var result = ary;
	}
	
	if(params["dir"] == "asc"){
		for(var i=1; i<result.length; i++){
			var current = result[i];
			var j=i-1;
			while(j>=0 && result[j]>current){
				result[j+1] = result[j];
				j--;
			}
			result[j+1] = current;
		}
	}else{
		for(var i=result.length-2; i>=0; i--){
			var current = result[i];
			var j=i+1;
			while(j<=result.length && result[j]>current){
				result[j-1] = result[j];
				j++;
			}
			result[j-1] = current;
		}
	}
	
	return result
}