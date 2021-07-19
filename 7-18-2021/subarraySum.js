/*  
	Given an unsorted array of integers and a number n, find the number of 
	continuous subarrays having sum exactly equal n. Return -1 if none exist.
	
	$ subarraySum([10 , 2, -2, -20, 10], -10)
	$ 3 // arr[0...3], arr[1...4], arr[3...4]
*/

const subarraySum = (inputArr, inputSum) => {
  let numArrays = 0;	// stores number of subarrays summing to inputSum

  // outer loop to iterate over input array
  for(let i = 0; i < inputArr.length; i++) {
    let sum = 0;
    
    for(let j = i; j < inputArr.length; j++) {
      // inner loop to traverse array and find sum starting from i-th index
      sum += inputArr[j];
      if(sum === inputSum) numArrays++;
    }
  }

  return numArrays > 0 ? numArrays : -1;
};
