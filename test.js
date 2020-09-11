//ELO Test
console.log('### ELO Test Win ###');
let a = 2000;
let b = 1000;

console.log(`a = ${a} and b = ${b}`);
let newA = newELO(a,b);
console.log(`newA elo rating ${newA}`);
let test = {};
test.eloWin = (newA > a) ? true : false;

console.log('### ELO Test Lose ###');
a = 1000;
b = 2000;

console.log(`a = ${a} and b = ${b}`);
newA = newELO(a,b);
console.log(`newA elo rating ${newA}`);
let testELOLose;
test.elolose = (newA < a) ? true : false;

console.log(`Win ${test.eloWin} Lose ${test.eloLose}`)
console.log("")

