import {eventEmitter} from `./classEventEmitter`;
import {Logger} from `./classLogger`;
import {movieClass} from `./classMovie`;
import {Actor} from `./classActor`;
import {Social} from `./Social`;


let terminator = new classMovie (`Terminator`, `1984`, `107 minutes`);
  console.log(terminator.title);
  console.log(terminator.year);
  console.log(terminator.duration);
  terminator.play();
  terminator.on(`play`, mylogger.log);

let elCuerpo = new classMovie (`El Cuerpo`, `2012`, `106 minutes`);
  console.log(elCuerpo.title);
  console.log(elCuerpo.year);
  console.log(elCuerpo.duration);
  elCuerpo.play();
  elCuerpo.on(`play`, mylogger.log);

Object.assign(terminator,Social);

let Cast = [
  new Actor(`Arnold Schwarzenegger`, 50);
  new Actor(`Paul Winfield`, 50),
  new Actor(`Michael Biehn`, 50),
  new Actor(`Linda Hamilton`, 50)
];

terminator.addCast(Cast);
console.log(`testing `+ ${terminator});
