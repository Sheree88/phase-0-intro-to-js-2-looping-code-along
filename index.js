// Code your solutions in this file
// for (let age = 30; age < 40; age ++) {
//     console.log(`I'm ${age} years old. Happy Birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i< gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }

//     return gifts;
// }

// wrapGifts(gifts);

/*
(P)arameters: 1. array of names, 2. event
(R)eturn: array of thank you messages
(E)xample: below
(P)seudocode: 
 - create a new, empty array to hold the messages;
 - iterate through the input array and, inside the loop, build out the 'thank you' message for each name using string interpolation, then add that message to the new array you created;
 - after the loop finishes and all of the messages have been added to the new array, return the new array
 */
const messages = [];

function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return messages;
}

// writeCards(["Charlie", "Samip", "Ali"], "birthday");

/*
should output:
[
  "Thank you, Charlie, for the wonderful birthday gift!",
  "Thank you, Samip, for the wonderful birthday gift!",
  "Thank you, Ali, for the wonderful birthday gift!",
];
*/

function countDown(num) {
  while (num >0) {
    console.log(num);
    num--;
  }
  console.log(num)
}