// Arrays
const numbers = [3, 4];

/* ----------------------------------------------------- */
/* ADDING ELEMENT TO ARRAY */
/* ----------------------------------------------------- */
// To The End
numbers.push(5, 6, 1);
// To The Beginning
numbers.unshift(1, 2);
// To The Middle
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);

/* ----------------------------------------------------- */
/* FINDING ELEMENT IN ARRAY */
/* ----------------------------------------------------- */
// Finding Element which consists Primitive Types element.
// To find an element in an we can use these methods:
// 1. indexOf()
console.log(numbers.indexOf(1)); // This is will return index of first occurence of element if it is not find this will return -1.

// 2. lastIndexOf()
console.log(numbers.lastIndexOf(1)); // This is will return index of last occurence of element if it is not find this will return -1.

// NOTE: now if we want to check that the particular element is present in array or not we can use expression like this.
console.log(numbers.indexOf(1) !== -1); // But javascript provide a method to do same work includes()method.

console.log(numbers.includes(1));

// Find Elements (Reference Types) in an arrays
const courses = [{ id: '1', name: 'a' }, { id: '2', name: 'b' }];

// NOTE: includes() method does not work with reference type because the reference of passing object in includes() method is different from the courses array object so it return false.
// console.log(courses.includes({ id: 1, name: 'a' }));

// NOTE: with reference type we use find() method.

// The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
const course = courses.find(function(course) {
  return course.name === 'a';
});
console.log(course);

// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test.
const course1 = courses.findIndex(function(course) {
  return course.name === 'a';
});
console.log(course1);

// Note: we can re write the above code in shorter form by using arrow function.
const course2 = courses.findIndex(course => course.name === 'b');
console.log(course2);

/* ----------------------------------------------------- */
/* REMOVING ELEMENT FROM ARRAYS */
/* ----------------------------------------------------- */
const evenNumbers = [2, 4, 6, 8, 10];

// Removing Element from End
evenNumbers.pop();
console.log(evenNumbers);

// Removing Element from Beginning
evenNumbers.shift();
console.log(evenNumbers);

// Removing Element from Middle
evenNumbers.splice(1, 1);
console.log(evenNumbers);

// How to Emptying the whole array? there are few solution let's take a look them:
let cars = ['bmw', 'maruti', 'audi', 'honda'];
let anotherCars = cars;
// Solution 1 (This solution has one issue it's not work if the array multiple references suppose we have assign car to another array just before doing cars to empty array) in that case use solution 1 &2
cars = [];

// Solution 2
// cars.length = 0;

// Solution 3
// cars.splice(0, numbers.length);

console.log(cars);
console.log(anotherCars);

/* ----------------------------------------------------- */
/* COMBINING AND SLICING ARRAYS */
/* ----------------------------------------------------- */
const first = [1, 2, 3];
const second = [4, 5, 6];

// concat() return a new array so that both arrays are uneffected
const combined = first.concat(second);
console.log(combined);

const slice = combined.slice(0, 4);
console.log(slice);

// NOTE: If our array contain reference type elements then the both slice() and concat() fucntions does not copy the element they just point a reference of elements so if change the elements at some point of time in our program it will change occur at every place where the reference of that element is used take an example.
const arr1 = [{ id: 1, name: 'sandeep' }];
const arr2 = [1, 2];
arr1[0].id = 2; // This will effect in both combineArray and also sliceArray because they have same reference.
const combineArray = arr1.concat(arr2);
console.log(combineArray);
const sliceArray = combineArray.slice(); // Not if we are not passing any argument in slice method it simply copy the whole array.
console.log(sliceArray);

// NOTE: we have learn above concat() to combine two arrays but have shorter way to do this by using spread operator.
const ex1 = [1, 2, 3];
const ex2 = [4, 5, 6];
const ex3 = [...ex1, 'a', ...ex2]; // We can also add something between them
console.log(ex3);

/* ----------------------------------------------------- */
/* ITERATE AN ARRAY */
/* ----------------------------------------------------- */
const oddNumbers = [1, 3, 5, 7, 9];

// We can iterate an array via (for-of loop)
for (let number of oddNumbers) {
  console.log(number);
}

// We can also iterate an array via forEach loop
oddNumbers.forEach((number, index) => console.log(number, index));

// NOTE: there is no bad or good but we have one advantage with forEach is that it can takes one more parameter that is index

/* ----------------------------------------------------- */
/* JOINING AN ARRAY */
/* ----------------------------------------------------- */
const nums = [1, 2, 3, 4, 5];
const joined = nums.join(','); // Join method return a string on the basis of seperator
console.log(joined);

const message = 'Java JavaScript HTML CSS';
const spiltedMessage = message.split(' '); // split() returns an array on basis on separator.
console.log(spiltedMessage);

console.log(spiltedMessage.join('-'));

/* ----------------------------------------------------- */
/* SORTING AN ARRAY */
/* ----------------------------------------------------- */

const randomNumbers = [4, 6, 9, 1, 5];
randomNumbers.sort();
console.log(randomNumbers);

randomNumbers.reverse();
console.log(randomNumbers);

const randomCourses = [
  { id: 1, name: 'Node' },
  { id: 2, name: 'HTML' },
  { id: 3, name: 'CSS' }
];
randomCourses.sort(); // By default sort method doesnot work on array of object but sort method takes optionally an function as a argument for comparison.
console.log(randomCourses);

// TODO: Always remember whenever comparing two string using ascii remove case sensitivity.
randomCourses.sort(function(a, b) {
  // a < b => -1
  // a > b => 1
  // a === b => 0

  const nameA = a.name.toUpperCase();
  const nameB = a.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(randomCourses);

/* ----------------------------------------------------- */
/* TESTING THE ELEMENT OF AN ARRAY (every() and some()) */
/* ----------------------------------------------------- */

// We have two new functions in javascript every() and some() let's check them out.
const numArr = [1, 2, 3, -1];
// every() methods run on every methods if the condition matches and return true otherwise false.
const allPositive = numArr.every(function(value) {
  return value >= 0;
});
console.log(allPositive);

const atleastOnePositive = numArr.some(function(value) {
  return value >= 0;
});
console.log(atleastOnePositive);

/* ----------------------------------------------------- */
/* FILTERING AN ARRAY BASED ON CONDITION */
/* ----------------------------------------------------- */
const filteredArray = numArr.filter(function(number) {
  return number >= 0;
});

console.log(filteredArray);

/* ----------------------------------------------------- */
/* MAPPING AN ARRAY  */
/* ----------------------------------------------------- */
// map() is used to map array element into something else for example lets map an array to objects.
const mapedArray = numArr.map(function(number) {
  return { value: number };
});

console.log(mapedArray);

// NOTE: both map and filter return a new array and also chainable.

/* ----------------------------------------------------- */
/* REDUCING AN ARRAY  */
/* ----------------------------------------------------- */
// reduce() converts an array into single value
const cartValue = [100, 200, 500, 400];

let sum = 0;
for (let n of cartValue) {
  sum = sum + n;
}
console.log(sum);

const sumOfCartValue = cartValue.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // Second argument is the initializer for accumulator
console.log(sumOfCartValue);
