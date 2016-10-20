class Actor {
  constructor (name, age) {
    this.name=name;
    this.age=age;
  }
  addCast(newActors) {
    this.actors = this.actors.concat(newActors);
  }
}

export {Actor}
