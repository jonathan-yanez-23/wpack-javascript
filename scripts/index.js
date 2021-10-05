console.log("index.js")

window.onload = function(){
    // Variable que indica que vista esta activa
    var showView = "landingexplain";
    document.getElementById("button_home").addEventListener("click", function(){
        if(showView == "landingexplain"){
            alert("ya estas aqui");
        }
        else{
            showView = "landingexplain";
            document.getElementsByClassName("landingexplain")[0].style.display = '';
            document.getElementsByClassName("landinglist")[0].style.display = "none";
            document.getElementsByClassName("landingdetail")[0].style.display = "none";
        }
    });

    document.getElementById("button_list").addEventListener("click", function(){
        if(showView == "landinglist"){
            alert("ya estas aqui");
        }
        else{
            showView = "landinglist";
            document.getElementsByClassName("landingexplain")[0].style.display = 'none';
            document.getElementsByClassName("landinglist")[0].style.display = "block" ;
            document.getElementsByClassName("landingdetail")[0].style.display = "none"
            List.fillList(arrayPokemon);
        }
    });
    
}