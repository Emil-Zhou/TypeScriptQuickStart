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
var a = [1, 2, 3, 4];
var ro = a;
