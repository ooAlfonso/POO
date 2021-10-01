class Pokemon {

    #name = ""; 
    #type = ""
    #evolutions = [];

    constructor(name, type, evolutions) {
        /*
            Se utiliza "this" para hacer referencia al propietario
            de la función que la está invocando o en su defecto, al
            objeto donde dicha función es un método.
        */
        this.#name = name;
        this.#type = type;
        this.#evolutions = evolutions;
    }
    set name(name){
        this.#name = name;
    }
    set type(type) {
        this.#type = type;
    }
    set evolutions(evolutions){
        this.#evolutions;
    }
    get name(){
        return this.#name;
    }
    get type(){
        return this.#type;
    }
    get evolutions(){
        return this.#evolutions;
    }


    attack() {
        // mostramos un mensaje se utuliza ` para poder
        // utilizar literalString.
        return `${this.name}, esta atacando`;
    }

    evolve(evolution = 0) {
        // Validamos que la opción exista
        const EVOLVE = this.#evolutions[evolution] || "";
        let message = "No puedo evolucionar";

        // Si EVOLVE es diferente a "" cambiamos el nombre
        // del pokemon y mostramos un mensaje indicando la
        // evolución.
        if (EVOLVE) {
            message = `${this.#name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE;
        }

        // mostramos un mensaje
        return message;
    }
}

class TypeFire extends Pokemon{
    constructor(name, evolutions){
        super(name,'fire', evolutions);
    }
    message(){
        return `hola soy ${this.name} y soy de tipo fuego`
    }
}
const charmander = new TypeFire("Charmander", "Fire", ["Charmeleon", "Charizar"]);
console .log(charmander.message());
charmander.name = 'gato'





// Creando instancia para charmander
const Charmander = new Pokemon("Charmander", "Fire", ["Charmeleon", "Charizar"]);

// Creando instancia para Squirtle
const Squirtle = new Pokemon("Squirtle", "Water", ["Wartortle", "Blastoise"]);
