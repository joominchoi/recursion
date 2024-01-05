function fibs(n) {
  myArray = [0, 1];
  
  for (let i = 2; i < n; i++) {
      const lastTwoNumbers = myArray.slice(-2);
      const sumOfLastTwo = lastTwoNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      myArray.push(sumOfLastTwo);
  }
  
  return myArray;
}

function fibsRec(n) {
  if (n <= 0) {
      console.log("Invalid input. Please provide a positive integer for Fibonacci sequence.");
      return ["Please don't attempt to break me"];
  } else if (n === 1) {
      return [0];
  } else if (n === 2) {
      return [0, 1];
  } else {
      const prevSequence = fibsRec(n - 1);
      const lastTwoNumbers = [prevSequence[prevSequence.length - 2], prevSequence[prevSequence.length - 1]];
      const sumOfLastTwo = lastTwoNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      return [...prevSequence, sumOfLastTwo];
  }
}

console.log(fibs(5))
console.log(fibsRec(10))