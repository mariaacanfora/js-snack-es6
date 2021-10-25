const bikesList = [
    {
        name: "Bianchi",
        weight: 7
    },

    {
        name: "Carrera",
        weight: 6.5
    },

    {
        name: "Olympia",
        weight: 8
    },

    {
        name: "T Red",
        weight: 7.6
    },

    {
        name: "Piaggio",
        weight: 6.8
    },
]

weightList = createWeightList(bikesList);
minWeightBike = findLightestBike(weightList);

const mainContainer = document.querySelector(".container");
mainContainer.innerHTML = `<h1 class="text-light" style = "margin: 200px 0"> La bici ${bikesList[minWeightBike].name} è la più leggera con ${bikesList[minWeightBike].weight}kg</h1>`;













/************************************************/
/* FUNCTIONS */
/************************************************/

/**
 * Restituisce un array coi pesi delle bici
 * 
 * @param {array} bikesList - array di oggetti, ognuno dei quali rappresenta una bici
 * @returns 
 */
function createWeightList(bikesList) {
    let weightList = [];
    for (let i = 0; i < bikesList.length; i++) {

        const bike = bikesList[i];
        let {weight} = bike;
        //console.log(weight);

        weightList.push(weight);
    };

    return weightList;
}


/**
 * Restituisce l'indice dell'oggetto a cui corrisponde il peso minore di tutti
 * 
 * @param {array} weightList - array di numeri
 * @returns 
 */
function findLightestBike(weightList) {
    let minWeightIndex = weightList.findIndex((element, index) => element === Math.min(...weightList));
    //console.log(minWeightIndex);

    return minWeightIndex;
}