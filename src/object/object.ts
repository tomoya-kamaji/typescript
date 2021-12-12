export default function objectSample(){
  // const a: object = {
  //   name: 'Torahack',
  //   age: 28
  // }
  // a.name // aというobjectにはnameというプロパティがないとエラーとなる

  // オブジェクトリテラル記法で型定義
  let country:{
    langage: string
    name: string
  } = {
    langage: 'Japanese',
    name: 'Japan'
  }

  console.log("Object object sample1:" ,country)
}
