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
// Variable Declarations
var message;
var message2;
message2 = '10';
message = "Hello World";
var otherMessage = "Testing!";
otherMessage = "Testing?";
console.log(message);
// Variable Types
// string, number, boolean, void, null, undefined, any
var word = "Word";
word.toUpperCase();
var integer = 1;
integer.toFixed();
var truthy = true;
var someValue;
var undefinedValue = undefined;
var oneOrTheOther = 1;
var someArray = ['foo', 'bar', 'baz', 1];
var someOtherArray = ['prop', true];
var list = [1, 2, 3, 4, '5'];
var person = ['Stuart', 31];
var wrongPerson = [31, 'Stuart'];
var anything = 10;
anything = true;
anything = "string";
// Enum
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
;
var direction = Direction.Down;
console.log(direction);
// Functions
function printNameUpperCase(name) {
    return name.toUpperCase();
}
function createPersonObject(name, age) {
    if (name === void 0) { name = "Foo"; }
    return { name: name, age: age };
}
function printFullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var oldHuman = {
    name: "stuart",
    address: "SC",
    age: 40
};
console.log(oldHuman);
// Classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.greet = function () {
        console.log("Hello " + this.name + "!");
    };
    return Employee;
}());
var stu = new Employee('Stu');
stu.greet();
console.log(stu.name);
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        // Initializes the class w/ managerName param
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.instructPeons = function () {
        console.log('Work harder!');
    };
    return Manager;
}(Employee));
var boss = new Manager('Big Boss');
boss.instructPeons();
boss.greet();
// Setters/Getters
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
var fellowMan = new Fellow();
console.log(fellowMan.firstName);
fellowMan.firstName = "St";
console.log(fellowMan.firstName);
fellowMan.firstName = "Stuart";
console.log(fellowMan.firstName);
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
function PrintNameLength(name) {
    return name.length;
}
var wrapValInObj = function (value) {
    return { value: value };
};
var wrappedValue = wrapValInObj('Foo');
wrappedValue.value.toUpperCase();
