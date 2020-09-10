class Exercise {
    constructor(name, reps, weight, ratioEMG){
        this.name = name;
        //Reps
//        console.log(reps.high);
        this.reps = {
            high: reps.high,
            mid: reps.mid,
            low: reps.low
        }
        //Weight
        this.weight = {
            high: weight.high,
            mid: weight.mid,
            low: weight.low
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

pressUps = new Exercise(
    'Press ups', 
    {high:14, mid: 8, low: 4},
    {high:bodyWeight*0.77, mid:bodyWeight*0.67, low:bodyWeight*0.57},
    {chest:50, triceps:50});
console.log(pressUps);