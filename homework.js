// EPISODE 1

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };

//     const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// COMMENTS -->
// The log output will be: The murderer is Miss Scarlet. 
// This is because we have a constant scenario that has a key value of murderer Miss Scarlet. The constant function declareMurderer returns the value for the murderer key from the object scenario.

// EPISODE 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//     murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// COMMENTS -->
// A constant variable is declared for murderer at the start of the episode. This cannot be reassigned later in the episode. When run a TypeError is returned - Assignment to constant variable. 

// EPISODE 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// COMMENTS -->
// The variable declared for murderer is a let variable at the start of the episode. This can be reassigned later in the episode. 
// In the constant function declareMurderer the murderer is reassigned using the keyword let - this is a block scope. 
// The first verdict calls declareMurderer so will read The murderer is Mrs Peacock. The second verdict does not call declareMurderer and so will read the murderer is Professor Plum.

// EPISODE 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//     let suspectThree = 'Colonel Mustard';
//     return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// COMMENTS -->
// The suspects are declared initially using the keyword let which has block scope and they can be reassigned later in the program.
// Within the function declareAllSuspects, suspectThree is reassigned using the keyword let. So the return for the first log of the constant variable suspects will be: The suspects are Miss Scarlet, Professor Plum, Colonel Mustard. 
// The second log will read: Suspect three is Mrs Peacock. As the reassignment in the function has block scope. 


//  EPISODE 5

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// COMMENTS -->
// The log output will be The weapon is the Revolver. 
// This is because the mutable items within a constant object can be reassigned. 

// EPISODE 6

// let murderer = 'Colonel Mustard'; // block scope, can be reassigned

// const changeMurderer = function() {
//     murderer = 'Mr. Green'; // no keyword, refers to global murderer

//     const plotTwist = function() { // function is nested within another
//     murderer = 'Mrs. White'; // no keyword - refers to same variable as outer function
// }

//     plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// COMMENTS -->
//  The log output for verdict will be The murderer is Mrs White. 
// Murderer is assigned initially with the keyword let so can be reassigned later. Within the function changeMurderer, the murderer is assigned to Mr Green and then as part of the plotTwist function within changeMurder it is assigned to Mrs White and then called. No keyword is used when the variable murderer is assigned within the functions so it refers to the same variable (global scope) and is modified.

// EPISODE 7

// let murderer = 'Professor Plum'; // can be reassigned / block scope

// const changeMurderer = function() {
//     murderer = 'Mr. Green'; // no key word - global scope therefore can be changed anywhere 

//     const plotTwist = function() { //nested function
//         let murderer = 'Colonel Mustard'; // block scope, let keyword used so only accessible within plotTwist function and nested

//     const unexpectedOutcome = function() {
//         murderer = 'Miss Scarlet'; // no key word so modifies variable from global scope
//     }

//     unexpectedOutcome();
//     }

//     plotTwist();
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// COMMENTS -->
//  no keyword is used when the variable is assigned in the function changeMurderer which is what is called before declareMurderer and the use of the console.log. The log output will read The murderer is Mr. Green.

// EPISODE 8 
// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';  

//     const plotTwist = function(room) {
//         if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//         }

//         const unexpectedOutcome = function(murderer) {
//             if (scenario.murderer === murderer) {
//                 scenario.weapon = 'Candle Stick';
//             }
//     }

//     unexpectedOutcome('Colonel Mustard');
//     }

//     plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// COMMENTS -->
// The changeScenario function changes the scenario murderer to Mrs Peacock and the room to dining room. The plotTwist calls with the argument dining room which matches the scenario room as changed. The unexpectedOutcome is called with Col. Mustard as the argument which matches the scenario murderer property so the weapon property reassigns to candle stick. When declareWeapon is called the output of the console log is The weapon is Candle Stick.

// EPISODE 9 

// let murderer = 'Professor Plum'; // block scope // can be reassigned

// if (murderer === 'Professor Plum') { 
//     let murderer = 'Mrs. Peacock'; // let keyword so block scope within if statement
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// COMMENTS -->
// The murderer is Prof. Plum because the new variable within the if statement uses the let keyword and so is only accesible within the block of the if statement. When declareMurderer is called it returns the global murderer variable - prof plum. 


