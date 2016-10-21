
	function todoList(){
        var item = document.getElementById("todoInput").value;
        if (item == ""|| item == null){
        alert ("No has escrito ninguna tarea, ingresala por favor");
       return false;
   }
        var text = document.createTextNode("  " + item + "  ");
        var newItem = document.createElement("li");
        newItem.setAttribute("class","cajita");
        var checkbox= document.createElement("input");
        checkbox.type="checkbox";
        checkbox.value=1;
        newItem.appendChild(checkbox);
        newItem.appendChild(text);
         var trash = document.createElement("span");
        trash.setAttribute("class","fa fa-trash fa-1x");
        newItem.appendChild(trash);
        document.getElementById("todoList").appendChild(newItem);
        checkbox.onclick = function (){
            if(checkbox.checked == true){
         text.parentElement.setAttribute("class","tachado"); 
        }else {
            text.parentElement.setAttribute("class","cajita");
        }
    }
        trash.onclick = function (){
         newItem.parentElement.removeChild(newItem); 
        }
        
}


