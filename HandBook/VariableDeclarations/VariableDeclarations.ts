// var declarations
var a =10;

// function f(){
//     var message = "Hello, world!";
    
//     return message;
// }

//===========
// function f() {
//     var a = 10;
//     return function g() {
//         var b = a + 1;
//         return b;
//     }
// }

// var g = f();
// g(); // returns 11;

//=========
// function f() {
//     var a = 1;

//     a = 2;
//     var b = g();
//     a = 3;

//     return b;

//     function g() {
//         return a;
//     }
// }

// f(); // returns 2

//=========
// function f(shouldInitialize: boolean) {
//     if (shouldInitialize) {
//         var x = 10;
//     }

//     return x;
// }

// f(true);  // returns '10'
// f(false); // returns 'undefined'

//========
// function sumMatrix(matrix: number[][]) {
//     var sum = 0;
//     for (var i = 0; i < matrix.length; i++) {
//         var currentRow = matrix[i];
//         for (var i = 0; i < currentRow.length; i++) {
//             sum += currentRow[i];
//         }
//     }

//     return sum;
// }

//===========
// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 100 * i);
// }

// for (var i = 0; i < 10; i++) {
//    // capture the current state of 'i'
//    // by invoking a function with its current value
//     (function (i) {
//         setTimeout(function () { console.log(i); }, 100 * i);
//     })(i);
// }