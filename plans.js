planDaly100 = (pressUps, sitUps, squats) => {
    //let plan = {};
    //Number of sets needed for pressups
    targetReps = {};
    sets = {};
    maxSets = 5;
    sets.pressUps = Math.floor(100/pressUps.reps.mid);
    if (sets.pressUps === 0){
        sets.pressUps = 1;
        targetReps.pressUps = pressUps.reps.mid;
        console.log(`Push yourself! Try to get more than ${targetReps.pressUps} Press ups in one set!`);
    } else if (sets.pressUps < maxSets){
        let pressUpsBonusReps = 100 % pressUps.reps.mid;
        targetReps.pressUps = 100;
        console.log(`${sets.pressUps} sets of ${pressUps.reps.mid} press ups and one set of ${pressUpsBonusReps}`);
    } else {
        sets.pressUps = maxSets;
        targetReps.pressUps = sets.pressUps * pressUps.reps.mid;
        console.log(`${sets.pressUps} sets of ${pressUps.reps.mid} press ups, for a total of ${targetReps.pressUps}. Continue final set to failure!`);
    }
    //# Sets situps
    sets.sitUps = Math.floor(100/sitUps.reps.high);
    if (sets.sitUps === 0){
        sets.sitUps = 1;
        targetReps.sitUps = sitUps.reps.high;
        console.log(`Push yourself! Try to get more than ${targetReps.sitUps} Sit ups in one set!`);
    } else if (sets.sitUps < maxSets){
        let sitUpsBonusReps = 100 % sitUps.reps.high;
        targetReps.sitUps = 100;
        console.log(`${sets.sitUps} sets of ${sitUps.reps.high} sit ups and one set of ${sitUpsBonusReps}`);
    } else {
        sets.sitUps = maxSets;
        targetReps.sitUps = sets.sitUps * sitUps.reps.high;
        console.log(`${sets.sitUps} sets of ${sitUps.reps.high} sit ups, for a total of ${targetReps.sitUps}. Continue final set to failure!`);
    }
    //# Sets Squats
    sets.squats = Math.floor(100/squats.reps.high);
    if (sets.squats < maxSets){
        let squatsBonusReps = 100 % squats.reps.high;
        targetReps.squats = 100;
        console.log(`${sets.squats} sets of ${squats.reps.high} squats and one set of ${squatsBonusReps}`);
    } else {
        sets.squats = maxSets;
        targetReps.squats = sets.squats * squats.reps.high;
        console.log(`${sets.squats} sets of ${squats.reps.high} squats, for a total of ${targetReps.squats}. Continue final set to failure!`);
    }
    return(targetReps, sets);
}
logResults = () => {
    //User input tbd
    console.log("Please enter how many reps you completed!")
    let completedPressUps = 50; //make user input
    console.log(completedPressUps);

    let completedSitUps = 50; //make user input
    console.log(completedSitUps);

    let completedSquats = 50; //make user input
    console.log(completedSquats);
    //Plan adjustments (basic). On a second note, this method would be best for single set rep targets
    console.log(`BEFORE press up reps mid ${pressUps.reps.mid}, sit up reps high ${sitUps.reps.high}, squats reps high ${squats.reps.high}`)
    pressUps.reps.mid += Math.floor(1+(completedPressUps-targetReps.pressUps) / (sets.pressUps + 2));
    sitUps.reps.high += Math.floor(1+(completedSitUps-targetReps.sitUps) / (sets.sitUps + 2));
    squats.reps.high += Math.floor(1+(completedSquats-targetReps.squats) / (sets.squats + 2));
    console.log(`AFTER press up reps mid ${pressUps.reps.mid}, sit up reps high ${sitUps.reps.high}, squats reps high ${squats.reps.high}`)
}
planDaly100Save = (pressUps, sitUps, squats) => {
    localStorage.setItem("pressUps", JSON.stringify(pressUps));
    console.log("Press ups saved to localStorage");
    localStorage.setItem("sitUps", JSON.stringify(sitUps));
    console.log("Sit ups saved to localStorage");
    localStorage.setItem("squats", JSON.stringify(squats));
    console.log("Squats saved to localStorage");
}
loadLocalStorage = () => {
    pressUps = JSON.parse(localStorage.getItem("pressUps"));
    sitUps = JSON.parse(localStorage.getItem("sitUps"));
    squats = JSON.parse(localStorage.getItem("squats"));
    console.log(pressUps);
    console.log(sitUps);
    console.log(squats);
}