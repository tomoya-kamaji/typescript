interface Named{
  readonly name: string;
}

interface Greetable extends Named{
  greet(phrase: string): void;
}

class Person implements Greetable , Named{
  name: string;
  age = 30;

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }

  constructor(n: string){
    this.name = n;
  }
}

let user1: Greetable;

user1 = new Person('Max');

user1.greet('Hello I am');
console.log(user1)
