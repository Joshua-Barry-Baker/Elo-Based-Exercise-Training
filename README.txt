Using an ELO system a program can propperly respond to the strength gains progress that the user is showing.

the ELO system should be looking to take show the user a goal of two less reps than the mmr would dictate.
If the user beats mmr, their mmr will go up relative to how much they beat it.
say its all done with work down. the system wants to give 1000n per set of workdown via 10kg by 10reps. It will give a 'par' or 10kg at 8reps making the user mmr 800.
completing the par will 

//ELO Rating
performing rating A = (1 / 1 + 10 (Rating B / Rating A)/400)

//Recover (this will make workouts harder in later stages if the user has higher than 1000 elo)
Recover ELO/1000

//Workout reduction (WR)
(Stage > 1) ? (Stage * Recover) : 1
exercise / WR

