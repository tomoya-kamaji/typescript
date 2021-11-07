// const add = (a: number, b: number) => a + b;

// const printOutput: (output: string | number) => void = (output) => {
//   console.log(output);
// };

// console.log(add(2, 5));

const button = document.querySelector("button");

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult,curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 1, 4, 4);
console.log(addedNumbers);


const hobbies = ['Sports','Cooking']

const [hobby1,hobby2,...remaingHobbies] = hobbies;

console.log(hobbies,hobby1,hobby2)
