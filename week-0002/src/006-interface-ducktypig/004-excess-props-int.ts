interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

let mySquare: SquareConfig = { col: "blue", w: 20, prop1: "okay", prop2: 1 };

console.log(mySquare);