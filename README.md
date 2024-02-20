# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Java Script


### What I learned

```css
.proud-of-this-css {
  .thanks-block{
    position: absolute;
    left:50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    border:none;
    background-color: hsl(213, 19%, 18%);
    height: clamp(40vh, 10vw, 30vh);
    width: clamp(19vw, 10vw, 30vw);
    padding: 1%;
    display: none;
    
}
.thanks-block.visible{
    display: flex;
}
}
```
```js
const proudOfThisFunc = () => {
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
```


### Continued development

Java script

### Useful resources

## Author

- Frontend Mentor - [@SFN98](https://www.frontendmentor.io/profile/SFN98)
