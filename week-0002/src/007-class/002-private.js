var Animal = /** @class */ (function () {
    // atau:
    //#name: string;
    function Animal(theName) {
        this.name = theName;
    }
    return Animal;
}());
//new Animal("Cat").#name; // Error: 'name' is private;
// atau
new Animal("Cat").name;
