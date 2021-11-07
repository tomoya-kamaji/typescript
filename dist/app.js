"use strict";
const button = document.querySelector("button");
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 1, 4, 4);
console.log(addedNumbers);
//# sourceMappingURL=app.js.map