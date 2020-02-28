function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");  // type of output will be 'string'

console.log(output);

let outputNumber = identity<number>(10);

console.log(outputNumber);

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

let outputLogging = loggingIdentity<Number>([1, 2, 3, 4]);
console.log(outputLogging);

function identities<T, U> (arg1: T, arg2: U): [T, U] {
    return [arg1, arg2];
 }

console.log(identities<String, String>("first", "second"));
