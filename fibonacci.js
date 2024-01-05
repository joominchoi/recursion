function fibs(n) {
  myArray = [0, 1];
  
  for (let i = 2; i < n; i++) {
      const lastTwoNumbers = myArray.slice(-2);
      const sumOfLastTwo = lastTwoNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      myArray.push(sumOfLastTwo);
  }
  
  return myArray;
}

console.log(fibs(6))