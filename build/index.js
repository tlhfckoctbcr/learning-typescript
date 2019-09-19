"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
function returnMyName() {
    return "Fart";
}
console.log(returnMyName());
function sayHello() {
    console.log("Hey!");
}
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(1, 2));
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(1, 2));
var userData = {
    name: "Stuart",
    age: 31
};
var complex1 = {
    data: [100, 10, 5],
    output: function (all) { return _this.data; }
};
console.log(complex1);
// Union Types
var myRealAge = 27;
myRealAge = "yes";
myRealAge = 10;
console.log(myRealAge);
var finalValue = 100;
if (typeof finalValue === "number") {
    console.log("Final Value is a number");
}
// Nullable Types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log("MYSELF: ", myself);
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 3, 5));
function printInfo(name, age) {
    console.log("My name is " + name + " and I'm " + number + ".");
}
function printInfo2() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log("My name is " + info[0] + " and I'm " + info[1] + ".");
}
// Classes in TypeScript
var Human = /** @class */ (function () {
    function Human(name, username) {
        this.name = name;
        this.username = username;
        this.age = 31;
        this.name = name;
    }
    Human.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old Guy");
    };
    Human.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Human;
}());
var human = new Human("John", "johnc");
human.printAge();
var Superhuman = /** @class */ (function (_super) {
    __extends(Superhuman, _super);
    function Superhuman(username) {
        var _this = _super.call(this, "Max", username) || this;
        _this.age = 40;
        return _this;
    }
    return Superhuman;
}(Human));
var superhuman = new Superhuman("Stuart");
console.log(superhuman);
// Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "ASD";
console.log(plant.species);
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.pi * diameter;
    };
    Helpers.pi = 3.14;
    return Helpers;
}());
console.log(Helpers.pi);
console.log(Helpers.calcCircumference(5));
// Abstract Classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 2000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var PersonalProject = /** @class */ (function (_super) {
    __extends(PersonalProject, _super);
    function PersonalProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PersonalProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return PersonalProject;
}(Project));
var newProject = new PersonalProject();
console.log(newProject);
newProject.changeName("Super Project BOY");
console.log(newProject);
// Private Constructors
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name, age) {
        this.name = name;
        this.age = age;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only One", 200);
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var wrong = new OnlyOne("The Only One");
var right = OnlyOne.getInstance();
console.log(right);
// Exercise 1 - How was your TypeScript Class?
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("Subaru");
car.honk();
car.accelerate(10);
console.log(car);
var Rectangle = /** @class */ (function () {
    function Rectangle(width, length) {
        this.width = 0;
        this.length = 0;
        this.width = width;
        this.length = length;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}());
var rectangle = new Rectangle(10, 25);
console.log(rectangle.calcSize());
var Fellow = /** @class */ (function () {
    function Fellow() {
        this._firstName = "";
    }
    Object.defineProperty(Fellow.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Fellow;
}());
var person = new Fellow();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
function greet(person) {
    console.log("Hello " + person.firstName + ".");
}
function changeName(person) {
    person.firstName = "Anna";
}
var Peep = /** @class */ (function () {
    function Peep() {
    }
    Peep.prototype.greet = function (lastName) {
        console.log("Sup " + lastName + ".");
    };
    return Peep;
}());
var peep = new Peep();
peep.firstName = "Stuart";
peep.lastName = "Grant";
greet(peep);
changeName(peep);
greet(peep);
peep.greet("SuP!");
var doubleFunc = function (value1, value2) {
    return value1 + value2;
};
console.log(doubleFunc(1, 5));
var oldPerson = {
    age: 100,
    firstName: "Grandpa",
    greet: function (value) {
        console.log(value + ". you old geezer.");
    }
};
oldPerson.greet("OH");
// Generics
function echo(data) {
    return data;
}
var testResults = [1.5, 2.5];
testResults.push(10);
console.log(testResults);
// Generic Function
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["apples", "lemons", "bananas"]);
// Generic Types
var echo2 = echo;
console.log(echo2("something"));
// Generic Classes
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calc = function () {
        return +this.base * +this.multiple;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.base = 12;
simpleMath.multiple = "1";
console.log(simpleMath.calc());
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem("apples", 10);
numberMap.setItem("bananas", 5);
numberMap.printMap();
// Decorators
function logged(constructorFn) {
    console.log(constructorFn);
}
var DecPerson = /** @class */ (function () {
    function DecPerson() {
        console.log("HI");
    }
    DecPerson = __decorate([
        logged
    ], DecPerson);
    return DecPerson;
}());
// Factory
function logging(value) {
    return value ? logged : null;
}
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle = __decorate([
        logging(true)
    ], Vehicle);
    return Vehicle;
}());
// Adv Decorators
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Green = /** @class */ (function () {
    function Green() {
        this.name = "Green Plant";
    }
    Green = __decorate([
        printable
    ], Green);
    return Green;
}());
var greeny = new Green();
greeny.print();
// Method Decorators
// Property Decorators
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var HotProject = /** @class */ (function () {
    function HotProject(name) {
        this.projectName = name;
    }
    HotProject.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(true)
    ], HotProject.prototype, "projectName", void 0);
    __decorate([
        editable(true)
    ], HotProject.prototype, "calcBudget", null);
    return HotProject;
}());
var hotProject = new HotProject("Super Hot");
hotProject.calcBudget();
hotProject.calcBudget = function () {
    console.log(2000);
};
hotProject.calcBudget();
// Parmeter Decorator
function printInformation(target, methodName, paramIndex) {
    console.log("target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(100);
        }
    };
    __decorate([
        __param(1, printInformation)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course("Super");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
