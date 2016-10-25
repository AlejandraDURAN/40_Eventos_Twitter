
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
	contenedor.appendChild(text);
	contenedor.appendChild(button);

button.addEventListener("click",agregartarjeta);

function agregartarjeta (){
	if (text.value == ""|| text.value== null){
        alert ("No has escrito nada, no puedes añadir una lista");
   }else{
   	var titulo= document.createElement("span");
	titulo.innerHTML = text.value;
	var cajita =document.createElement("div");
	cajita.appendChild(titulo);
	contenedor.appendChild(cajita);
	cajita.setAttribute("class","tupper")
    var intarjeta = document.createElement("input");
    intarjeta.setAttribute("type", "button");
    intarjeta.setAttribute( "class","btn btn-info");
    intarjeta.setAttribute("value","Crear tarjeta");
    cajita.appendChild(intarjeta);

    intarjeta.addEventListener("click",tarjetita);
    function tarjetita(){
    	var content = document.createElement("textarea");
    	content.innerHTML=text.value;
    	cajita.appendChild(content);
    }
}


}



}