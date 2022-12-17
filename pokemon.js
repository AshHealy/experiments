write a javascript class that represents the attributes of a pokemon

class Pokemon {
  constructor(name, type, hp, attack, defense, moves = [], species = '') {
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.moves = moves;
    this.species = species;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getType() {
    return this.type;
  }
  setType(type) {
    this.type = type;
  }
  getHP() {
    return this.hp;
  }
  setHP(hp) {
    this.hp = hp;
  }
  getAttack() {
    return this.attack;
  }
  setAttack(attack) {
    this.attack = attack;
  }
  getDefense() {
    return this.defense;
  }
  setDefense(defense) {
    this.defense = defense;
  }
  getMoves() {
    return this.moves;
  }
  setMoves(moves) {
    this.moves = moves;
  }
  getSpecies() {
    return this.species;
  }
  setSpecies(species) {
    this.species = species;
  }
}