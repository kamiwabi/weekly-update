// Named function
// calling before devlaration is OK
console.log(add(2,3));
function add(x, y) {
    return x + y;
}
console.log(add(2,3));

// Anonymous function
// created at runtime, so it can not be used before declaration
//console.log(myAdd(3,6));
let myAdd = function(x, y) { return x + y; };
console.log(myAdd(3,6));
console.log(typeof add);
console.log(typeof myAdd);
console.log(add(2,myAdd(2,1)));
console.log(myAdd(2,add(2,1)));

// type in function
function add2(x: number, y: number): number {
    return x + y;
}

let myAdd2 = function(x: number, y: number): number { return x + y; };
console.log(add2(2,myAdd2(2,1)));
console.log(myAdd2(2,add2(2,1)));

let myAdd3: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x + y; };
console.log(myAdd3(2,add(2,1)));

// contextual typing - type inference
let myAdd4: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y; };
console.log(myAdd4(2,add(2,1)));

// optional param
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}
let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
//let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildName("Bob", "Adams");         // ah, just right
console.log(result1);
console.log(result2);
console.log(result4);

// unknown number of params
function buildName2(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
// employeeName will be "Joseph Samuel Lucas MacKinzie"
let employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
