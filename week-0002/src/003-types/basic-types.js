// boolean
var isDone = false;
console.log(isDone);
// number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
// string
var color = "blue";
color = 'red';
console.log(color);
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
// array
var list = [1, 2, 3];
console.log(list);
var listMisc = ["this is it", 1, false, 123456, 0xFFAD];
console.log(listMisc);
listMisc.forEach(function (value) {
    console.log(value);
});
// tuple
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly - 2 errors
//x = [10, "hello"]; // Error
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 4] = "Blue";
})(Color1 || (Color1 = {}));
var c1 = Color1.Green;
console.log(c1);
// any
var notSure = 4;
notSure = "maybe a string instead";
console.log(notSure);
// void, null, undefined
function warnUser() {
    console.log("This is my warning message");
}
warnUser();
var unusable = undefined;
unusable = null;
console.log(unusable);
var value = 200;
console.log(value);
value = null;
console.log(value);
value = undefined;
console.log(value);
// never
function error(message) {
    throw new Error(message);
}
//error("failed!");
// type assertions
var someValue = "this is a string";
var strLength = someValue.length;
// or:
// let strLength: number = (<string>someValue).length;
console.log(someValue);
console.log(strLength);
