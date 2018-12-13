// In JavaScript we can define functions in two ways
// 1. Function Declaration
// 2. Function Expression

// Function Declaration
function walk() {
  console.log('Walk');
}
walk();

// Function Expression
let run = function() {
  console.log('Run');
};
run();

// NOTE: setting a function to a variable is like like a setting an object b/c fucntions are object

// NOTE: Above we have learned two ways of defining a functions (1. Function Declaration and 2. Function Expression) the key difference b/w both ways is that, Functions define by function declaration we can call them before defining them see.

someAction();
function someAction() {
  console.log('Take some action');
}

// The question is that why this happening it happens b/c at the runtime javascript moves all the function declaration at the top this is what called hoisting. So hoisting is the process of moving function declaration to the top of the file and this is done automatically behind the scene.

// Argument Object
function sum() {
  let total = 0;
  for (let value of arguments) total += value; // Earliar we have seen for of loop only works with array but arguments is object, technically arguments is an iterable and for of loop works on iterables.
  return total;
}
console.log(sum(1, 2, 3, 4, 5));

// NOTE: we have cleaner way doing the same thing that we have done above using rest operator see.
// Do not confuse ... is not a spread operator whenever ... used inside an parameter it called rest operator and it takes number of argument and put them inside an array.
function add(...args) {
  console.log(args); // here we got an array of argument pass to this function
  return args.reduce((a, b) => a + b);
}
console.log(add(1, 2, 4, 5, 6));

// Let's take above example to the next level suppose we have prices and discount in cartvalue() we wanna return total price after discount.
function cartValue(discount, ...prices) {
  let total = prices.reduce((a, b) => a + b);
  return total - (total / 100) * discount;
}

console.log(cartValue(10, 500, 500));

// NOTE: Rest parameter must be the last parameter in the function. that's why it is called rest.

// Function with default parameters
function interestRate(principal, years, rate = 4) {
  // rate = rate || 4; // Earlier we have seen this approach to set default values by using truthy concepts. But in function default parameter doing the same thing in simplest form.
  return ((principal * rate) / 100) * years;
}
console.log(interestRate(1000, 10));

// NOTE: if are giving default parameter it should be the last or after default parameter every parameter should have default values.

/* --------------------------------------------- */
/* GETTERS AND SETTERS */
/* --------------------------------------------- */
const person = {
  firstName: 'Nik',
  lastName: 'Kumar',
  fullName() {
    return `${person.firstName} ${person.lastName}`;
  }
};

// Let's understand getter and setter with example. Let's imagine we have a person object with two property firstName and lastName, now somwhere in application we want to show person's full name so we have to do something like this.

// console.log(`${person.firstName} ${person.lastName}`);

// However problem with approach there are multiple places in the application with current implementation we have to write same line code multiple times.

// So better way to do this is to write a function fullName() and used that function.
console.log(person.fullName()); // This approach have some problem first this is read only we cannot set person's full name from the outside it will be nice if we could do this. and second thing it could be nice if we call fullName as property instead of method that's where getters and setters comes into picture let's see getters and setters.

const newPerson = {
  firstName: 'sandeep',
  lastName: 'bansal',
  get fullName() {
    return `${newPerson.firstName} ${newPerson.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' '); // Here we assume that the receiving value is string
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(newPerson.fullName); // See by using getter we can access function as a property.
// Now to set fullName from outside we need to add setter.
newPerson.fullName = 'john Smith';
console.log(newPerson.fullName);

/* --------------------------------------------- */
/* TRY AND CATCH */
/* --------------------------------------------- */

// Above we assume that the value we got is string but now we will re implement with try and catch block. for simplicity we will go with setter because it can cause error.

const personTwo = {
  firstName: 'Manish',
  lastName: 'Dobrial',

  set fullName(value) {
    if (typeof value !== 'string') {
      throw new Error('Value is not a string');
    }

    const parts = value.split(' ');
    if (parts.length !== 2) {
      throw new Error('Enter first and lastname');
    }

    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

try {
  personTwo.fullName = undefined;
} catch (e) {
  alert(e);
}

console.log(personTwo);
