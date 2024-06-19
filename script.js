
const list1 =  document.getElementById("list");
const text1 = document.getElementById("text");

function addTask(){
    if(text1.value===""){
        alert("You must type something!");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=text.value;
        list1.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    text1.value=" ";

}

list1.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
  

    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        
}

},false);
