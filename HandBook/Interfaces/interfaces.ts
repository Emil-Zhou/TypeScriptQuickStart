// interface LabelledValue {
//   label: string;
// }

// function printLabel(labelledObj: LabelledValue) {
//   console.log(labelledObj.label);
// }

// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);

// //==============================================

// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): {color: string; area: number} {
//   let newSquare = {color: "white", area: 100};
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({color: "black"});

// //=====================================

// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = {color: "white", area: 100};
//   if (config.color) {
//     // Error: Property 'clor' does not exist on type 'SquareConfig'
//     newSquare.color = config.clor;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({color: "black"});

// //==================

// interface Point {
//   readonly x: number;
//   readonly y: number;
// }

// let p1: Point = { x: 10, y: 20 };
// p1.x = 5;// error readonly

// // //================
// let a: number[] = [1, 2, 3, 4];

// let ro: ReadonlyArray<number> = a;

// ro[0]=12;//error
// ro.push(5);//error
// ro.length=100;//error
// a=ro;//error
// a = ro as number[];


// //===========

// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = { color: "white", area: 100 };
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({ colour: "black", width: 100 } );
// let mySquare1= createSquare({colour:"black", width:100} as SquareConfig);
// let mySquare2 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

// interface SquareConfig {
//   color?: string;
//   width?: number;
//   [propName: string]: any;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = {color: "white", area: 100};
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({color: "black"});
// // error: 'colour' not expected in type 'SquareConfig'
// let mySquare1 = createSquare({ colour: "red", width: 100 });
// let mySquare2 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

// let squareOptions = { colour: "red", width: 100 };
// let mySquare3 = createSquare(squareOptions);

// // ================ Function Types

// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;
// mySearch = function (source: string, subString: string) {
//   let result = source.search(subString);
//   return result > -1;
// }

// let mySearch1: SearchFunc
// mySearch1 = function (src: string, sub: string): boolean {
//   let result = src.search(sub);
//   return result > -1;
// }

// let mySearch2: SearchFunc;
// mySearch2 = function(src, sub) {
//     let result = src.search(sub);
//     return result > -1;
// }

//============== Indexable Type
interface StringArray {
  [index: number]: string
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];

class Animal {
  name: string;
}

class Dog extends Animal {
  breed: string;
}

interface NumberDictionary {
  [index: string]: number;
  length: number;
  name: string;// error :??? 
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!