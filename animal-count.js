function animalCount(miles) {
    const animalDensity10 = 10;
    const animalDensity20 = 50;
    const animalRestDensity = 100;

    if (miles <= 10) {
        const count = miles * animalDensity10;
        return count;
    } else if (miles <= 20) {
        const firstDenseAnimals = 10 * animalDensity10;
        const restMiles = miles - 10;
        const secodDenseAminals = restMiles * animalDensity20;
        const totalAnimals = firstDenseAnimals + secodDenseAminals;
        return totalAnimals;
    } else {
        const firstDenseAnimals = 10 * animalDensity10;
        const secodDenseAminals = 10 * animalDensity20;
        const restMiles = miles - 20;
        const restDenseAnimals = restMiles * animalRestDensity;
        const totalDenseAnimals = firstDenseAnimals + secodDenseAminals + restDenseAnimals;
        return totalDenseAnimals;
    }
}

const getCountedAnimals = animalCount(35);
console.log(getCountedAnimals);