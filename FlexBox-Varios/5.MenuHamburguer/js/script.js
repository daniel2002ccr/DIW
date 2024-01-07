function ocultarYMostrarMenu() {
    var links = document.getElementById("links");

    if (window.innerWidth <= 600) {

        if (links.classList.contains("block")) {
            links.classList.remove("block");
        
        }
         else {
            links.classList.add("block");
        }
    }
}

function menu() {
    var links = document.getElementById("links");

    if (window.innerWidth > 600) {
        links.style.display = "flex";
    } 
    
    else {
        links.style.display = "none";
    }
}

window.onresize = function() {
    menu();
    if (window.innerWidth < 600) {
        window.location.reload();
    }
};

menu();