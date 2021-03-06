class Exercise {
    constructor(name, reps, weight, ratioEMG, bodyWeight){
        this.name = name;
        //Reps
        this.reps = {
            high: reps.high,
            mid: reps.mid,
            low: reps.low,
            bodyWeight: bodyWeight.reps
        }
        //Weight
        this.weight = {
            high: weight.high,
            mid: weight.mid,
            low: weight.low,
            bodyWeight: bodyWeight.weight
        }
        //ratioEMG
        this.ratioEMG = {
            backUpper: ratioEMG.backUpper,
            backLower: ratioEMG.backUpper,
            glutes: ratioEMG.glutes,
            hams: ratioEMG.hams,
            quads: ratioEMG.quads,
            calfs: ratioEMG.calfs,
            chest: ratioEMG.chest,
            biceps: ratioEMG.biceps,
            triceps: ratioEMG.triceps,
            forarms: ratioEMG.forarms,
            core: ratioEMG.core
        }
    }
}
let bodyWeight = 70;

let pressUps = new Exercise(
    'Press ups', 
    {high:5, mid: 3, low: 2},
    {high:Math.floor(bodyWeight*0.77), mid:Math.floor(bodyWeight*0.67), low:Math.floor(bodyWeight*0.57)},
    {chest:50, triceps:50},
    {reps:2, weight:Math.floor(bodyWeight*0.67)});

console.log(pressUps);

let sitUps = new Exercise(
    'Sit ups', 
    {high:7, mid: 5, low: 3},
    {high:Math.floor(bodyWeight*0.551), mid:Math.floor(bodyWeight*(0.551/1.33)), low:Math.floor(bodyWeight*(0.57/2))},
    {core:100},
    {reps:3, weight:Math.floor(bodyWeight*(0.57/2))});

console.log(sitUps);

let squats = new Exercise(
    'Squats',
    {high:7, mid:5, low:3},
    {high:bodyWeight + 5, mid:bodyWeight + 3, low:bodyWeight},
    {quads:50, glutes:40, hams:10},
    {reps:5, weight:bodyWeight});

console.log(squats);