// Variable Declarations
let message;

let message2: any;
message2 = '10';
message2 = 10;

message = "Hello World";
const otherMessage = "Testing!";
otherMessage = "Testing?";
console.log(message);

// Variable Types
// string, number, boolean, void, null, undefined, any
let word: string = "Word";
word.toUpperCase();

let integer: number = 1;
integer.toFixed();

let truthy: boolean = true;

let someValue: string | null;

let undefinedValue: undefined = undefined;

let oneOrTheOther: string | number = 1;

let someArray: string[] = ['foo', 'bar', 'baz', 1];

let someOtherArray: [string, boolean] = ['prop', true];

let list: number[] = [1, 2, 3, 4, '5'];
let person: [string, number] = ['Stuart', 31];
let wrongPerson: [string, number] = [31, 'Stuart'];

let anything: any = 10;
anything = true;
anything = "string";







// Enum

enum Color {Blue, Green, Yellow}

enum Direction {Up = 1, Down, Left, Right};
let direction: Direction = Direction.Down;
console.log(direction);








// Functions
function printNameUpperCase(name: string): { capitalizedName: string } {
  return {
    capitalizedName: name.toUpperCase()
  }
}





function createPersonObject(name: string = "Foo", age: number): {
  name: string,
  age: number,
} {
  return { name, age }
}

createPersonObject(null, 10);



// Interfaces
interface Person {
  firstName: string,
  lastName: string,
  age: number
}


function printFullNameAndAge(person: Person): void {
  console.log(`${person.firstName.toLowerCase()} ${person.lastName.toUpperCase()} ${person.age.toString()}`);
}







interface Human {
  name: string;
  address: string;
}





interface OldHuman extends Human {
  age: number;
}




const oldHuman: OldHuman = {
  name: "stuart",
  address: "SC",
  age: 'Foo'
};

console.log(oldHuman);

// Classes
class Employee {
  private name: string;

  constructor(name: string | number) {
    this.name = typeof name === 'string' ? name : name.toString();
  }

  greet() {
    console.log(`Hello ${this.name}!`);
  }
}

let stu = new Employee(10);
stu.greet();
console.log(stu.name);
stu.name = 'Fish';

class Manager extends Employee {
  constructor(managerName: string) {
    // Initializes the class w/ managerName param
    super(managerName);
  }

  instructPeons(): void {
    this.name = 'Foo';
  }
}

let boss = new Manager('Big Boss');
boss.instructPeons();
boss.greet();
console.log(boss.name);





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
fellowMan.firstName = "St";
console.log(fellowMan.firstName);
fellowMan.firstName = [1,2,3,4,5,6];
console.log(fellowMan.firstName);





// Abstract Classes
abstract class Project {
  projectName: string = "Default";
  budget: number = 2000;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class PersonalProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

let personalProject = new PersonalProject();
personalProject.changeName('Foo');

// Generics
/* Defines relationship between input and output param types
** Stronger type checking at compile time */

interface NameArgs {
  length: number,
}

function PrintNameLength<T extends NameArgs>(name: T) {
  return name.length;
}

const wrapValInObj = <T>(value: T) => {
  return {value}
}

const wrappedValue = wrapValInObj('Foo');

wrappedValue.value.toUpperCase();