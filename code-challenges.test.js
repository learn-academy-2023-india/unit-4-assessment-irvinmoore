// UNIT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly. If you get stuck, please leave comments to help us understand your thought process.

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

//describe("fibonacci", () => {
  //it("returns a Fibonacci sequence array of a given length", () => {
      //const fibonacciLength1 = 6;
      //expect(fibonacci(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8]);

//describe("greeter", () => {
  //it("returns a generic greeting", () => {

    //const fibonacciLength1 = 6

    //describe("Fibonacci Sequence", () => {
      ///it(`should generate a Fibonacci sequence of length ${fibonacciLength1}`, () => {
        //const result = generateFibonacci(fibonacciLength1);
        //expect(result).toEqual([1, 1, 2, 3, 5, 8]);
      //});
    //});
    // Expected output: [1, 1, 2, 3, 5, 8]
    
    //const fibonacciLength2 = 10

    //describe("Fibonacci Sequence", () => {
      //it(`should generate a Fibonacci sequence of length ${fibonacciLength2}`, () => {
        //const result = generateFibonacci(fibonacciLength2);
        //expect(result).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
      //});
    //});
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.
//const fibonacciLength1 = 6;
//const result = generateFibonacci(fibonacciLength1);
//console.log(result);

//function fibonacciLegnth(num) {
  //let num1 = 1;
  //let num2 = 1;
  //let fibArr = [num1, num2];
  //for (let i = 2; i < num; i++) {
    //sum = num1 + num2;
    //num1 = num2;
    //num2 = sum;
    //fibArr.push(sum);
  //}
  //return fibArr;
//}

//const fibonacciLength2 = 10;
//const result = generateFibonacci(fibonacciLength2);
//console.log(result);

// Pseudo code:
// Create a funtion that takes in a number and returns the fibonacci sequence to the length of the input
// Take in a number and add it to the previous input
// Take the sum and add it to the next input.
// Console log the function with .legnth to create the expected output 


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

//const votes1 = { upVotes: 13, downVotes: 2 }

//function calculateTally(votes) {
  //return votes.upVotes - votes.downVotes;
//}

//const votes1 = { upVotes: 13, downVotes: 2 };
//const result = calculateTally(votes1);

//console.log(result); // Output: 11
// Expected output: 11

//const votes2 = { upVotes: 2, downVotes: 33 }

//function calculateTally(votes) {
  //return votes.upVotes - votes.downVotes;
//}

//const votes2 = { upVotes: 2, downVotes: 33 };
//const result2 = calculateTally(votes2);

//console.log(result2); // Output: -31
// Expected output: -31

// b) Create the function that makes the test pass.

// Pseudo code:

// Create a function that subtracts upvotes from downvotes
// Output created is the tally of the two


