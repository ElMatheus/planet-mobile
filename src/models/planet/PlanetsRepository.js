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
    return this.planets.find(planet => planet.id == id);
  }

  addPlanet(planet) {
    this.planets.push(planet);
  }

  remove(id) {
    this.planets = this.planets.filter(planet => planet.id !== id);
  }

  // updatePlanet(planet) {
  //   const planet = this.getPlanetById(planet.id);

  //   if (planet) {
  //     planet.name = planet.name;
  //     planet.description = planet.description;
  //     planet.image = planet.image;
  //   }

  //   return planet;
  // }


}



const repository = new PlanetsRepository();

planets.map((element) => {
  const planet = new Planet(element.name, element.desc, element.dataConquista, element.population, element.localizacao.galaxy, element.localizacao.solarSystem, element.localizacao.coordinates, element.governante.name, element.governante.title, element.cores.color1, element.cores.color2);
  repository.addPlanet(planet);
});


export default repository;