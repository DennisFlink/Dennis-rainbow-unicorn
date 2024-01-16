"use strict";
const animalArr = ["apa", "oragutang", "gorilla", "get", "giraff"];
console.log(animalArr);
const Person = ["Dennis", 18, true];
const helloX = (arr) => {
    let hello = "";
    arr.forEach((element) => {
        hello += `${element}x `;
    });
    return hello;
};
const hello = helloX(animalArr);
console.log(hello);
