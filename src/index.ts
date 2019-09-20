// import { Person, BankAccount } from "./index.types";

// function returnMyName(): string {
//   return "Stu";
// }

// console.log(returnMyName());

// function sayHello(): void {
//   console.log("Hey!");
// }

// function multiply(val1: number, val2: number): number {
//   return val1 * val2;
// }

// console.log(multiply(1, 2));

// let myMultiply: (val1: number, val2: number) => number;
// myMultiply = multiply;
// console.log(myMultiply(1, 2));

// let userData: { name: string; age: number } = {
//   name: "Stuart",
//   age: 31
// };

// // Type Alias
// type Complex = { data: number[]; output: (all: boolean) => number[] };
// const complex1: Complex = {
//   data: [100, 10, 5],
//   output: (all: boolean): number[] => this.data
// };

// console.log(complex1);

// // Union Types
// let myRealAge: number | string = 27;
// myRealAge = "yes";
// myRealAge = 10;

// console.log(myRealAge);

// let finalValue = 100;
// if (typeof finalValue === "number") {
//   console.log("Final Value is a number");
// }

// // Nullable Types
// let canBeNull: number | null = 12;
// canBeNull = null;
// let canAlsoBeNull;
// canAlsoBeNull = null;
// let canThisBeAny: any = null;
// canThisBeAny = 12;

// const bankAccount: BankAccount = {
//   money: 2000,
//   deposit(value: number): void {
//     this.money += value;
//   }
// };

// const myself: Person = {
//   name: "Max",
//   bankAccount: bankAccount,
//   hobbies: ["Sports", "Cooking"]
// };

// myself.bankAccount.deposit(3000);
// console.log("MYSELF: ", myself);

// function makeArray(...args: number[]) {
//   return args;
// }

// console.log(makeArray(1, 2, 3, 5));

// function printInfo(name: string, age: number) {
//   console.log(`My name is ${name} and I'm ${age}.`);
// }

// function printInfo2(...info: [string, number]) {
//   console.log(`My name is ${info[0]} and I'm ${info[1]}.`);
// }

// // Classes in TypeScript
// class Human {
//   private type: string;
//   protected age: number = 31;

//   constructor(public name: string, public username: string) {
//     this.name = name;
//   }

//   printAge() {
//     console.log(this.age);
//     this.setType("Old Guy");
//   }

//   private setType(type: string) {
//     this.type = type;
//     console.log(this.type);
//   }
// }

// let human = new Human("John", "johnc");
// human.printAge();

// class Superhuman extends Human {
//   constructor(username: string) {
//     super("Max", username);
//     this.age = 40;
//   }
// }

// const superhuman = new Superhuman("Stuart");
// console.log(superhuman);

// // Getters & Setters
// class Plant {
//   private _species: string = "Default";

//   get species() {
//     return this._species;
//   }

//   set species(value: string) {
//     if (value.length > 3) {
//       this._species = value;
//     } else {
//       this._species = "Default";
//     }
//   }
// }

// let plant = new Plant();
// console.log(plant.species);
// plant.species = "ASD";
// console.log(plant.species);

// class Helpers {
//   static pi: number = 3.14;
//   static calcCircumference(diameter: number): number {
//     return this.pi * diameter;
//   }
// }

// console.log(Helpers.pi);
// console.log(Helpers.calcCircumference(5));

// // Abstract Classes
// abstract class Project {
//   projectName: string = "Default";
//   budget: number = 2000;

//   abstract changeName(name: string): void;

//   calcBudget() {
//     return this.budget * 2;
//   }
// }

// class PersonalProject extends Project {
//   changeName(name: string): void {
//     this.projectName = name;
//   }
// }

// let newProject = new PersonalProject();
// console.log(newProject);
// newProject.changeName("Super Project BOY");
// console.log(newProject);

// // Private Constructors
// class OnlyOne {
//   private static instance: OnlyOne;
//   private constructor(public readonly name: string, public age: number) {}
//   static getInstance() {
//     if (!OnlyOne.instance) {
//       OnlyOne.instance = new OnlyOne("The Only One", 200);
//     }
//     return OnlyOne.instance;
//   }
// }

// let wrong = new OnlyOne("The Only One");
// let right = OnlyOne.getInstance();

// console.log(right);

// // Exercise 1 - How was your TypeScript Class?

// class Car {
//   name: string;
//   acceleration: number = 0;

//   constructor(name: string) {
//     this.name = name;
//   }

//   honk(): void {
//     console.log("Toot!");
//   }

//   accelerate(speed: number): void {
//     this.acceleration = this.acceleration + speed;
//   }
// }

// let car = new Car("Subaru");
// car.honk();
// car.accelerate(10);
// console.log(car);

// class Rectangle {
//   width: number = 0;
//   length: number = 0;

//   constructor(width: number, length: number) {
//     this.width = width;
//     this.length = length;
//   }

//   calcSize(): number {
//     return this.width * this.length;
//   }
// }

// const rectangle = new Rectangle(10, 25);
// console.log(rectangle.calcSize());

// class Fellow {
//   private _firstName: string = "";

//   get firstName(): string {
//     return this._firstName;
//   }

//   set firstName(value: string) {
//     if (value.length > 3) {
//       this._firstName = value;
//     } else {
//       this._firstName = "";
//     }
//   }
// }

// let person = new Fellow();
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);

// // Interface
// interface NamedPerson {
//   firstName: string;
//   age?: number; // ? means optional
//   [propName: string]: any; // [...] dynamic property (see "hobbies" array)
//   greet(lastName: string): void;
// }

// function greet(person: NamedPerson) {
//   console.log(`Hello ${person.firstName}.`);
// }

// function changeName(person: NamedPerson) {
//   person.firstName = "Anna";
// }

// class Peep implements NamedPerson {
//   firstName: string;
//   lastName: string;
//   greet(lastName: string): void {
//     console.log(`Sup ${lastName}.`);
//   }
// }

// const peep = new Peep();

// peep.firstName = "Stuart";
// peep.lastName = "Grant";

// greet(peep);
// changeName(peep);
// greet(peep);
// peep.greet("SuP!");

// // Function Types
// interface DoubleValueFunc {
//   (number1: number, number2: number): number;
// }

// const doubleFunc: DoubleValueFunc = function(value1: number, value2: number) {
//   return value1 + value2;
// };

// console.log(doubleFunc(1, 5));

// // Now requires the age value
// interface AgedPerson extends NamedPerson {
//   age: number;
// }

// const oldPerson: AgedPerson = {
//   age: 100,
//   firstName: "Grandpa",
//   greet(value: string): void {
//     console.log(`${value}. you old geezer.`);
//   }
// };

// oldPerson.greet("OH");

// // Generics
// function echo<T>(data: T) {
//   return data;
// }

// const testResults: Array<number> = [1.5, 2.5];
// testResults.push(10);
// console.log(testResults);

// // Generic Function
// function printAll<T>(args: T[]) {
//   args.forEach(element => console.log(element));
// }

// printAll<string>(["apples", "lemons", "bananas"]);

// // Generic Types
// const echo2: <T>(data: T) => T = echo;
// console.log(echo2<string>("something"));

// // Generic Classes
// class SimpleMath<base extends number, multiple extends number | string> {
//   base: base;
//   multiple: multiple;
//   calc(): number {
//     return +this.base * +this.multiple;
//   }
// }

// const simpleMath = new SimpleMath<number, string>();
// simpleMath.base = 12;
// simpleMath.multiple = "1";
// console.log(simpleMath.calc());

// class MyMap<T> {
//   private map: { [key: string]: T } = {};

//   setItem(key: string, item: T): void {
//     this.map[key] = item;
//   }

//   getItem(key: string) {
//     return this.map[key];
//   }

//   clear() {
//     this.map = {};
//   }

//   printMap() {
//     for (let key in this.map) {
//       console.log(key, this.map[key]);
//     }
//   }
// }

// const numberMap = new MyMap<number>();
// numberMap.setItem("apples", 10);
// numberMap.setItem("bananas", 5);
// numberMap.printMap();

// // Decorators
// function logged(constructorFn: Function) {
//   console.log(constructorFn);
// }

// @logged
// class DecPerson {
//   constructor() {
//     console.log("HI");
//   }
// }

// // Factory
// function logging(value: boolean) {
//   return value ? logged : null;
// }

// @logging(true)
// class Vehicle {}

// // Adv Decorators
// function printable(constructorFn: Function) {
//   constructorFn.prototype.print = function() {
//     console.log(this);
//   };
// }

// @printable
// class Green {
//   name = "Green Plant";
// }

// const greeny = new Green();
// (<any>greeny).print();

// // Method Decorators
// // Property Decorators
// function editable(value: boolean) {
//   return function(
//     target: any,
//     propName: string,
//     descriptor: PropertyDescriptor
//   ) {
//     descriptor.writable = value;
//   };
// }

// function overwritable(value: boolean) {
//   return function(target: any, propName: string): any {
//     const newDescriptor: PropertyDescriptor = {
//       writable: value
//     };
//     return newDescriptor;
//   };
// }

// class HotProject {
//   @overwritable(true)
//   projectName: string;

//   constructor(name: string) {
//     this.projectName = name;
//   }

//   @editable(true)
//   calcBudget() {
//     console.log(1000);
//   }
// }

// const hotProject = new HotProject("Super Hot");
// hotProject.calcBudget();
// hotProject.calcBudget = function() {
//   console.log(2000);
// };
// hotProject.calcBudget();

// // Parmeter Decorator
// function printInformation(target: any, methodName: string, paramIndex: number) {
//   console.log("target: ", target);
//   console.log("methodName: ", methodName);
//   console.log("paramIndex: ", paramIndex);
// }

// class Course {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   printStudentNumbers(mode: string, @printInformation printAll: boolean) {
//     if (printAll) {
//       console.log(10000);
//     } else {
//       console.log(100);
//     }
//   }
// }

// const course = new Course("Super");
// course.printStudentNumbers("anything", true);
// course.printStudentNumbers("anything", false);
