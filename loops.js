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