console.log("list.js")

class List{
    constructor() {}
    
    // Funcion que se encarga de rellenar la vista de lista con los pokemon con el
    // array de Pokemon que recibe por parametro
    static fillList(arrayPokemon){
        let listDiv = document.getElementsByClassName("landinglist")[0];
        if(listDiv.childElementCount !=0){
            console.log("ya tiene hijos");
            return;
        }
        for(let poke of arrayPokemon){
            // Creamos el nodo listelement y lo añadimos al div landinglist
            let listelement = document.createElement("div");
            listelement.classList.add("listelement"); 
            let listelement__title = document.createElement("h1");
            listelement__title.textContent = poke.name;
            listelement__title.classList.add("listelement__title");
            let listelement__img = document.createElement("img");
            listelement__img.classList.add("listelement__img");
            listelement__img.src = poke.urlPicture;
            listelement.id = poke.idPkdex;
            listelement.appendChild(listelement__title);
            listelement.appendChild(listelement__img);
            listDiv.appendChild(listelement);

            // Añadimos listener para la vista
            listelement.addEventListener("click", function(event){
                console.log(event.target.id);
                document.getElementsByClassName("landingexplain")[0].style.display = 'none';
                document.getElementsByClassName("landinglist")[0].style.display = "none";
                document.getElementsByClassName("landingdetail")[0].style.display = "block";
            });
        }
    }
}