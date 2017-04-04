function fizzBuzz(num) {
    var result = [];
    
    
    for(var i = 1; i < num; i++) {
        switch (i % 15) {
            case 0:    
              result.push('FizzBuzz');
              break;
            case 5:
            case 10:
              result.push('Buzz');
              break;
            case 3:
            case 6:
            case 9:
            case 12:
              result.push('Fizz');
              break;
            default:
              result.push(i);
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

//var nums = getNums(17);
var result = fizzBuzz(32);

console.log(result);