//Let's write our own version of the filter function which is used to create a new array from an old array, selecting specific elements. We want the usage to be:
//
//// Return only names that begin with 'R'

//console.log(filteredNames) // => ['Rich', 'Ray']
//Create a function called filter, which takes two arguments:
//First argument is an array: arr
//Second argument is a function: fn
//This function exists to return a new array, so create a newArray initialized to [];
//Now start a loop through the arr passed in
//Inside the loop:
//Write an if statement that checks if invoking the fn function while passing in the current element of arr returns true
//If it does, then push the current element of arr into our newArray
//Finally, outside the loop, we return newArray
//Try calling your filter function using the myNames array above and test that it works
//Bonus credit! Can you invoke the filter function and immediately log the result using a single line of code and arrow functions?


const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray', 'TK', 'Tee'];
var filterResult = myNames.filter(names => names[0] === "T");
console.log(filterResult);

//var yolo = function(arr, fn) {
//    var result = [];
//    
//    for(var i = 0; i < arr.length; i++) {
//        if(fn(arr[i])) {
//            result.push(arr[i]);
//        }
//    }
//     result;
//};
//
//const filteredNames = yolo(myNames, function(name){
//   return name[0] === 'R';
//});

//console.log(filteredNames);













