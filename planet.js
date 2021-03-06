'use strict'

module.exports = class Planet {
    
    constructor({name, population}) {
        if(population == "unknown"){
            population = 0;
        }
        population = (parseInt(population));
        this.name = name;
        this.population = population;
    }

    // Somme de la population du tableau d'objets Planet passés en paramètre
    static countPlanetsPopulation(planets){
        return planets.reduce(
            (population, planet) => population + planet.population, 0
        );
    }

    // En fonction de la population de la planète, 
    // on affiche un message différent
    display(planet){
        if(planet.population > 999999){
            console.log(
                `Planet ${ planet.name } is a busy planet of ${ planet.population} inhabitants!`
            );
        } else if (planet.population > 99999) {
            console.log(
                `Planet ${ planet.name } is a booming planet of ${ planet.population} souls.`
            );
        } else if (planet.population > 9999) {
            console.log(
                `Planet ${ planet.name } is a growing colony of ${ planet.population} settlers.`
            );
        } else if (planet.population > 0) {
            console.log(
                `Planet ${ planet.name } is a small settlement of ${ planet.population} outsiders.`
            );
        } else {
            console.log(
                `Planet ${ planet.name } is lonely, no one lives here ! Maybe you want to have an adventure ?`
            );
        }
    }
}