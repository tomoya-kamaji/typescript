const names: Array<string> = []; //string[]
// name[0].split(' ');

const promise: Promise<any> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('終わりました！');
  },2000);
})

promise.then(data => {
  data.split(' ');
})
