/* --------------------------------------------------------- */
/* OBJECT IN JAVASCRIPT (INTRO) */
/* --------------------------------------------------------- */

// An Object in javascript is like an object in real life (Think of a person, person has name, age, address these are the properties of a person we have a same concept in javascript, so when we are dealing with multiple realted variables we can put these variables inside of an object) let's create an object:

// We can create object in multiple ways the easiest way to create object is by object literal.
const person = {
  name: 'John Doe',
  age: 55,
  gender: 'Male'
};

// Let's walk through what we have done above, we create an object (person) via object literal syntax, inside a person object we have (key: value) pairs where key represent the properties of an object.

// Now let's see how we can use person object in our program
console.log(person);

// NOTE: There are two ways two work with properties of an object
// 1. Dot Notation
// 2. Bracket Notation
// Let's say we wanna change the person's name and age
person.name = 'Hannah Baker';
person['age'] = 23;
person.gender = 'Female';

// We can also add a new property to an existing object
person.isTall = true;

console.log(person);

// We can also delete the person's property
delete person.isTall;

console.log(person);

// NOTE: Now question arise which is best dot notation or bracket notation
// Bracket notation has its own advantages sometimes we don't know the name of targeted property until the runtime.

/* --------------------------------------------------------- */
/* OBJECT IN JAVASCRIPT (BASICS) */
/* --------------------------------------------------------- */

// Let's say we are building an application for drawing different kinds of shapes(like: circle, rectangle);
// We can define multiple variables like radius, x, y etc. But these variables are higly related to that represent circle, A better approach is to put these variables inside of an object. Now we can send that object anywhere in a program we can pass that to any function and all these variables are avaiable in that object.

const circle = {
  radius: 1,
  location: {
    x: 5,
    y: 5
  },
  isVisible: true,
  draw: function() {
    console.log('Draw');
  }
};

// Now with circle object we no longer need independent variables and functions like(radius, x, y and draw) all of these are part of circle object, now we can access them using dot notation.

circle.draw();

// What you seen above is called OBJECT-ORIENTED-PROGRAMMING (OOPS).
// OOPS -  Object oriented programming is basically a style of programming where we see a program as a collection of object that talk to each other to perform some functionality.
// In circle object we have some property and methods (In object oriented terms functions defines inside an object called method).

// There is Tiny problem in object literal syntax, imagine we wanna create two circle object how we gonna do this: I am gonna copy circle object two times and call second circle 'circle2'. Now the problem we have here is that we have duplicated the implementation of draw() method right now it has simple method only one line of code but what if we have 100 lines of code here we do not wanna repeat all these line because if we have a bug in this method we have to fix that in multiple places and also taking to account circle object has only one method right what if we have 10 other methods here we don't wanna duplicate all that logic.

// const circle = {
//   radius: 1,
//   location: {
//     x: 5,
//     y: 5
//   },
//   isVisible: true,
//   draw: function() {
//     console.log('Draw');
//   }
// };

// const circle2 = {
//   radius: 1,
//   location: {
//     x: 5,
//     y: 5
//   },
//   isVisible: true,
//   draw: function() {
//     console.log('Draw');
//   }
// };

// NOTE: So if our object has logic we need different ways to create objects that's when we use Factory functions and Constructor Functions, so let's talk about factory functions and contructor function

/* FACTORY FUNCTION (Just like factory produce products, Factory Function produce objects) */
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('Draw');
    }
  };
}

// Here you have noticed the draw method syntax this is the new way to declare methods inside an object inside an object we don't need to put function in front of function, and if the key value pair are same can also write just the name of key.
// So Factory functions are awesome all the logic are at one place and they return different-different objects on the basis of value

const circle1 = createCircle(10);
console.log(circle1);
const circle2 = createCircle(20);
console.log(circle2);
