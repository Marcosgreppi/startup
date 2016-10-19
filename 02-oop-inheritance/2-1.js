import {eventEmitter} from "./classEventEmitter";
import {Logger} from './classLogger';
import {movieClass} from './classMovie';
import {Actor} from './classActor';


let terminator = new classMovie ("Terminator", "1984", "107 minutes");
  console.log(movie1.title);
  console.log(movie1.year);
  console.log(movie1.duration);
  movie1.play();

let elCuerpo = new classMovie ("El Cuerpo", "2012", "106 minutes");
  console.log(movie2.title);
  console.log(movie2.year);
  console.log(movie2.duration);
  movie2.play();


let Social = {
  share: function (friendName) {
    console.log("share", this.title, "with", friendName)
  },
  like: function (friendName) {
    console.log(friendName, "likes", this.title)
  }
}

Object.assign(movie1,Social);

let arnold = new Actor('Arnold Schwarzenegger', 50);
let otherCast = [
  new Actor('Paul Winfield', 50),
  new Actor('Michael Biehn', 50),
  new Actor('Linda Hamilton', 50)
];

terminator.addCast(arnold);
terminator.addCast(otherCast);
console.log("testing "+terminator);
