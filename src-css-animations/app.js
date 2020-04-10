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
 * @description Validate Username
 * @param {elem} Username to validate
 */

validateUser = (elem) => {

    if (elem.length >= 4) {
        return  {
            validation: true
        }
    }
    return {
        validation: false,
        errorType: 'username',
        errorMessage: 'The Username must have at least 4 Characters'
    }
}

/**
* @description Validate E-Mail Adress
* @param {elem} Email Adress to validate
*/

validateEmail = (elem) => {

    if (elem.length >= 8 && elem.includes('@')) {
        return {
            validation: true
        }
    }

    return {
        validation: false,
        errorType: 'email',
        errorMessage: 'Please enter a valid E-Mail'
    }

}

/**
 * @description Validate the Password
 * @param {elem} Password to validate
 */

validatePassword = (elem) => {

    if (elem.length >= 8) {
        return {
            validation: true
        } 
    }
    return {
        validation: false,
        errorType: 'password',
        errorMessage: 'Your password should have eight characzers'
    }

}

/**
* @description Validate User Input
*/

validateUserInput = () => {

    const userinput = getInputValue();

    const userValidation = validateUser(userinput.username)
    const emailValidation = validateEmail(userinput.email)
    const passwordValidation = validatePassword(userinput.password)

    

    let errors = [userValidation.errorType, emailValidation.errorType, passwordValidation.errorType]
    console.log(errors)


    if (userValidation.validation && emailValidation.validation && passwordValidation.validation) {
        console.log('Register OK')
    } else {
        
        for (error of errors) {
            let inputClass = document.querySelector(`.input__icon__${error}`);
            inputClass.classList.toggle('swiggle__error__shake')
        }   
    }
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
    validateUserInput();
})