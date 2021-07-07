document.getElementById("button-checkbox").addEventListener("click",function(){
    if(this.checked){
       document.getElementById("text-title").innerHTML="Bulb ON"
       document.getElementById("bulb1").setAttribute("src","../Assignment_5/bulb-1-on.png")
        document.getElementById("bulb2").setAttribute("src","../Assignment_5/bulb-1-on.png")
        document.getElementById("bulb3").setAttribute("src","../Assignment_5/bulb-1-on.png")
        document.getElementById("bulb4").setAttribute("src","../Assignment_5/bulb-1-on.png")
        document.getElementById("bulb5").setAttribute("src","../Assignment_5/bulb-1-on.png")
    }
    else{
        document.getElementById("text-title").innerHTML="Bulb OFF"
        document.getElementById("bulb1").setAttribute("src","../Assignment_5/bulb-1-off.png")
        document.getElementById("bulb2").setAttribute("src","../Assignment_5/bulb-1-off.png")
        document.getElementById("bulb3").setAttribute("src","../Assignment_5/bulb-1-off.png")
        document.getElementById("bulb4").setAttribute("src","../Assignment_5/bulb-1-off.png")
        document.getElementById("bulb5").setAttribute("src","../Assignment_5/bulb-1-off.png")
    }
})
