function modechange(){
    let container = document.getElementById("firstele");
    if(container.className == "container"){
        container.className = "lightcontainer";
    }
    else if(container.className == "lightcontainer"){
        container.className = "container";
    }
    let mode = document.getElementById('mode');
    if(mode.innerText == "LIGHT MODE"){
        mode.innerText = "DARK MODE"
    }
    else if(mode.innerText == "DARK MODE"){
        mode.innerText = "LIGHT MODE"
    }
}
