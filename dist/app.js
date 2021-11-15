"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = "値がありません。";
    if (element.length > 0) {
        descriptionText = "値は" + element.length + "個です。";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("お疲れさまです。"));
function extraAndConvert(obj, key) {
    return "Value" + obj[key];
}
console.log(extraAndConvert({ name: "max" }, "name"));
//# sourceMappingURL=app.js.map