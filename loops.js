 let largest = numbers[0];
  var counter = numbers.length;
  
  while(counter) {
    if(numbers[counter] > largest) {
      largest = numbers[counter];
    }    
    counter--;
  }
  return largest;

function min(numbers) {
 let smallest = numbers[0];
 let i = numbers.length;
   while(i) {
     if(numbers[i] < smallest){
       smallest = numbers[i];
        
     }
     i--;
   }
  return smallest;
}

//Compute the average
function average(numbers) {
  let i = 0;
  let counter = numbers.length;
  let total = 0;
  
  while(counter > i){
    total = total + numbers[i];
    i++;
  }
  return (total / counter);
}

function average(numbers) {
  let sum = 0;
  numbers.forEach(i => sum += i);
  return sum / numbers.length;    
}

var nums = [1,2,3,4,5,6,7,8,9,10];
average(nums);




