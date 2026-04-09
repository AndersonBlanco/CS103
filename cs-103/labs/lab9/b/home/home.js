
function check(){

    let age = Number(document.getElementById("age").value);
    let debugStatement = document.getElementById("debugStatetment")

    if (Number.isNaN(age)){ //the Number (a built in object native to Javascript) has the .isNaN method that checks if the argument is of type "NaN" (whcich means the argument is "Not A Number")
        let txt = ("Please enter a number, noto a string")
        debugStatement.innerText = txt
        return 
    } else if(age < 0){
        debugStatement.innerText = "Negative numbers are invalid"
    }else if(!Number.isInteger(age)){ //!condition is the same as saying if condiotion == false becaiuse when condition == false, !condition == true and thus passes the if case 

    }else if(age >= 18 && age <= 120){
        //below, I used querySlector which allows similar syntax as css for the sleector. It returns the first instance of th element 
        // with the specific tag name, id or class according to the DOM (document obkect model) and the tree structure accoridng to how 
        // I arranged the tags. 
        
        // I built the webiste with one universal div contianer wrapping both the nav and the main tags 
        //Howveer, this universal div also wraps the header. Assuming the div wrapping the nav and main tags woul dimply 
        // i'd have to re-evaluate the css and re-implement. But, I can just use querySelector ijnstead without changing anything 
        // and WHILE also abidding by the instructions of referencing the div contaoner that wraps the nav and main tags

        document.querySelector("#container nav").style.visibility = "visible"; 
        document.querySelector("#container main").style.visibility = "visible"; 

        debugStatement.innerText = ""; 
        document.getElementById("validateAgeContainer").style.display = "none"; 
        debugStatement.style.display = "none"; 

    
    }else{
        debugStatement.innerText = "Invalid age, you must be between 18 and 120 years of age";

       

    }

    return true;
}

