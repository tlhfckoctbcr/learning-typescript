import { Person, BankAccount } from "./index.types";

function returnMyName(): string {
  return "Fart";
}

console.log(returnMyName());

function sayHello(): void {
  console.log("Hey!");
}

function multiply(val1: number, val2: number): number {
  return val1 * val2;
}

console.log(multiply(1, 2));

let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;
console.log(myMultiply(1, 2));

let userData: { name: string; age: number } = {
  name: "Stuart",
  age: 31
};

// Type Alias
type Complex = { data: number[]; output: (all: boolean) => number[] };
const complex1: Complex = {
  data: [100, 10, 5],
  output: (all: boolean): number[] => this.data
};

console.log(complex1);

// Union Types
let myRealAge: number | string = 27;
myRealAge = "yes";
myRealAge = 10;

console.log(myRealAge);

let finalValue = 100;
if (typeof finalValue === "number") {
  console.log("Final Value is a number");
}

// Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny: any = null;
canThisBeAny = 12;

const bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

const myself: Person = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log("MYSELF: ", myself);
