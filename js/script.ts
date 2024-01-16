const animalArr: string[] = ["apa", "oragutang", "gorilla", "get", "giraff"];

console.log(animalArr);

const Person: (string | number | boolean)[] = ["Dennis", 18, true];

const helloX = (arr: string[]) => {
  let hello = "";
  arr.forEach((element) => {
    hello += `${element}x `;
  });
  return hello;
};

const hello = helloX(animalArr);
console.log(hello);
