const teamsList = [
    {
        name: "Ironman team",
        points: 0,
        fouls: 0
    },

    {
        name: "Captain America team",
        points: 0,
        fouls: 0
    },

    {
        name: "Black Widow team",
        points: 0,
        fouls: 0
    },

    {
        name: "Thor team",
        points: 0,
        fouls: 0
    },

    {
        name: "Hulk team",
        points: 0,
        fouls: 0
    },
]

for (let i = 0; i < teamsList.length; i++) {
    const team = teamsList[i];

    team.points = randomNumber(0, 50); 
    team.fouls = randomNumber(0, 20);
    
}

console.log(teamsList);

let teamsPartialList = [];
for (let i = 0; i < teamsList.length; i++) {
    const team = teamsList[i];

    const {name, fouls} = team;
    teamsPartialList.push({name, fouls});
    
}

console.log(teamsPartialList);

















/*************************************************************************/
/* FUNCTIONS */
/*************************************************************************/
/**
 * Returns a random number between minValue and maxValue
 * @param {number} minValue rappresenta il limite inferiore (incluso) dell'intervallo entro cui voglio generare il numero random
 * @param {number} maxValue rappresenta il limite superiore (incluso) dell'intervallo entro cui voglio generare il numero random
 */
 function randomNumber(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

