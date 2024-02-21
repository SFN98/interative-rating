
/// This function let us to choose  a number
function chososenumber(){
    let numbers = document.querySelectorAll(".number div")
    
    for(let i=0; i<numbers.length;i++){
        numbers[i].addEventListener("click", ()=>{
            // Remove "active" class of all elements
            numbers.forEach(element => {
                element.classList.remove("active");
            });

            // Add "active" class of clicked element
            numbers[i].classList.toggle("active");

                let choice = document.querySelector("span")
            if(numbers[i].classList.contains("active")){
                choice.innerText=numbers[i].innerText
            }
            
        }) 
        
    }
}
chososenumber()

/// This is display the tanks section
function displaypopup(){
    let choice = document.querySelector("span")
    let submit = document.querySelector("input[type='submit']")
    let form = document.querySelector("form")
    form.addEventListener("submit", (event)=>{
        event.preventDefault()
        
       if(choice.innerText!=="0"){
        let popup = document.querySelector("section")
        popup.classList.add("visible")
       }else{
        hidepopup()
        error()
        setTimeout(hideerror, 3000)
       }
            
        
    })
    

}

displaypopup()

/// this function is used to hide the thanks section
function hidepopup(){
    let body= document.querySelector("body")
    let popup = document.querySelector("section")
    body.addEventListener("click", ()=>{
        popup.classList.remove("visible")
    })
}
hidepopup()

function error(){
    let error= document.querySelector(".error")
    error.classList.add("show") 
}

function hideerror(){
    let error= document.querySelector(".error")
    error.classList.remove("show")

}