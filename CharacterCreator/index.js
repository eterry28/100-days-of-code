class Character {
    #level = 1;
    #strength = 10;
    #dexterity = 10;
    #stamina = 10
    #creds = 100;
    #health = 100;
    attributes = new Array();
    
    
    constructor(name){
      this.name = name;
    }
    speak(){
      console.log(`${this.name} says, "Hello."`);
    }
  }
  
  class Rouge extends Character {
    speak(){
      console.log(`${this.name} says, "Where shall I begin?"`);
    }
  }

  class Attribute {
      #name = "";
      #base = 10;
      #modifier = 0;
      #bonus = 0;

      constructor(name, base = 10, mod = 0, bonus = 0){
          this.#name = name;
          this.#base = base;
          this.#modifier = mod;
          this.#bonus = bonus;
      }

      toString(){
          return {"name":this.#name, "base":this.#base, "mod":this.#modifier, "bonus":this.#bonus};
      }
  }
  
  
  
  