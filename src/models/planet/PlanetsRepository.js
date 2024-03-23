export default class PlanetsRepository {
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