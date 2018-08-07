export class Pandemic {
  constructor (name) {
    this.name = name;
    this.outbreakCounter = 1;
    this.cities = { Portland :10, Beaverton:10, Bend:10, Corvallis:10, Salem:10}
  }

  setOutbreak() {
    setInterval(() => {
      this.outbreakCounter++;
    }, 30000)
  }

  cureOutbreak() {
    this.outbreakCounter--
  }

  didTheOutbreakTakeOver() {
    if (this.outbreakCounter <  5) {
      return false;
    } else {
      return true;
    }
  }

  getCitiesStatus() {
    for (let key in this.cities) {
      if (this.cities.hasOwnProperty(key)) {
        console.log( key+"-->"+this.cities[key]);
      }
    }
  }

  portlandInfectionSpead(){
    if (this.cities.Portland >= 6) {
      break
    } else if (this.cities.Portland > 4 && this.cities.Portland < 7){
      this.cities.Salem -= 1
      this.cities.Corvallis -= 1
      this.cities.Bend -= 1
     }
   } else if (this.cities.Portland > 2 && this.cities.Portland < 5{
      this.cities.Salem -= 1.5
      this.cities.Corvallis -= 1.5
      this.cities.Bend -= 1.5
     }
   } else if (this.cities.Portland > 0 && this.cities.Portland < 3{
      this.cities.Salem -= 2
      this.cities.Corvallis -= 2
      this.cities.Bend -= 2
     }
  }
}
