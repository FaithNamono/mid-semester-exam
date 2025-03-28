// Function to find the sum of all even numbers in an array
function sumOfEvens(arr) {
    let sum = 0;
    for (let num of arr) {
      if (num % 2 === 0) sum += num;
    }
    return sum;
  }
  console.log(sumOfEvens([1,2,3,4,7,8])) // answer is 14