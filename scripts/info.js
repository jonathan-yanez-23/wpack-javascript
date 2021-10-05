console.log("info.js");

class Pokemon{
    constructor(name, idPkdex, baseExperience, height, weight, urlPicture, types){
        this._name = name;
        this._idPkdex = idPkdex;
        this._baseExperience = baseExperience;
        this._height = height;
        this._weight = weight; 
        this._urlPicture = urlPicture;
        this._types = types;
    }
    
    get name(){
        return this._name;
    }
    get idPkdex(){
        return this._idPkdex;
    }
    get baseExperience(){
        return this._baseExperience;
    }
    get height(){
        return this._height;
    }
    get weight(){
        return this._weight;
    }
    get types(){
        return this._types;
    }
    get urlPicture(){
        return this._urlPicture;
    }


}


// Array para guardar los pokemon
var arrayPokemon = [];

// Cogemos 25 pokemon de la API (del 100 al 125, p.e.)
for(let i=100; i<125; i++){
    fetch("https://pokeapi.co/api/v2/pokemon/"+i+"/")
    .then(res => res.json())
    .then(res => {
        namePoke = res.forms[0].name;
        idPkdex = res.id;
        baseExperience = res.baseExperience;
        height = res.height;
        weight = res.weight;
        urlPicture = res.sprites.front_default;
        types = res.types.map(x => {return x.type.name});
        let newPoke = new Pokemon(namePoke, idPkdex, baseExperience, height, weight, urlPicture, types);
        arrayPokemon.push(newPoke);
    });
}

// Tras esto, se tiene la informacion necesaria de los pokemon