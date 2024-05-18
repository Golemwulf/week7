// Step 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//     Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//          Do not use numbers to reference the last element, find it programmatically.
//          ages[7] - ages[0] is not allowed!
//     Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//     Use a loop to iterate through the array and calculate the average age.
// --------------------------------------------------------------------------------------------------------------------------
console.log('Question 1.');
// ----------------------------------------------------------------------------------------------------------------------

//          0  1  2   3   4  5   6   7  
let ages = [3, 9, 23, 64, 2, 8, 28, 93,];
console.log(ages[ages.length-1] - ages[0]);
console.log(ages.push(9));


function averageArray(array) {
let sum = 0;
for(let i = 0; i < array.length; i++){
    console.log(array[i])
//    sum = sum + array[i]
      sum += array[i]
}
return sum/array.length;
}

console.log(averageArray(ages))

// ----------------------------------------------------------------------------------------------------------------------
// Step 2.Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//      Use a loop to iterate through the array and calculate the average number of letters per name.
//      Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
console.log('Question 2.');
// ----------------------------------------------------------------------------------------------------------------------

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

function averageNumberOfLetters (){
let count = 0;
for (let i = 0; i <= names.length; i++){
count++;
}
return count;}
console.log(averageNumberOfLetters (names));

function concatNames (array){
    for (let i = 0; i <= names.length; i++){
        return array.join(" ");
    }
}console.log(concatNames(names))


// //----------------------------------------------------------------------------------------------------------------------
// 3. How do you access the last element of any array?
console.log('Question 3.');

console.log(`answer: console.log("array.length-1")`);

// -----------------------------------------------------------------------------------------------------------
// 4. How do you access the first element of any array?
console.log('Question 4.');


console.log(`answer: array[0]`)

// ----------------------------------------------------------------------------------------------------------------------

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array
console.log('Question 5.');
// ----------------------------------------------------------------------------------------------------------------------

// using the map method allowed me to simplify the function to one line of code followed by a console.log. The map method automatically loops through the whole array and creates a new one based on the parameters set. 

const nameLengths = names.map(name => name.length);
console.log(nameLengths)
// ----------------------------------------------------------------------------------------------------------------------
// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
console.log('Question 6.');
// ----------------------------------------------------------------------------------------------------------------------
// Using the reduce method allowed me to convert the array into one single number based on the parameters that were set. In this case, I told it to add the nameLengths values into one sum. 

const nameLengthsSum = nameLengths.reduce((a, b) => a + b, 0);
console.log(names);
console.log(nameLengthsSum);


// ----------------------------------------------------------------------------------------------------------------------
// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
console.log('Question 7.');
// ----------------------------------------------------------------------------------------------------------------------

const saySomething = (word, n) => {
    // the repeat(n) method allows me to print the word as many times as I want based on the argument. 

   return `${word.repeat(n)}`;
}
console.log(saySomething('Hello ', 3)
)

// ----------------------------------------------------------------------------------------------------------------------
// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
console.log('Question 8.');
// ----------------------------------------------------------------------------------------------------------------------

//I used a simple fat arrow function for this one and opted to use template literal for the return  to save typing and make it easier to read. 


    let fullName = (firstName, lastName) =>{
        return `${firstName} ${lastName}`; 
    }
    console.log(fullName('Tim', "Adams"));


// ----------------------------------------------------------------------------------------------------------------------

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
console.log('Question 9.');
// ----------------------------------------------------------------------------------------------------------------------

// I built on the solution for question 6 to find the sum. Then I created a standard if/else statement to determine if the sum was greater than 100. 

const sumTotal = [12,60,59,82].reduce((a, b) => a + b, 0);
if (sumTotal > 100){
    console.log(true);
}   else{
    console.log("false");
}
console.log(sumTotal);



// ----------------------------------------------------------------------------------------------------------------------

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log('Question 10.');
// ----------------------------------------------------------------------------------------------------------------------

// I used the reduce method again to find the sum, but I was also able to divide by the length of the array on the same line. This allowed me to calculate the average. 

const average = (array) => array.reduce((a, b) => a + b, 0) / array.length;
    console.log(ages);
    console.log(average(ages));
// ----------------------------------------------------------------------------------------------------------------------


// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
console.log('Question 11.');
// ----------------------------------------------------------------------------------------------------------------------

// building from the previous question, I set up the arrays, then created an if/else statement using the arrays as arguments.

const array1 = [12,25,86,42];
const array2 = [7,28,63,24]; 
const avg = (array) => array.reduce((a, b) => a + b, 0) / array.length;
if(avg(array1) > avg(array2)){
    console.log(true);
}else{
    console.log(false);
}
console.log(array1)



// ----------------------------------------------------------------------------------------------------------------------

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
console.log('Question 12.');
// ----------------------------------------------------------------------------------------------------------------------

// This one was a simple fat arrow function that uses an if/else statement.

let willBuyDrink = (isHotOutside, moneyInPocket) =>{
    if(isHotOutside === true && moneyInPocket > 10.50){
        return "Buy drink";
    }else{
        return "Do not buy drink";
    }
}
console.log(willBuyDrink(true, 50));

// ----------------------------------------------------------------------------------------------------------------------
// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
console.log('Question 13.');
// ----------------------------------------------------------------------------------------------------------------------

// I wanted to make a function to determine if it is worth going to see a movie in theaters based on three parameters: if the reviews were positive, if the movie was less than 120minutes long, and I had the money for the ticket. 

const willWatchMovie = (positiveReviews, runTime, haveMoney) => {
    // I decided an if/else conditional would be the best option for this task
    if (positiveReviews === true && runTime <= 120 && haveMoney === true){
        console.log(`I will go see this movie`)
    }else{
        console.log(`I won't see this movie`)
    }
}
//Here are the arguments being added to determine the final result                      
console.log(willWatchMovie(true,120,true))

// ----------------------------------------------------------------------------------------------------------------------

