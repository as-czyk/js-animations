/* Global Variables */

//Swiggle Effect
const swiggleButton = document.querySelector('#confirm__button')
const swiggleInput = document.querySelector('#input__field')

//Flip Effect
const flashcard = document.querySelector('.flashcard')

//Type Effect
const typeInput = document.querySelector('#type__effect')
const typeButton = document.getElementById('type__start')
const typeText = '"This is the Type Effect"'

//Progress Effect
const progressButton = document.querySelector('#progress__button')

//Hamburger Effect
const hamburgerMenu = document.querySelector('.hamburger__menu')

//REGISTER VALIDATOR
const inputFields = document.querySelectorAll('.input__style')

const inputUsername = document.querySelector('#username')
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password')

const registerButton = document.querySelector('#registerButton')





/* Helper Functions */ 

/**
 * @description Type Writer Effect
 */

let i = 0
type = () => {

    if (i < typeText.length) {
        let letter = typeText.charAt(i)
        typeInput.textContent += letter
        i++
        setTimeout(type, 200)
    } else  {
        setTimeout(() => {
            typeInput.textContent = " "
            i = 0
        , 2000})
    }
}

/**
 * @description Progress Effect
 */
let iUpdate = 0
updateProgress = () => {

    if (iUpdate == 0) {
        let width = 1
        let progress = document.querySelector('#progress')

        let id = setInterval(update, 20)

        function update () {

            if (width > 100) {
                clearInterval(id)
                i = 0
                progress.style.width = 0
            } else {
                progress.style.width = width + "%"
                width++
            }
        }
    }     
}

/**
* @description Get Value From Input Fields
*/
getInputValue = () => {

    let username = inputUsername.value
    let email = inputEmail.value
    let password = inputPassword.value

    return {
        username: username,
        email: email,
        password: password
    }
}

/**
* @description Validate User Input
*/

validateUserInput = () => {

    const userinput = getInputValue();
    

}






/* Event Listeners */ 
swiggleButton.addEventListener('click', () => {
    swiggleInput.classList.add('swiggle__error__shake')
    let x = setInterval(function(){
        swiggleInput.classList.remove('swiggle__error__shake')
        clearInterval(x)
    }, 2000)
})

flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('card__flipped')
});

typeButton.addEventListener('click', () => {
    type();
})

progressButton.addEventListener('click', () => {
    updateProgress();
})

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('mobile__menu__opened')
})

registerButton.addEventListener('click', () => {
    getInputValue();
})