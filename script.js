function mytimer(){
    var d = new Date();
    document.getElementById("timer").innerHTML = d;
}
var mouse = setInterval(mytimer, 1000);
