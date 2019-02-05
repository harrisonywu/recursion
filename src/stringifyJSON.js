// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


//Methodology
// obj keys must have quotes around them
// obj properties seperated by comma, the space after is now gone (not sure if this matters)
// different types of objects need to be treated differently
//     ex: if Array.isArray(obj) is true, just start with '[' + ____ + ']';
// read the slides: might be useful
// probably need to use 'this' here and there

//key things
// what are all possible values we need to turn to string, and what do each return?
// values: number, object, string, null, undefined, Infinity, boolean, NaN
//    'null' when: null, undefined, Infinity, NaN
	  
// native JS has object.toString() & Array.toString()
//   note: Number.toString() doesn't work 
// should behave differently given the input is a number, string, array, or object

//JSON.stringify takes either an object or an array
//JSON.stringify exceptions: dates and functions




var stringifyJSON = function(obj) {
	if (typeof obj === 'function') {
		return null;
	} else if (typeof obj === 'undefined') {
		return null;
	} else if (obj === null /*|| typeof obj === 'Infinity' || typeof obj === 'NaN'*/) {
		return 'null';
	} else if (typeof obj === 'string') {
		return '\"' + obj + '\"';
	} else if (typeof obj === 'number') {
		return obj.toString();
	} else if (typeof obj === 'boolean') {
		if (obj === true) {
			return 'true';
		} else if (obj === false) {
			return 'false';
		}
	} else if (Array.isArray(obj)===true) {
		// return '[' + 'FILL_ME_IN';
		return '[' +
     	obj.map(function(arrayObj) {
        	return stringifyJSON(arrayObj)}).join(",")
        + ']';
	} else if (typeof obj === 'object') {
		var result = [];
    	Object.keys(obj).forEach(function(key) {
     		var propValue = stringifyJSON(obj[key]);
      		if (propValue !== null) {
       	 		result.push('"' + key + '":' + propValue);
      		}
    	});
    	return '{' + result.join(',') + '}';
	}

		// if (Array.isArray(obj)) {
		// 	// our object is an array
		// } else {
		// 	// our object is an object, but not an array
		// 	var firstKey = ;
		// 	var firstValue = ;
		// 	delete obj[firstKey];
		// 		return  + stringifyJSON(obj);
			
   

};
