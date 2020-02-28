class Animal {
    private name: string;
    // atau:
    //#name: string;
    constructor(theName: string) { this.name = theName; }
}

//new Animal("Cat").#name; // Error: 'name' is private;
// atau
new Animal("Cat").name;