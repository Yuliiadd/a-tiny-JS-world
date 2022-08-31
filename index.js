/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here


// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */


"use strict"

const man = {
   species: 'Homo sapiens',
   name: 'Joe',
   gender: 'male',
   legs: 2,
   hands: 2,
   saying: 'How you doing?'
};
const woman = {
   species: 'Homo sapiens',
   name: 'Monica',
   gender: 'female',
   legs: 2,
   hands: 2,
   saying: 'I know!'
};
const cat = {
   species: 'cat',
   name: 'Taras',
   gender: 'male',
   legs: 4,
   hands: 0,
   saying: 'Meeeeoow!'
};
const dog = {
   species: 'dog',
   name: 'Chappy',
   gender: 'male',
   legs: 4,
   hands: 0,
   saying: 'Woooof!'
};

const catWoman = Object.assign({}, cat);
catWoman.species = 'Cat-woman';
catWoman.name = 'Halle Berry';
catWoman.gender = 'female';
catWoman.legs = 2;
catWoman.hands = 2;

function objToSrting(obj) {
   let result = "";
   for (var key in obj) {
      result += obj[key] + ";"
   };
   print(result.substring(0, result.length - 1));
};

objToSrting(man);
objToSrting(woman);
objToSrting(cat);
objToSrting(dog);
objToSrting(catWoman);