var isDate = function (input) {
  //   write your code here
	f (input instanceof Date) {
    // If the input is already a Date object, return true
    return !isNaN(input.getTime());
  } else if (typeof input === 'string' || typeof input === 'number') {
    // If the input is a string or a number, try parsing it into a Date object
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime());
  } else {
    // If the input is neither a Date, string, nor number, return false
    return false;
		
  }
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
