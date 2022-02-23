class Traveler {
    constructor(name){
    this._name = name;
    this._food = 1;
    this._isHealty = true;
    }
    hunt(){
     return this._food+=2
    }    
    eat(){
        
        if(this._food > 0){
            this._food -=1
            return this._isHealty = true
        }else{
            return this._isHealty = false
        }
        
    }

}
class Hunter extends Traveler {
    constructor(name, _isHealty){
    super(name, _isHealty)
    this._food = 2
    }

    hunt(){
        return this._food+=5
    }
    eat(){
           
        if(this._food > 1){
          this._food -=2
        return this._food
        }else if(this._food < 2){
          this._food -=1
          this._isHealty = false
        return this._food && this._isHealty
        }
        
    }
    giveFood(x, y){

        if(this._food > y){
            this._food -= y
            x._food += y
        }

    }
} 

class Doctor extends Traveler {
    
    constructor(name, _isHealty, _food){

        super(name, _isHealty, _food)
    }

    heal(x){
        if(x._isHealty === false){
            x._isHealty = true
        }
    }


}

class Wagon {
    constructor(capacity){
    this._capacity = capacity;
    this._passageiros = [];
    }
    getAvailableSeatCount(){
       
        return this._capacity
    }
    join(macacolossauro){
    
        if(this._capacity > 0){
        this._passageiros.push(macacolossauro)
        return this._capacity-=1
        }else{
        return "ta lotado"
        }
    }
    shouldQuarantine(){
        
    for(let i = 0; i < this._passageiros.length; i++){
        
        if(wagon._passageiros[i]._isHealty == false){
            return true
        }       

    }
            return false
    }
    totalFood(){
        let comidinha = 0
        for(let i = 0; i < this._passageiros.length; i++){
            comidinha += this._passageiros[i]._food
        }
        return  comidinha
    }
}

// Cria uma carroça que comporta 4 pessoas
let wagon = new Wagon(4);
// Cria cinco viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
 
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
 
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
 
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
 
wagon.join(maude); // Não tem espaço para ela!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
 
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
 
sarahunter.hunt(); // pega mais 5 comidas
drsmith.hunt();
 
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
 
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan agora está doente (sick)
 
console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
drsmith.heal(juan);

console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
 
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // Ela só tem um, então ela come e fica doente
 
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);