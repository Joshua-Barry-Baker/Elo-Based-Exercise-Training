planDaly100 = (pressUps, sitUps, squats) => {
    //let plan = {};
    //Number of sets needed for pressups
    let pressUpsSets = Math.floor(100/pressUps.reps.mid);
    let pressUpsBonusReps = 100 % pressUps.reps.mid;
    console.log(`${pressUpsSets} sets of ${pressUps.reps.mid} press ups and one set of ${pressUpsBonusReps}`);
    //# Sets situps
    let sitUpsSets = Math.floor(100/sitUps.reps.high);
    let sitUpsBonusReps = 100 % pressUps.reps.high;
    console.log(`${sitUpsSets} sets of ${sitUps.reps.mid} sit ups and one set of ${sitUpsBonusReps}`);
    //# Sets Squats
    let squatsSets = Math.floor(100/squats.reps.high);
    let squatsBonusReps = 100 % squats.reps.high;
    console.log(`${squatsSets} sets of ${squats.reps.high} squats and one set of ${squatsBonusReps}`);
    //User input tbd
    let completedPressUps = 5; //make user input
    completedPressUps += 100;
    console.log(completedPressUps);

    let completedSitUps = 5;
    completedSitUps += 100;
    console.log(completedSitUps);

    let completedSquats = 5;
    completedSquats += 100;
    console.log(completedSquats);
    //Plan adjustments (basic). On a second note, this method would be best for single set rep targets
    console.log(`BEFORE press up reps mid ${pressUps.reps.mid}, sit up reps high ${sitUps.reps.high}, squats reps high ${squats.reps.high}`)
    pressUps.reps.mid += Math.floor(1+(completedPressUps-100) / (pressUpsSets + 2));
    sitUps.reps.high += Math.floor(1+(completedSitUps-100) / (sitUpsSets + 2));
    squats.reps.high += Math.floor(1+(completedSquats-100) / (squatsSets + 2));
    console.log(`AFTER press up reps mid ${pressUps.reps.mid}, sit up reps high ${sitUps.reps.high}, squats reps high ${squats.reps.high}`)
    //requires save
}