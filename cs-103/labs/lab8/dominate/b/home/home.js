function check(){
    let age = document.getElementById("age").value;  
    if (Number(age) >= 18){
        //below, I used querySlector which allows similar syntax as css for the sleector. It returns the first instance of th element 
        // with the specific tag name, id or class according to the DOM (document obkect model) and the tree structure accoridng to how 
        // I arranged the tags. 
        
        // I built the webiste with one universal div contianer wrapping both the nav and the main tags 
        //Howveer, this universal div also wraps the header. Assuming the div wrapping the nav and main tags woul dimply 
        // i'd have to re-evaluate the css and re-implement. But, I can just use querySelector ijnstead without changing anything 
        // and WHILE also abidding by the instructions of referencing the div contaoner that wraps the nav and main tags
        document.querySelector("#container nav").style.visibility = "visible"; 
        document.querySelector("#container main").style.visibility = "visible"; 
    } 
}