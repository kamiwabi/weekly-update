function identity(arg) {
    return arg;
}
var output = identity("myString"); // type of output will be 'string'
console.log(output);
var outputNumber = identity(10);
console.log(outputNumber);
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
var outputLogging = loggingIdentity([1, 2, 3, 4]);
console.log(outputLogging);
function identities(arg1, arg2) {
    return [arg1, arg2];
}
console.log(identities("first", "second"));
