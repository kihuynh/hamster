export class Hamster {
  constructor(name){
    this.name = name;
    this.thirst = 10;
    this.exercise = 10;
    this.poop = 10;
  }

  waterBottle() {
    if ( this.thirst < 10 ) {
      this.thirst++;
    }
  }

  hamsterWheel() {
    if ( this.exercise < 10 ) {
      this.exercise ++;
    }
  }

  toiletPoopies() {
    if ( this.poop < 10) {
      this.poop++;
    }
  }

}
