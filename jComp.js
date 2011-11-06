
// jComp_precisionX is used when rounding floating point numbers. It is not stored inside off the jComp object
// because doing so makes $f slower in older browsers
var jComp_precisionX = 100000;

/**
	@class The jComp singleton. Globally available.
*/
var jComp = function(){
	this._precision = 5;
	jComp_precisionX = Math.pow(10, this.precision);
	
	/**
		Set the precision used for floating point numbers
		@param {Integer} precision The precision that should be used for floating point numbers
		@returns void
	 */
	this.setPrecision = function(precision){
		this._precision = precision;
		jComp_precisionX = Math.pow(10, precision);
	};
	
	/**
		Get the precision used for floating point numbers
		@returns {Integer} The precision used for floating point numbers
	*/
	this.getPrecision = function(){
		return this._precision;
	};
}

jComp.struct = {};

/** 
	Round a number based on the globally defined precision. See {@link jComp#setPrecision}
	@param {Float} number A floating point number to round
	@returns {Float} The number rounded to the globally defined precision
*/
function $f(number){
	return Math.round(number*jComp_precisionX)/jComp_precisionX;
}