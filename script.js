// console.log("This is a external JavaScript")
function changetext(){
    const element = document.getElementById("text");
    element.innerHTML = "Modified text";
}

function changeColor(){
    const element = document.getElementById("colorBox");
    // element.style.color = "red";
    if(element.style.backgroundColor == "red"){
        element.style.backgroundColor = "green";
    }else{
        element.style.backgroundColor = "red";
    }
}
function updateValue(){
    const inputElement = document.getElementById("myInput");
    inputElement.value = "Modified value";
}
function removedElement(){
    const element = document.getElementById("removedText");
    element.parentNode.removeChild(element);
    // element.remove();

}