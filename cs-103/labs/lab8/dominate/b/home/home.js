function check(){
    let age = document.getElementById("age").value;  
    if (Number(age) >= 18){
        document.querySelector("#container nav").style.visibility = "visible"; 
        document.querySelector("#container main").style.visibility = "visible"; 
    } 
}