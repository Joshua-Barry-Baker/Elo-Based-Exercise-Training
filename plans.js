planDaly100 = (pressUps, sitUps, squats) => {
    planHeader = "Daly 100";
    planIntro = "Complete a set of each exercise in order for how many reps displayed. Only go to failure if you can't complete a set or are on the final set! Don't take rests go set to set press ups > sit ups > Squats > press ups > so on! "
    targetReps = {};
    sets = {};
    maxSets = 5;
    let display ="<ul>";

    //# Sets Press ups
    sets.pressUps = Math.floor(100/pressUps.reps.mid);
    if (sets.pressUps === 0){
        sets.pressUps = 1;
        targetReps.pressUps = pressUps.reps.mid;

        planHeader += "+";
        display += `<li>Push yourself! Try to get more than ${targetReps.pressUps} Press ups in one set!</li>`;
    } else if (sets.pressUps < maxSets){
        let pressUpsBonusReps = 100 % pressUps.reps.mid;
        targetReps.pressUps = 100;

        display += `<li>${sets.pressUps} sets of ${pressUps.reps.mid} press ups and one set of ${pressUpsBonusReps}</li>`;
    } else {
        sets.pressUps = maxSets;
        targetReps.pressUps = sets.pressUps * pressUps.reps.mid;

        display += `<li>${sets.pressUps} sets of ${pressUps.reps.mid} press ups, for a total of ${targetReps.pressUps}. Continue final set to failure!</li>`;
    }
    //# Sets Sit ups
    sets.sitUps = Math.floor(100/sitUps.reps.high);
    if (sets.sitUps === 0){
        sets.sitUps = 1;
        targetReps.sitUps = sitUps.reps.high;

        planHeader += "+";
        display += `<li>${sets.pressUps} sets of ${pressUps.reps.mid} press ups, for a total of ${targetReps.pressUps}. Continue final set to failure!</li>`;

    } else if (sets.sitUps < maxSets){
        let sitUpsBonusReps = 100 % sitUps.reps.high;
        targetReps.sitUps = 100;

        display += `<li>${sets.sitUps} sets of ${sitUps.reps.high} sit ups and one set of ${sitUpsBonusReps}</li>`;

    } else {
        sets.sitUps = maxSets;
        targetReps.sitUps = sets.sitUps * sitUps.reps.high;

        display += `<li>${sets.sitUps} sets of ${sitUps.reps.high} sit ups, for a total of ${targetReps.sitUps}. Continue final set to failure!</li>`;
    }
    //# Sets Squats
    sets.squats = Math.floor(100/squats.reps.high);
    if (sets.squats < maxSets){
        let squatsBonusReps = 100 % squats.reps.high;
        targetReps.squats = 100;

        planHeader += "+";
        display += `<li>${sets.squats} sets of ${squats.reps.high} squats and one set of ${squatsBonusReps}</li>`;

    } else {
        sets.squats = maxSets;
        targetReps.squats = sets.squats * squats.reps.high;

        display += `<li>${sets.squats} sets of ${squats.reps.high} squats, for a total of ${targetReps.squats}. Continue final set to failure!</li>`;
    }
    display += "</ul>"; //To close the list
    document.getElementById("contentH1").innerHTML = planHeader; //Displays name of plan to user
    document.getElementById("contentPlanIntro").innerHTML = planIntro; //Displays the intro/instructions to the user
    document.getElementById("contentPlan").innerHTML = display; //Displays the plan to user
    return(targetReps, sets);
}
logResults = () => {
    //User input tbd
    console.log("Please enter how many reps you completed!")
    let completedPressUps = 15; //make user input
    console.log(completedPressUps);

    let completedSitUps = 20; //make user input
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