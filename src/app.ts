type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmploee = Admin & Employee;

const e1: ElevatedEmploee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

/*  関数オーバロード
  引数のパターンごとに返り値を決められる
  下記のようにresult.split(" ");の部分で推論されどちらもnumberの場合にコンパイルエラ-となる
 */
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Hello", "TypeScript");
result.split(" ");

const fetchedUserData = {
  id: "u1",
  name: "user1",
  job: {
    title: "Developer",
    description: "TypeScript",
  },
};

console.log(fetchedUserData?.job?.title);

const userInput = '';

const storeData = userInput ?? "DEFAULT";

console.log(storeData);

type UnknownEmployee = Employee | Admin;

function printEmployeeInfomation(emp: UnknownEmployee) {
  console.log(emp.name);
  if ("privileges" in emp) {
    console.log("Privileges:" + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date:" + emp.startDate);
  }
}

printEmployeeInfomation({ name: "Menu", startDate: new Date() });

class Car {
  drive() {
    console.log("運転中,,,");
  }
}
class Truck {
  drive() {
    console.log("トラック運転中,,,");
  }

  loadCargo(amount: number) {
    console.log("荷物を載せています..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function userVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

userVehicle(v1);
userVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("移動速度：" + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// const userInputElement = <HTMLInputElement>document.getElementById("user-input");
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement.value = "こんにちは";

interface ErrorContainer {
  // {email: '正しいメールアドレスではありません。}
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "正しいメールアドレスではありません",
  username: "ユーザ名に記号を風メルことはできません",
};
