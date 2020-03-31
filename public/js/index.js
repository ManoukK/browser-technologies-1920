document.getElementsByClassName("togglebutton").addEventListener("click", function(){
    if(document.getElementsByClassName("body").className == "hide")
       document.getElementsByClassName("body").className = "show";
    else
       document.getElementsByClassName("body").className = "hide";
    })

document.getElementsByClassName("togglebutton").addEventListener("touchstart", function(){
    if(document.getElementsByClassName("body").className == "hide")
        document.getElementsByClassName("body").className = "show";
    else
        document.getElementsByClassName("body").className = "hide";
    })

document.getElementsByClassName("togglebutton").addEventListener("keypress", function(){
    if(document.getElementsByClassName("body").className == "hide")
        document.getElementsByClassName("body").className = "show";
    else
        document.getElementsByClassName("body").className = "hide";
    })

if (document.execCommand('copy') == false) {
    document.getElementById("urllink").style.display = "none";
    document.getElementById("buttonClickUrl").style.display = "none";
}

function copy() {
    let textarea = document.getElementById("urllink");
    textarea.select();
    document.execCommand("copy");
}
