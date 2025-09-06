let num = Number(prompt("enter any no."))
let arr = [1,2,3,4,5,6,7,8,9,10];
let table = arr.map(`${num} * ${i} = ${num*i}`);
console.log(table.join("\n"));
