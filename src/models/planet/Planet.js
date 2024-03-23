export default class Planet {
  constructor(name, description, data, population, galaxy, solarSystem, coordinates, rulerName, rulerTitle, color1, color2) {
    this.id = this.generateId();
    this.name = name;
    this.desc = description;
    this.dataConquista = data;
    this.population = population;
    this.localizacao = {
      galaxy: galaxy,
      solarSystem: solarSystem,
      coordinates: coordinates,
    };
    this.governante = {
      name: rulerName,
      title: rulerTitle,
    };
    this.cores = {
      color1: color1,
      color2: color2,
    };
  }

  generateId() {
    return Math.floor(Math.random() * 1000);
  }
} 