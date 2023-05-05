'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const private = 534;

/*
function logger(){
    console.log('My name is Jonas');
}

// calling, running or invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

// function declaration

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// function expression

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);
*/
/*
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/
/*
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));
*/

/*
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    // return `${firstName} retires in ${retirement} years`;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


const checkWinner = (avgDolphinsScore, avgKoalasScore) => {
    if (avgDolphinsScore > avgKoalasScore * 2)
    {
    console.log(`dolphins wins! - score: ${avgDolphinsScore} vs ${avgKoalasScore}`);  
    } else if (avgKoalasScore > avgDolphinsScore * 2) {
        console.log(`koalas wins! - score: ${avgDolphinsScore} vs ${avgKoalasScore}`);
    } else{
        console.log('No team wins');
    }
}

let dolphinsScore = calcAverage(44, 23, 71);
let koalasScore = calcAverage(65, 54, 49);
console.log(dolphinsScore, koalasScore);
console.log(checkWinner(dolphinsScore, koalasScore));

dolphinsScore = calcAverage(85, 54, 41);
koalasScore = calcAverage(23, 34, 27);
console.log(dolphinsScore, koalasScore);
console.log(checkWinner(dolphinsScore, koalasScore));

checkWinner(576, 111);
*/
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']
const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991,
'teacher', friends];
console.log(jonas);
console.log(jonas.length);
*/

/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

const friends = ['Michael', 'Steven', 'Peter'];

const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if(friends.includes('Peter')){
    console.log('You have a friend called Peter');
}


let calcTip = (bill) => (bill >= 50 && bill <= 300) ? 0.15 * bill : 0.2 * bill;
let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let total = bills.map(function (num, idx) {
    return num + tips[idx];
});

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        return 2037 - birthYear;
    }
};
*/

/*
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstname, lastName, age, job and friends');
console.log(jonas.interestedIn);
console.log(jonas[interestedIn]);

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)
console.log(jonas.calcAge(1991));
console.log(jonas['calcAge'](1991));
*/

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    
    // calcAge: function() {
        //     console.log(this);
        //     return 2037 - this.birthYear;
        // }
        
    // calcAge: function() {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${jonas.firstName} is a ${jonas.age}-year old teacher, and he has ${jonas.hasDriversLicense ? "a" : "not a"} driver's license`;
    }
};
    
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());


// Coding Challenge #3

let mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
        
}

let john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI()
john.calcBMI()

console.log(mark.bmi, john.bmi)
let higherBMI = mark.bmi > john.bmi ? `${mark.fullName}'s BMI (${mark.bmi}) is bigger than John's` : `${john.fullName}'s BMI (${john.bmi}) is bigger than Mark's`;

console.log(higherBMI);

// lessons 46 and on

// FOLDER: D:\2-Sites and resources\GetFreeCourses.Co-Udemy-The Complete JavaScript Course 2022 From Zero to Expert!\03 JavaScript Fundamentals _ Part 2

for(let rep = 1; rep <= 10; rep++)
{
    console.log('Lifting weights repetition ' + rep + '🏋️');
}

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

//Jonas[5] does NOT exist
const types = [];

for(let i = 0; i < jonasArray.length; i++) {
    // console.log(jonasArray[i], typeof jonasArray[i]);
    if(typeof jonas[i] !== 'string') continue;
    // filling types array
    types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i])
}

console.log(ages);
*/

/*

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for(let i = jonas.length - 1; i >= 0; i--){
    console.log(i, jonas[i]);
}

for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`------- Starting exercise ${exercise}`)

    for(let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep} 🏋️`);

    }
}

let rep = 1;

while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep} 🏋️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}

*/

let calcTip = (bill) => (bill >= 50 && bill <= 300) ? 0.15 * bill : 0.2 * bill;

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for(let i = 0; i < bills.length; i++)
{
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
}

console.log(bills, tips, totals);

function calcAverage(arr)
{
    let sum = 0;
    for(let i=0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));

// FOLDER:
// D:\2-Sites and resources\GetFreeCourses.Co-Udemy-The Complete JavaScript Course 2022 From Zero to Expert!\05 Developer Skills & Editor Setup