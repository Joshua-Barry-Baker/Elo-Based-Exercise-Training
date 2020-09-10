newELO = (a, b) => {
    expectedRatio = (1 /( 1 + 10^((a-b)/400)));
    aNew = a*expectedRatio
    return aNew;
};

/* //Test
let a = 2000;
let b = 1000;

console.log(`a = ${a} and b = ${b}`);
a = newELO(a,b);
console.log(`a new elo rating ${a}`);
*/