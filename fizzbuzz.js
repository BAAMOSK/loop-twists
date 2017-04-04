function fizzBuzz(num) {
    var result = [];
    
    for(var i = 1; i < num.length; i++) {
        switch (i >= 0) {
            case (num[i] % 15 === 0):    
              result.push('FizzBuzz');
              break;
            case (num[i] % 5 === 0):
              result.push('Buzz');
              break;
            case (num[i] % 3 === 0):
              result.push('Fizz');
              break;
            default:
              result.push(num[i]);
        }    
    }
    return result;
}

//function fizzBuzz(num) {
//    for(var i = 0; i < num.length; i++) {
//        if(num[i] % 15 === 0) {
//            console.log(`FizzBuzz`);
//        } else if(num[i] % 5 === 0) {
//            console.log(`Buzz`);
//        } else if(num[i] % 3 === 0) {
//            console.log(`Fizz`);
//        } else {
//            console.log(num[i]);
//        }
//    }
//}

function getNums(maxNumber) {
    var result = [];
    for(var i = 0; i < maxNumber; i++) {
        result.push(i);
    }
    return result;
}

var nums = getNums(17);
var result = fizzBuzz(nums);

console.log(result);