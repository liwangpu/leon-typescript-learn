export class Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    hello(){
        console.log(`This is ${this.name}, ${this.age} years old!`);
    }
}