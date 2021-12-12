// 関数の型定義　関数の引数と返り値について考える
const logMessage = (message: string): void => {
  console.log("Function basic sample 1:", message);
};
logMessage("Hellow TypeScript!");

/*
  オプションとデフォルト
  - オプション ?
  - デフォルトパラメータ
 */
// const isUserSingnedIn = (userId: string, username?: string): boolean => {
//   return true;
// };

// const isUserSingnedIn2 = (userId: string, username = "No Nome"): boolean => {
//   return true;
// };

/*
  ■可変長引数とは？
  - 関数の呼び出しの際に引数の数をいくつ渡してもOK
  - 全く型安全ではない(これが微妙な点なのかな) → anyの型
  ■レストパラメーターとは
  - パタメータに...を用いることで型宣言できる
  - パラメータの最後に1つだけ指定できる
*/

// const sumPrice = (...price: number[]): number => {
//   // priceを使った処理
//   return price[0];
// };

export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice
  }, 0);
};

/*
  呼び出しシグネチャ
  - どのような関数なのかを表現する型定義
  - 省略記法はアロー関数と似た形
*/
// 同じ意味
type LogMessage = (message: string) => void
type FullLogMessage = {
  (message: string):void
}
const logMessage2: LogMessage = (message) => {
  console.log('Function:' , message)
}
const fullLogMessage2: FullLogMessage = (message) => {
  console.log('Function:' , message)
}





// 配列に秩序をもたらす型定義
const colors: string[] = ["red", "blue"];
colors.push("yellow"); // OK
// colors.push(123); // NG

// この書き方は同義：T[]とArray<T>
// const odd: number[] = [1, 2, 5];
// const even: Array<number> = [1, 2, 5];

// 合併型　あんまり使わない方がいい。
const ids: (string | number)[] = ["ABC", 123];
ids.push("DEF"); // OK
ids.push(456); // OK

// 配列の型推論
// const generateSomeArray = () => {
//   const _somArray = [];
//   _somArray.push(123);
//   _somArray.push("ABC");
//   return _somArray;
// };

// const someArray = generateSomeArray();
