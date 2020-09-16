planDaly100 = (pressUps, sitUps, squats) => {
    //let plan = {};
    //Number of sets needed for pressups
    targetReps = {};
    maxSets = 5;
    let pressUpsSets = Math.floor(100/pressUps.reps.mid);
    if (pressUpsSets === 0){
        pressUpsSets = 1;
        targetReps.pressUps = pressUps.reps.mid;
        console.log(`Push yourself! Try to get more than ${targetReps.pressUps} Press ups in one set!`);
    } else if (pressUpsSets < maxSets){
        let pressUpsBonusReps = 100 % pressUps.reps.mid;
        targetReps.pressUps = 100;
        console.log(`${pressUpsSets} sets of ${pressUps.reps.mid} press ups and one set of ${pressUpsBonusReps}`);
    } else {
        pressUpsSets = maxSets;
        targetReps.pressUps = pressUpsSets * pressUps.reps.mid;
        console.log(`${pressUpsSets} sets of ${pressUps.reps.mid} press ups, for a total of ${targetReps.pressUps}. Continue final set to failure!`);
    }
    //# Sets situps
    let sitUpsSets = Math.floor(100/sitUps.reps.high);
    if (sitUpsSets === 0){
        sitUpsSets = 1;
        targetReps.sitUps = sitUps.reps.high;
        console.log(`Push yourself! Try to get more than ${targetReps.sitUps} Sit ups in one set!`);
    } else if (sitUpsSets < maxSets){
        let sitUpsBonusReps = 100 % sitUps.reps.high;
        targetReps.sitUps = 100;
        console.log(`${sitUpsSets} sets of ${sitUps.reps.high} sit ups and one set of ${sitUpsBonusReps}`);
    } else {
        sitUpsSets = maxSets;
        targetReps.sitUps = sitUpsSets * sitUps.reps.high;
        console.log(`${sitUpsSets} sets of ${sitUps.reps.high} sit ups, for a total of ${targetReps.sitUps}. Continue final set to failure!`);
    }
    //# Sets Squats
    let squatsSets = Math.floor(100/squats.reps.high);
    if (squatsSets < maxSets){
        let squatsBonusReps = 100 % squats.reps.high;
        targetReps.squats = 100;
        console.log(`${squatsSets} sets of ${squats.reps.high} squats and one set of ${squatsBonusReps}`);
    } else {
        squatsSets = maxSets;
        targetReps.squats = squatsSets * squats.reps.high;
        console.log(`${squatsSets} sets of ${squats.reps.high} squats, for a total of ${targetReps.squats}. Continue final set to failure!`);
    }
    //User input tbd
    console.log("Please enter how many reps you completed!")
    let completedPressUps = 30; //make user input
    console.log(completedPressUps);

    let completedSitUps = 50; //make user input
    console.log(completedSitUps);

    let completedSquats = 40; //make user input
    console.log(completedSquats);
    //Plan adjustments (basic). On a second note, this method would be best for single set rep targets
    console.log(`BEFORE press up reps mid ${pressUps.reps.mid}, sit up reps high ${sitUps.reps.high}, squats reps high ${squats.reps.high}`)
    pressUps.reps.mid += Math.floor(1+(completedPressUps-targetReps.pressUps) / (pressUpsSets + 2));
    sitUps.reps.high += Math.floor(1+(completedSitUps-targetReps.sitUps) / (sitUpsSets + 2));
    squats.reps.high += Math.floor(1+(completedSquats-targetReps.squats) / (squatsSets + 2));
    console.log(`AFTER press up reps mid ${pressUps.reps.mid}, sit up reps high ${sitUps.reps.high}, squats reps high ${squats.reps.high}`)
    //requires save
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
    console.log(pressUps)
    console.log(sitUps)
    console.log(squats)
}