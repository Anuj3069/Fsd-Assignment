var dict={
    "India":{"Delhi":["South Delhi","North Delhi","New Delhi"],
    "Bihar":["Patna","Darbangha","Sivan"],
    "Uttar Pradesh":["Varanasi","Luncknow","Kanpur"]
},

"Australia":{"South Australia":["Adelaide","Murray bridge","whyalla"],
"Western Australia":["perth","albany","broome"],
"victoria":["Melbourne", "geelong","ballarat"]},


"USA":{"California":["los angeles", "san francisco","san diego"],
"texas":["Abbott", "Houston", "san antonio"],
"virginia":["hampton","Alexandria","roanoke"]},
}
window.onload=function(){
    var country=document.getElementById("a"),
    state=document.getElementById("b"),
    district=document.getElementById("c");
    for(var countrya in dict){
    country.options[country.options.length]=new Option(countrya,countrya);
    }
    country.onchange=function(){
    state.length=1
    district.length=1
    if(this.selectedIndex<1)
    return;
    for( var statea in dict[this.value]){
    state.options[state.options.length]=new Option(statea,statea);
    }
    }
    country.onchange();
    state.onchange=function(){
    
    district.length=1
    if(this.selectedIndex<1)
    return;
    var districta=dict[country.value][this.value];
    for(var i=0;i<districta.length;i++)
    {
    district.options[district.options.length]=new Option(districta[i],districta[i]);
    }
    }

    }

