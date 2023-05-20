console.log("this keyword");

// Implicit Binding
// When we invoke a function using . notation
// this keyword in this case points to object on left side of dot

// Explicit binding can be applied using call bind and apply

// this keyword is used to refer something

// What this refers to depends on the context

// Case-1 global context

console.log("global context this keyword - Window Object", this);

// Inside a function declared globally

// Case-2 A function declared in global scope, this keyword inside the function points to parent object i.e. window obj in our case

var a = 10,
  b = 20;
function add() {
  console.log(this.a + this.b);
}

add(); // 30

// case-3 Nested functions declared globally
// points to window

function parent() {
  function child() {
    console.log(this);
  }
  child();
}

parent(); // window
// parent obj of parent function is window

// case-4 Arrow function
// arrow function declared globally , points to window object

const arrowFunc = () => {
  console.log("this in arrow function decalred globally", this);
};

arrowFunc(); // window

// Case-5 Inside an object declared globally

let user = {
  name: "Neel",
  age: 24,
  getDetails() {
    console.log(this.name);
  },
};

user.getDetails(); // Neel

// this keyword points parent obj i.e user

// Case-6 Nested Object , Normal functions

let user2 = {
  name: "Neel",
  age: 33,
  childObj: {
    newName: "Coder",
    getDetails() {
      console.log(this.newName, this.name);
    },
  },
};

user2.childObj.getDetails(); // Coder undefined
//Example-2
let user3 = {
  name: "Neel",
  age: 33,
  childObj: {
    newName: "Coder",
    getDetails() {
      console.log(this.newName, this.name);
    },
    childObj2: {
      newestName: "Frontend",
      getDetasils() {
        console.log(this.newestName, this.newName, this.name);
      },
    },
  },
};

user2.childObj.getDetails(); // Coder undefined
user3.childObj.childObj2.getDetasils(); // Frontend undefined undefined

// When nested objects this points to immidiate parent in hierarchy

// Case-7  Object , Arrow function

let user4 = {
  name: "Naruto",
  getDetails: () => {
    console.log(this.name);
    console.log(this);
  },
};

user4.getDetails(); //undefined // window

// IMPORTANT - this in arrow function comes from parent normal function (if present)

// Case - 8 Object , Normal Function -> Arrow function

let user5 = {
  name: "Jiraya",
  parent() {
    const nestedArrow = () => {
      console.log(this.name);
      console.log(this);
    };
    nestedArrow();
  },
};

user5.parent(); // refers to user-5 object

// Explanation
// parent of nestedArrow is parent which is a normal function
// this is normal function , which is inside object refers to that object

// Variation-2
let user6 = {
  name: "Tobi",
  parent() {
    const nestedArrow = () => {
      const subLevel2Obj = {
        name: "Kakashi",
        getDetails() {
          console.log(this.name);
        },
        getDetailsArrow: () => {
          console.log(this.name);
        },
      };
      subLevel2Obj.getDetails();
      subLevel2Obj.getDetailsArrow();
    };
    nestedArrow();
  },
};

user6.parent(); // Kakashi Tobi
// subLevel2Obj.getDetails() , normal function so will point to parent obj i.e subLevel2Obj
// subLevel2Obj.getDetailsArrow() , looks for parent normal function in hierarchy finds one at parent() function this is parent function points to user-6

// Case-9 this inside a class

class userClass {
  constructor(n) {
    this.n = n;
  }

  getName() {
    console.log(this.name, this);
  }
}

const User = new userClass("Rin");

User.getName();
