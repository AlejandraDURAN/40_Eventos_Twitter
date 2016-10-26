
var caja = document.getElementById("caja");
caja.addEventListener("click", agregarLista);
var contenedor = document.getElementById("contenedor");

function agregarLista (){
	var text = document.createElement("input");
	text.setAttribute("placeholder","Añade tu lista :D");
	var button = document.createElement("button");
	button.setAttribute( "type","button");
	button.setAttribute( "class","btn btn-success");
	button.textContent = "Guardar"
	var cajita = document.createElement("div");
	cajita.setAttribute("class","tupper");
	cajita.appendChild(text);
	cajita.appendChild(button);
	contenedor.appendChild(cajita);
button.addEventListener("click",agregartarjeta);

function agregartarjeta (){
	if (text.value == ""|| text.value== null){
        alert ("No has escrito nada, no puedes añadir una lista");
   }else{
   	text.parentNode.removeChild(text);
   	button.parentNode.removeChild(button);
   	var titulo= document.createElement("h4");
	titulo.innerHTML = text.value;
	 cajita.appendChild(titulo);
	 
	var intarjeta =document.createElement("button");
    intarjeta.setAttribute( "class","btn btn-info");
    intarjeta.setAttribute("value","Crear tarjeta");
    intarjeta.innerHTML ="Añadir";
    cajita.appendChild(intarjeta);
    var conttarjeta = document.createElement("textarea");
    cajita.appendChild(conttarjeta);

    intarjeta.addEventListener("click",tarjetita);
    
    function tarjetita(){
    	var content = document.createElement("p");
    	content.innerHTML=conttarjeta.value;
    	titulo.setAttribute("class","");
    	cajita.appendChild(content);
    	titulo.value ="";
    }
}


}



}