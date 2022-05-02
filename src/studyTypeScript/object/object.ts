function objectSample(){
  // const a: object = {
  //   name: 'Torahack',
  //   age: 28
  // }
  // a.name // aというobjectにはnameというプロパティがないとエラーとなる

  // オブジェクトリテラル記法で型定義
  let country: {
    langage: string
    name: string
  } = {
    langage: 'Japanese',
    name: 'Japan'
  }

  console.log("Object object sample1:" ,country)


/*
  特別なプロパティを扱う
  - オプショナルのついたプロパティはあってもなくてもOK
  - readonlyのついたプロパティは上書きできない
 */
  let torahack: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    lastName: 'Yamada',
    firstName: 'Tarou'
  }

  torahack.gender = 'male'
  torahack.lastName = 'Kamado'
  // torahack.firstName = 'Tanjiro' エラー
}

objectSample()


/*
  インデックスシグネチャ。複数のkey-valueを指定できるのがいいこと
  - オブジェクトが複数のプロパティを持つ可能性を示す
  - [key: T]:Uのように定義する
  - keyはstringかnumberのみ ※注意
 */
const capitals:{
  [contryName: string]: string
} = {
  Japan: 'Tokyo',
  Korea: 'Seoul'
}
capitals.Chaina = 'Beijing'
capitals.Canada = 'Ottawa'

console.log(capitals.Japan);

/*
  型エイリアスで型定義を再利用
  型エイリアスとは
  - typeを使って型に名前をつけて宣言する
  - 同じ型を何度も定義する必要がない(再利用)
  - 型に名前をつけることで変数の役割を明確化
*/
type Country = {
  capital: string
  language: string
  name: string
}

const japan:Country = {
  capital: 'Tokyo',
  language: 'Japanese',
  name: 'Japan'
}

/*
  union型(合併)とintersection型()
  - 合併型：型Aか型Bどちらかの型をもつ
  - 交差型：型Aと型Bどちらも型をもつ
*/
type Knight = {
  hp: number
  sp: number
  weapon: string
  swordSkill: string
}

type Wizard = {
  hp: number
  mp: number
  weapon: string
  magicSkill: string
}

//　合併型... KnightまたはWizardの型をもつ
type Adventurer = Knight | Wizard

// 交差型...KnightかつWizardの型をもつ
type Paladin = Knight & Wizard

// Knight寄りの冒険者
const adventure1: Adventurer = {
  hp: 100,
  sp: 30,
  weapon: '木の剣',
  swordSkill: '三連切り'
}

// Knight寄りの冒険者
const Paladin: Adventurer = {
  hp: 100,
  sp: 30,
  mp: 30,
  weapon: '木の剣',
  swordSkill: '三連切り',
  magicSkill: 'ファイアボール'
}
