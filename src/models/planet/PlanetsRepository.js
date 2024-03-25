import Planet from './Planet';
import { planets } from '../../data/Words';


class PlanetsRepository {

  constructor() {
    this.planets = [];
  }

  getAll() {
    return this.planets;
  }

  getPlanetById(id) {
    return this.planets.find((planet) => planet.id == id);
  }

  addPlanet(planet) {
    this.planets.push(planet);
  }

  remove(id) {
    this.planets = this.planets.filter(planet => planet.id !== id);
  }

  updatePlanet(id , name, description, data, population, galaxy, solarSystem, coordinates, rulerName, rulerTitle, color1, color2) {
    const planetId = this.getPlanetById(id);
    if (planetId) {
      planetId.name = name;
      planetId.desc = description;
      planetId.dataConquista = data;
      planetId.population = population;
      planetId.localizacao.galaxy = galaxy;
      planetId.localizacao.solarSystem = solarSystem;
      planetId.localizacao.coordinates = coordinates;
      planetId.governante.name = rulerName;
      planetId.governante.title = rulerTitle;
      planetId.cores.color1 = color1;
      planetId.cores.color2 = color2;
    }
    console.log(planetId);
    return planetId;
  }


}



const repository = new PlanetsRepository();

planets.map((element) => {
  const planet = new Planet(element.name, element.desc, element.dataConquista, element.population, element.localizacao.galaxy, element.localizacao.solarSystem, element.localizacao.coordinates, element.governante.name, element.governante.title, element.cores.color1, element.cores.color2);
  repository.addPlanet(planet);
});


export default repository;