// const names: Array<string> = []; //string[]
// // name[0].split(' ');

// const promise: Promise<any> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('終わりました！');
//   },2000);
// })

// promise.then(data => {
//   data.split(' ');
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

/*
  引数：T(lengthプロパティが存在すればどんな型でも受け入れる)
  戻り値：Tと文字列
 */
function countAndDescribe<T extends Lengthy>(element: T): (string | T)[] {
  let descriptionText = "値がありません。";
  if (element.length > 0) {
    descriptionText = "値は" + element.length + "個です。";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("お疲れさまです。"));



function extraAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return "Value" + obj[key];
}

console.log(extraAndConvert({ name: "max" }, "name"));
