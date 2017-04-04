// Create a hazardWarningCreator function which takes one argument typeOfWarning
// Inside the function, create a warningCounter variable that initializes at 0
// Would a number variable expected to change be let or const?
// Return an anonymous function, which takes one argument location
// Inside the inner function:
// Increment warningCounter
// Answer out loud: Why does the inner function have access to warningCounter? Because of s---- c----
// Log out: "DANGER! There is a ${typeOfWarning} hazard at ${location}!"
// Log out the message: "The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!"
// Remember: string interpolation above requires a special character, not ' or "
// Now let's invoke hazardWarningCreator three times, catching the returned function in separate variables, such as:
// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// (you create two more of your choice)
// Finally, invoke each of your newly created hazard warning closures several times for each warning, remembering to pass in a location:
// rocksWarning('Main St and Pacific Ave');
// // => DANGER There is a Rocks on the Road hazard at Main St and Pacific Ave
// The Rocks on the Road hazard has triggered 1 time(s) today!
// The Rocks on the Road hazard has triggered 2 time(s) today!
// The Rocks on the Road hazard has triggered 3 time(s) today!
let warningCounter = 0; 
var time = 'times';

function hazardWarningCreator(typeOfWarning){

	return function(location){
		console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
		if(warningCounter === 1) {
  	  		time = 'time';
    	} 
    	else{
    		time = "times";
    	}
    	console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${time} today!`);   
    	warningCounter++; 
	}

}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const slipperyWarning = hazardWarningCreator('Rocks on the Road');
const waterWarning = hazardWarningCreator("Water levels are high");

rocksWarning("first street");
slipperyWarning("second street");
waterWarning("third street");