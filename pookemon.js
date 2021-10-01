// la primera letra del  nombre de la clase debe ir en mayusculas 
class Pokemon{
    name = '';
    tipo = '';
    evolutions = [];



    constructor(name, type, evolutions){
        this.name = name;
        this.type = type;
        this.evolutions = evolutions;
    }

    attack(){
        return `${this.name}, esta atacando`;
    }
    evolve(evolution = 0){
        //valida que la opcion exista
        // or (||) operardor ternario
        // debo nombrar una constante
        const EVOLVE = this.evolutions[evolution] || '';
        let message = 'no puede evolucionar'

        if (EVOLVE) {
            message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE;
        }
        return message;
    }

}
const Charmander = new Pokemon("Charmander", "fire", ['charmeleon', 'charizard']);
const Squirtle = new Pokemon('Squirtle', 'water', ['wartortle']);
console.log(`${Charmander.name} es de tipo ${Charmander.type}`);
console.log(Charmander.attack());
console.log(Charmander.evolve(0));
console.log(`${Charmander.name} es de tipo ${Charmander.type}`);



console.log(`${Squirtle.name} es de tipo ${Squirtle.type}`);
console.log(Squirtle.attack());
console.log(Squirtle.evolve(0));
console.log(`${Squirtle.name} es de tipo ${Squirtle.type}`);

