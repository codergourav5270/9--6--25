// for (let gh = 1; gh <= 5; gh++) {
//     console.log(gh);
// }

// console.log("loop has ended");


// let sum = 0;
// let n = 100;
// for (let i = 1; i<=n; i++) {
//     sum = sum + i;
// }

// console.log(sum);


// let str = "gourav"

// let size = 0;
// for (let i of str) {
//     console.log(i);
//     size++;
// }
// console.log(size);
// for (i = 0; i <= 100; i++) {
//     if (i%2==0) {
//         console.log( i)
//     }
// }

// let number = 25;
// let Guess = prompt("guess the no.");
// while (Guess!=number) {
//     Guess = prompt("wrong guess, try again");
// }
// console.log("congrats u are really fire");

// "Path: C:\\Users\\Gourav"

// let a=10;
// let b=20;

// console.log(`sum=${a+b}`);

// let FullName = prompt("enter your full name without spaces");
// let UserName="@"+ FullName+ FullName.length;
// console.log(UserName);

// let marks = [20,30,40,50,60,70,80];

// for(i=0; i<marks.length; i++) {
//     console.log(marks[i]);
// }
// // console.log(marks);

// let marks = [85, 97,44, 37,76, 60];
// let sum=0;
// for(i=0; i<marks.length; i++) {
//     sum=sum+marks[i];
// }
// let avr = sum / marks.length;
// console.log(sum);
// console.log(avr);

// let price = [250,645,300, 900, 50];

// let i = 0;
// for(let val of price) {
//     console.log(`value of ${i}=${val}`);
//     let offer = val / 10;
//     price[i] = price[i] - offer;
//     console.log(`value of new price is ${price[i]}`)
//     i++;
// }

// let price = [250,645,300, 900, 50];

// for(i=0; i<price.length; i++){
//     let offer = price[i] / 10;
//     price[i] = price[i]-offer;
// }
// console.log(`the discount is ${price}`);

// let i = [3,5,3,2,4,5];
// i.push(9,1,9,1,9,1);
// let arr = [1, 2, 3];
// console.log(arr);
// console.log(arr.toString());

// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);
// arr.splice(3, 2, 101, 102, 103);
// console.log(arr);

// function sum(x, y) {
//     s = x+y;
//     return s;
// }

// let val = sum(3,6);
// console.log(val);


// const obj = {
//   name: "Gourav",
//   normal: function(){ console.log(this.name); }, // Gourav
//   arrow: () => console.log(this.name) // undefined (outer scope)
// };
// obj.normal(); 
// obj.arrow();


// function countvowels(str) { 
//     let count = 0;
//     for(const i of str) {
//         if( 
//             i==="a" ||i==="e" ||i==="i" ||i==="o" ||i==="u"
//    ) {
//             count++;
//         }
//     }
//     console.log(count);
// }
// ---------------------------------------------------------------------------------------------------------------

// let square = n => n*n;
// console.log(square(4));                            //for finding square 

// --------------------------------------------------------------------------------------------------------------------
// let i=Number(prompt("enter the value"));
// let add = n => n+n;
// console.log(add(i));                                    //for something add

// ---------------------------------------------------------------------------------------------------------------------

let input = Number(prompt("enter the no."));
let table = n => {
    for( let i=1; i<=10; i++) {
        console.log(`${n} * ${i} = ${n*i}`);
        }
};
table(input);