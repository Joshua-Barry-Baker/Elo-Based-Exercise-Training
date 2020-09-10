const createExercise = (name, reps, weight, ratioEMG) => {
    return{
        name,
        reps: {
            high,
            mid,
            low
        },
        weight: {
            high,
            mid,
            low
        },
        ratioEMG: {
            backUpper,
            backLower,
            glutes,
            hams,
            quads,
            calfs,
            chest,
            biceps,
            triceps,
            forarms,
            core
        }
    }
}
let bodyWeight = 70;
pressUps = createExercise(
    'Press ups', 
    {high: 14, mid: 8, low: 4 }, 
    {high: bodyWeight*0.77, mid: bodyWeight*0.67, low: bodyWeight*0.57},
    {glutes: 5, quads:5, core:10, chest:40, triceps:40}
    );
console.log(pressUps);