// boolean
let isDone: boolean = false;
console.log(isDone);

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

// string
let color: string = "blue";
color = 'red';
console.log(color);
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
console.log(sentence)

// array
let list: number[] = [1, 2, 3];
console.log(list);
let listMisc: Array<number | string | boolean> = ["this is it", 1, false, 123456, 0xFFAD];
console.log(listMisc);
listMisc.forEach(function (value) {
    console.log(value);
});

// tuple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly - 2 errors
//x = [10, "hello"]; // Error

// enum
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log(c);
enum Color1 {Red = 1, Green = 2, Blue = 4}
let c1: Color1 = Color1.Green;
console.log(c1);

// any
let notSure: any = 4;
notSure = "maybe a string instead";
console.log(notSure);

// void, null, undefined
function warnUser(): void {
    console.log("This is my warning message");
}
warnUser();
let unusable: void = undefined;
unusable = null;
console.log(unusable);
let value: number = 200;
console.log(value);
value = null;
console.log(value);
value = undefined;
console.log(value);

// never
function error(message: string): never {
    throw new Error(message);
}
//error("failed!");

// type assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
// or:
// let strLength: number = (<string>someValue).length;
console.log(someValue);
console.log(strLength);
