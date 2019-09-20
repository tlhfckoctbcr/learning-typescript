// Variable Declarations
let message;
message = "Hello World";
const otherMessage = "Testing!";
otherMessage = "Testing?";
console.log(message);

// Variable Types
// string, number, boolean, void, null, undefined, any
let word: string = "Word";
let integer: number = 1;
let truthy: boolean = true;
let nullValue: null = null;
let undefinedValue: undefined = undefined;
let oneOrTheOther: string | number = 1;
let list: number[] = [1, 2, 3, 4, '5'];
let person: [string, number] = ['Stuart', 31];
let wrongPerson: [string, number] = [31, 'Stuart'];
let anything: any = 10;
anything = true;
anything = "string";

// Enum
enum Color {Red, White, Blue};
let c: Color = Color.Blue;

// Functions
function printNameUpperCase(name: string): string {
  return name.toUpperCase();
}

function createPersonObject(name: string = "Foo", age: number): {
  name: string,
  age: number,
} {
  return { name, age }
}

// Interfaces
interface Person {
  firstName: string,
  lastName: number
}

function printFullName(person: Person): void {
  console.log(`${person.firstName} ${person.lastName}`);
}

// Classes
class Employee {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}!`);
  }
}

let stu = new Employee('Stu');
stu.greet();
console.log(stu.name);

class Manager extends Employee {
  constructor(managerName: string) {
    // Initializes the class w/ managerName param
    super(managerName);
  }

  instructPeons(): void {
    console.log('Work harder!');
  }
}

let boss = new Manager('Big Boss');
boss.instructPeons();
boss.greet();

// Setters/Getters
class Fellow {
  private _firstName: string = "";

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = "";
    }
  }
}

let fellowMan = new Fellow();
console.log(fellowMan.firstName);
fellowMan.firstName = "St";
console.log(fellowMan.firstName);
fellowMan.firstName = "Stuart";
console.log(fellowMan.firstName);

// Generics
/* Defines relationship between input and output param types
** Stronger type checking at compile time */

interface NameArgs {
  length: number,
}

function PrintNameLength<T extends NameArgs>(name: T) {
  return name.length;
}
