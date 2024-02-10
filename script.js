function love(){
var name1 = document.getElementById("nameOne").value;
var name2 = document.getElementById("nameTwo").value;
if(name1.length<=2 || name2.length<=2){
    alert("Enter atleast 3 characters");
}
else{
    var random = Math.floor(Math.random()*100)+1;
    document.getElementById("print").innerHTML = name1 + " and " + name2 + " = " + random + "% " + "of love";
}
if(random>=10 && random<=50){
    document.getElementById("statement").innerHTML = "Good Relationship";
}
else if(random>=51 && random<=100){
    document.getElementById("statement").innerHTML = "Lovely Rewlationship";
}
}