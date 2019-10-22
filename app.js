'use strict'

const axios = require('axios');
let Planet = require('./planet.js');

const fetchThesePlanets = async (...numbers) => {
    let planets = axios.get('https://swapi.co/api/planets')
    .then(response => {
        let planetsTab = [];
        console.log("==========================================");
        numbers.forEach(function(nb){
            let planet = new Planet(response.data.results[nb]);
            if(planet.population == "unknown"){
                planet.population = 0;
            }
            planet.population = (parseInt(planet.population));
            if(planet.population > 999999){
                console.log(
                    `You asked for planet ${ planet.name }, a busy planet with ${ planet.population} inhabitants!`
                );
            } else if (planet.population > 99999) {
                console.log(
                    `You asked for planet ${ planet.name }, a booming planet of ${ planet.population} souls.`
                );
            } else if (planet.population > 9999) {
                console.log(
                    `You asked for planet ${ planet.name }, a growing colony of ${ planet.population} settlers.`
                );
            } else if (planet.population > 0) {
                console.log(
                    `You asked for planet ${ planet.name }, a small settlement of ${ planet.population} outsiders.`
                );
            } else {
                console.log(
                    `You asked for planet ${ planet.name }, no one lives here ! Maybe you want to have an adventure ?`
                );
            }
            planetsTab.push(planet);
        });
    console.log(
        ` These planets have a total of ${Planet.countPlanetsPopulation(planetsTab)} inhabitants.`
        );
    })
    .catch(error => {
        console.log(error)
    });
}

const fetchAllPlanets = async () => {
    let planets = axios.get('https://swapi.co/api/planets')
    .then(response => {
        let planetsTab = [];
        console.log("==========================================");
        response.data.results.forEach(function(p){
            let planet = new Planet(p);
            planet.display(planet);
            planetsTab.push(planet);
        });
    console.log(
        ` These planets have a total of ${Planet.countPlanetsPopulation(planetsTab)} inhabitants.`
        );
    })
    .catch(error => {
        console.log(error)
    });
}

fetchThesePlanets(0, 1, 2);
fetchThesePlanets(3, 4);
fetchAllPlanets();
