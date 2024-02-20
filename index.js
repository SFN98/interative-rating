
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
                numbers[i].value
                choice.innerText=numbers[i].innerText
            }
        }) 
        
    }
}
chososenumber()

/// This is display the tanks section
function displaypopup(){
    let form = document.querySelector("form")
    submit = document.querySelector("input")
    form.addEventListener("submit", (event)=>{
        event.preventDefault()
        let popup = document.querySelector("section")
        popup.classList.add("visible")
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