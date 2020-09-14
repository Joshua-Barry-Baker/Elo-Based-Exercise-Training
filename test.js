let test = {};
//ELO Test
function testELO(){
    console.log('### ELO Test Win ###');
    let a = 2000;
    let b = 1000;

    console.log(`a = ${a} and b = ${b}`);
    let newA = newELO(a,b);
    console.log(`newA elo rating ${newA}`);
    test.eloWin = (newA > a) ? true : false;

    console.log('### ELO Test Lose ###');
    a = 1000;
    b = 2000;

    console.log(`a = ${a} and b = ${b}`);
    newA = newELO(a,b);
    console.log(`newA elo rating ${newA}`);
    test.elolose = (newA < a) ? true : false;

    console.log(`Win ${test.eloWin} Lose ${test.eloLose}`)
    console.log("")
}
//Storage Test
function testLocalStorage() {
    console.log("### Storage Test ###");
    localStorage.setItem("name", "John Doe");
    name = localStorage.getItem("name");
    console.log(localStorage);
    console.log(`${name} was set and returned from localStorage`);
    localStorage.removeItem("name");
    console.log(`${name}: should have been removed from localStorage`);
    console.log(localStorage);
    test.localStorageJohnDoe = (name === "John Doe") ? true : false;

    console.log("")
    console.log("### Test object store ###");
    localStorage.setItem("pressups", JSON.stringify(pressUps));
    objectTestStorage = JSON.parse(localStorage.getItem("pressups"));
    console.log(localStorage);
    console.log(objectTestStorage);
    console.log(`${objectTestStorage} was set and returned from localStorage`);
    localStorage.removeItem("pressups");
    console.log(`${objectTestStorage}: should have been removed from localStorage`);
    console.log(localStorage);
    test.localStoragePressups = (objectTestStorage.name === "Press ups") ? true : false;
}
