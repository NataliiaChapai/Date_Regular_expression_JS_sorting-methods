// const
const year2020 = 2020;
const year2004 = 2004;
const year2006 = 2006;
const year2000 = 2000;
const month9 = 9;
const month12 = 12;
const date22 = 22;
const date29 = 29;
const ms = 1000;
const s = 60;
const m = 60;
const h = 24;
const age18 = 18;
const age17 = 17;
const minus1 = -1;
const passwordLength = 8;
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const seven = 7;
const nine = 9;

const birthday17 = new Date(year2004, month12, date29);
const birthday15 = new Date(year2006, month12, date29);
const birthday22 = new Date(year2000, month9, date22);
const elementP = 'tag="p" class="text" style={color: #aeaeae;} value="Aloha!"';
const elementDiv = 'tag="div" class="main" style={width: 50%;} value="Hello World!"';
const testStr = 'My name is John Smith. I am 27.';
const inventory = [
{ name: 'milk', brand: 'happyCow', price: 2.1 },
{ name: 'chocolate', brand: 'milka', price: 3 },
{ name: 'beer', brand: 'hineken', price: 2.2 },
{ name: 'soda', brand: 'coca-cola', price: 1 }
];

//  #1
function getWeekDay(data) {
    const date = new Date(data);
    const weekday = date.toLocaleString('en-us', {weekday: 'long'});
    return weekday;
}
console.log(getWeekDay(Date.now())); // "Thursday" (if today is the 12nd May)
console.log(getWeekDay(new Date(year2020, month9, date22))); // "Thursday"

//  #2
function getAmountDaysToNewYear() {
    const now = Date.now();
    const newYear = new Date(new Date().getFullYear() + 1, 0, 1).getTime();
    const dayBetween = Math.floor((newYear - now) / ms / s / m / h);
    return dayBetween;
}

console.log(getAmountDaysToNewYear());

//  #3
function getApproveToPass(birthday) {

    const now = new Date();
    const birthyYear = birthday.getFullYear();
    const birthMonth = birthday.getMonth();
    const birthDay = birthday.getDate();
    let age = now.getFullYear() - birthyYear;
    
    if (birthMonth > now.getMonth() || birthMonth === now.getMonth() && birthDay > now.getDate()) {
        age -= 1;
    }
    if (age >= age18) {
        return 'Hello adventurer, you may pass!'
    } else if (age >= age17 && age < age18) {
        return 'Hello adventurer, you are to yang for this quest wait for few more months';
    } else {
        const left = age18 - age;
        return `Hello adventurer, you are to yang for this quest wait for ${left} years more`
    }
}
console.log(getApproveToPass(birthday17)); //Hello adventurer, you are to yang for this quest wait for few more months!
console.log(getApproveToPass(birthday15)); //Hello adventurer, you are to yang for this quest wait for 3 years more!
console.log(getApproveToPass(birthday22)); //Hello adventurer, you may pass!

//  #4]

 
function transformStringToHtml(str) {
    let newStr = str.replace(/{|}/g, '"');
    const tag = newStr.match(new RegExp('(?<=tag=")[^"]+(?=")', 'g'));  
    const value = newStr.match(new RegExp('(?<=value=")[^"]+(?=")', 'g'));  
    const attributes = newStr.replace(/(tag=".*?")/g, '').replace(/(value=".*?")/g, '').trim();  
    newStr = `<${tag} ${attributes}>${value}</${tag}>`;
    return newStr;
}  
console.log(transformStringToHtml(elementP));
console.log(transformStringToHtml(elementDiv));

//  #5
function isValidIdentifier(str) {
    const regex = /^\D(\w|\$)+$/;
    if (str.search(regex) !== minus1) {
    return true;
    }
return false;
}
console.log(isValidIdentifier('myVar!')); // false
console.log(isValidIdentifier('myVar$')); // true
console.log(isValidIdentifier('myVar_1')); // true
console.log(isValidIdentifier('1_myVar')); // false

//  #6
function capitalize(str) {
    let newString = str.replace(/\b\w/g, c => c.toUpperCase());
    return newString;
}
console.log(capitalize(testStr));

//  #7
function isValidPassword(password) {
    if (password.search(/[A-Z]/) === minus1) {
        return 'false (no uppercase letter)';
    }
    if (password.search(/[a-z]/) === minus1) {
        return 'false (no lowercase letter)';
    }
    if (password.search(/[0-9]/) === minus1) {
        return 'false (no numbers)';
    }
    if (password.length < passwordLength) {
        return 'false (too short)';
    }
    return true;
}
console.log(isValidPassword('agent007')); // false (no uppercase letter)
console.log(isValidPassword('AGENT007')); // false (no lowercase letter) 
console.log(isValidPassword('AgentOOO')); // false (no numbers)
console.log(isValidPassword('Age_007')); // false (too short)
console.log(isValidPassword('Agent007')); // true

//  #8
function bubbleSort(array) {
    let replaceEl;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                replaceEl = array[j];
                array[j] = array[j + 1];
                array[j + 1] = replaceEl;
            }
        }
    }
    return array;
}
console.log(bubbleSort([seven, five, two, four, three, nine])); //[2, 3, 4, 5, 7, 9]

//  #9
function sortByItem({item, array}) {
    array.sort((a, b) => a[item].toString().localeCompare(b[item]).toString())
    return array;
}
console.log(sortByItem({item: 'name', array: inventory})); // will return
//[{ "name": "beer", "brand": "hineken", "price": 2.2 },
//{ "name": "chocolate", "brand": "milka", "price": 3 },
//{ "name": "milk", "brand": "happyCow", "price": 2.1 },
//{ "name": "soda", "brand": "coca-cola", "price": 1 }]