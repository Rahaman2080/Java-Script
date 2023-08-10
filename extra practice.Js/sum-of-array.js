function sumOfArray(arr) {
    if (!Array.isArray(arr)){
      return 'Error: Array is not found.';
    }
  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
        throw new Error("All elements in the array must be numbers.");
      }
      sum += arr[i];
    }
  
    return sum;
  }
  
  // Example usage
  const numbers = [2, 4, 6, 8, 10];
  const totalSum = sumOfArray(numbers);
  console.log("Total sum:", totalSum); // This will output: Total sum: 30
  