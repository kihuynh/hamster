import { Hamster } from './hamster.js';

export class Cage {
  constructor(name) {
    this.hammie = new Hamster(name);
  }

  waterLevel(){
    setInterval(() => {
      if (this.hammie.thirst > 0) {
        this.hammie.thirst--;
      }
    }, 5000);
  }

  activityLevel(){
    setInterval(() => {
      if (this.hammie.exercise > 0) {
        this.hammie.exercise--;
      }
    }, 5000);
  }

  poopLevel() {
    setInterval(() => {
      if (this.hammie.poop > 0) {
        this.hammie.poop--;
      }
    }, 4000);
  }

}
