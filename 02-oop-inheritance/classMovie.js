import {eventEmitter} from './classEventEmitter';

class classMovie extends eventEmitter {
  constructor(title, year, duration) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
  }
  play(){
    super.emit(this, 'play');
  }
  pause(){
    super.emit(this, 'pause');
  }
  resume(){
    super.emit(this, 'resume');
  }
  addCast(newActors) {
    this.actors = this.actors.concat(newActors);
  }
}

export {classMovie}
