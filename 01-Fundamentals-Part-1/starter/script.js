/* 
let js = "amazing";
if (js === "amazing") alert("Javascript is FUN!");
console.log(40 + 8 + 23 - 10);

console.log("jonas");
console.log(23);

let firstName = "Jonas"

console.log(firstName);
console.log(firstName);
// console.log(firstName);

// Variable name conventions

let jonas_matilda = "3M"
let $function = 27;
let person = 'jonas'
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);
true;
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof 23);
console.log(typeof person);

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);

console.log(typeof null);
*/
// aula 13 em diante
// PATH: D:\2-Sites and resources\GetFreeCourses.Co-Udemy-The Complete JavaScript Course 2022 From Zero to Expert!\02 JavaScript Fundamentals _ Part 1

/*
let age = 30;
age = 31;
const birthYear = 1991;
// birthYear = 1990;

// const job;
var job = 'programmer';
job = 'teacher';

// operator allows to work with values
// arithmetic
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// assignment operators
// let x = 10 + 5;
// x += 10;
// x *= 4
// x++;
// x--;
// x--;
// console.log(x);

// comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

// challenge 1
/*
let marksMass = 78;
let marksHeight = 1.69;
let johnsMass = 92;
let johnsHeight = 1.95;
let marksBMI = marksMass / marksHeight ** 2;
let johnsBMI = johnsMass / johnsHeight ** 2;

let markHigherBMI = marksBMI > johnsBMI;
console.log(marksBMI, johnsBMI)
console.log(markHigherBMI);

if (markHigherBMI)
{
    console.log(`Mark's BMI (${marksBMI}) is higher than john's (${johnsBMI})`);
} else {
    console.log(`John's BMI (${johnsBMI}) is higher than mark's (${marksBMI})`);
}

marksMass = 95;
marksHeight = 1.88;
johnsMass = 85;
johnsHeight = 1.76;
marksBMI = marksMass / marksHeight ** 2;
johnsBMI = johnsMass / johnsHeight ** 2;

markHigherBMI = marksBMI > johnsBMI;
console.log(marksBMI, johnsBMI)
console.log(markHigherBMI);

// challenge 2
if (markHigherBMI)
{
    console.log(`Mark's BMI (${marksBMI}) is higher than john's (${johnsBMI})`);
} else {
    console.log(`John's BMI (${johnsBMI}) is higher than mark's (${marksBMI})`);
}
*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = 'I\'m ' + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`)
console.log('string with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/

/*
const age = 19;

if(age >= 18) {
    console.log('Sarah can start driving license 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;

let century;

if(birthYear <= 2000) {
    let century = 20;
} else {
    let century = 21;
}

console.log(century);
*/

/*

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 10);
console.log(Number('Jonas'));
console.log(typeof Nan);
console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

// 5 falsy values: 0, '', undefined, null, NaN

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height;
if (height)
{
    console.log('Yay! height is defined');
} else {
    console.log('Height is UNDEFINED');
}
*/

/*
const age = '18';
// use triple equals whenever possible
if(age === 18) console.log('You just became an adult :D');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23){
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7');
}

if(favourite !== 23) console.log('Why not 23?');
*/
/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}
*/
// console.log(hasDriversLicense && hasGoodVision && isTired);
/*
let dolphinsScore = (96 + 108 + 89) / 3;
let koalasScore = (88 + 91 + 110) / 3;
console.log(dolphinsScore, koalasScore);

if (dolphinsScore >= 100 && dolphinsScore > koalasScore)
{
    console.log(`dolphins wins! - score: ${dolphinsScore}`);  
} else if (koalasScore >= 100 && koalasScore > dolphinsScore) {
    console.log(`koalas wins! - score: ${koalasScore}`);
} else if (koalasScore == dolphinsScore) {
    console.log(`the scores are equal, It's a tie!`)
}
else{
    console.log('the minimum score is 100');
}

dolphinsScore = (97 + 112 + 101) / 3;
koalasScore = (109 + 95 + 123) / 3;
console.log(dolphinsScore, koalasScore);

if (dolphinsScore >= 100 && dolphinsScore > koalasScore)
{
    console.log(`dolphins wins! - score: ${dolphinsScore}`);  
} else if (koalasScore >= 100 && koalasScore > dolphinsScore) {
    console.log(`koalas wins! - score: ${koalasScore}`);
} else if (koalasScore == dolphinsScore) {
    console.log(`the scores are equal, It's a tie!`)
}
else{
    console.log('the minimum score is 100');
}
dolphinsScore = (97 + 112 + 101) / 3;
koalasScore = (109 + 95 + 106) / 3;
console.log(dolphinsScore, koalasScore);

if (dolphinsScore >= 100 && dolphinsScore > koalasScore)
{
    console.log(`dolphins wins! - score: ${dolphinsScore}`);  
} else if (koalasScore >= 100 && koalasScore > dolphinsScore) {
    console.log(`koalas wins! - score: ${koalasScore}`);
} else if (koalasScore == dolphinsScore) {
    console.log(`the scores are equal, It's a tie!`)
}
else{
    console.log('the minimum score is 100');
}
*/
// switch statement

/*
const day = 'friday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if(day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday')
{
    console.log('write code examples');
} else if (day === 'friday')
{
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday')
{
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}
*/

/*
3 + 4 // expression
1991 // expression
true && false && !false // expression

if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷'):

console.log('I like to drink water 🚰')
const drink = age >= 18 ? 'wine 🍷' : 'water 🚰';

console.log(`I like to drink ${drink}`);
*/

// coding challenge #4

let bill = 275;
let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2; 
console.log(`bill value: ${bill}.\ntip:${tip}.\ntotal:${bill + tip}.`);

bill = 40;
tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(`bill value: ${bill}.\ntip:${tip}.\ntotal:${bill + tip}.`);

bill = 430;
tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(`bill value: ${bill}.\ntip:${tip}.\ntotal:${bill + tip}.`);