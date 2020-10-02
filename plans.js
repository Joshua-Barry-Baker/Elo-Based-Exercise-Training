planDaly100 = (pressUps, sitUps, squats) => {
    planHeader = "Daly 100";
    planIntro = "Complete a set of each exercise in order for how many reps displayed. Only go to failure if you can't complete a set or are on the final set! Don't take rests go set to set press ups > sit ups > Squats > press ups > so on! "
    targetReps = {};
    sets = {};
    maxSets = 5;
    let display ="<ul>";

    //# Sets Press ups
    sets.pressUps = Math.floor(100/pressUps.reps.bodyWeight);
    if (sets.pressUps === 0){
        sets.pressUps = 1;
        targetReps.pressUps = pressUps.reps.bodyWeight;

        planHeader += "+";
        display += `<li>Push yourself! Try to get more than ${targetReps.pressUps} Press ups in one set!</li>`;
    } else if (sets.pressUps < maxSets){
        let pressUpsBonusReps = 100 % pressUps.reps.bodyWeight;
        targetReps.pressUps = 100;

        display += `<li>${sets.pressUps} sets of ${pressUps.reps.bodyWeight} press ups and one set of ${pressUpsBonusReps}</li>`;
    } else {
        sets.pressUps = maxSets;
        targetReps.pressUps = sets.pressUps * pressUps.reps.bodyWeight;

        display += `<li>${sets.pressUps} sets of ${pressUps.reps.bodyWeight} press ups, for a total of ${targetReps.pressUps}. Continue final set to failure!</li>`;
    }
    //# Sets Sit ups
    sets.sitUps = Math.floor(100/sitUps.reps.bodyWeight);
    if (sets.sitUps === 0){
        sets.sitUps = 1;
        targetReps.sitUps = sitUps.reps.bodyWeight;

        planHeader += "+";
        display += `<li>${sets.pressUps} sets of ${pressUps.reps.bodyWeight} press ups, for a total of ${targetReps.pressUps}. Continue final set to failure!</li>`;

    } else if (sets.sitUps < maxSets){
        let sitUpsBonusReps = 100 % sitUps.reps.bodyWeight;
        targetReps.sitUps = 100;

        display += `<li>${sets.sitUps} sets of ${sitUps.reps.bodyWeight} sit ups and one set of ${sitUpsBonusReps}</li>`;

    } else {
        sets.sitUps = maxSets;
        targetReps.sitUps = sets.sitUps * sitUps.reps.bodyWeight;

        display += `<li>${sets.sitUps} sets of ${sitUps.reps.bodyWeight} sit ups, for a total of ${targetReps.sitUps}. Continue final set to failure!</li>`;
    }
    //# Sets Squats
    sets.squats = Math.floor(100/squats.reps.bodyWeight);
    if (sets.squats < maxSets){
        let squatsBonusReps = 100 % squats.reps.bodyWeight;
        targetReps.squats = 100;

        planHeader += "+";
        display += `<li>${sets.squats} sets of ${squats.reps.bodyWeight} squats and one set of ${squatsBonusReps}</li>`;

    } else {
        sets.squats = maxSets;
        targetReps.squats = sets.squats * squats.reps.bodyWeight;

        display += `<li>${sets.squats} sets of ${squats.reps.bodyWeight} squats, for a total of ${targetReps.squats}. Continue final set to failure!</li>`;
    }
    display += "</ul>"; //To close the list
    document.getElementById("contentH1").innerHTML = planHeader; //Displays name of plan to user
    document.getElementById("contentPlanIntro").innerHTML = planIntro; //Displays the intro/instructions to the user
    document.getElementById("contentPlan").innerHTML = display; //Displays the plan to user
    //Sets displays and sets up the user input
    userInput = `
    <input id="pressUpsUserInput" placeholder="Enter Press Ups #${targetReps.pressUps}">
    <input id="sitUpsUserInput" placeholder="Enter Sit Ups #${targetReps.sitUps}">
    <input id="squatsUserInput" placeholder="Enter Squats #${targetReps.squats}">
    <button onclick="logResults()">Log Results</button>
    `
    document.getElementById("contentUserInput").innerHTML = userInput;

    return(targetReps, sets);
}
logResults = () => {
    //Takes user input
    let completedPressUps = document.getElementById("pressUpsUserInput").value;
    let completedSitUps = document.getElementById("sitUpsUserInput").value;
    let completedSquats = document.getElementById("squatsUserInput").value;
    //Required for delta in reps
    let pressUpsBefore = pressUps.reps.bodyWeight;
    let sitUpsBefore = sitUps.reps.bodyWeight;
    let squatsBefore = squats.reps.bodyWeight;
    //Plan adjustments (basic). On a second note, this method would be best for single set rep targets
    pressUps.reps.bodyWeight += Math.floor(1+(completedPressUps-targetReps.pressUps) / (sets.pressUps + 2));
    sitUps.reps.bodyWeight += Math.floor(1+(completedSitUps-targetReps.sitUps) / (sets.sitUps + 2));
    squats.reps.bodyWeight += Math.floor(1+(completedSquats-targetReps.squats) / (sets.squats + 2));
    //Shows the delta in reps to the user
    document.getElementById("contentChange").innerHTML =
        `
        <h2> Change in reps </h2>
        <p> Press ups: ${pressUps.reps.bodyWeight - pressUpsBefore} </p>
        <p> Sit ups: ${sitUps.reps.bodyWeight - sitUpsBefore} </p>
        <p> Squats: ${squats.reps.bodyWeight - squatsBefore} </p>
        <button onclick="planDaly100Save(pressUps, sitUps, squats)">Save Effort!</button>
        `;
    
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