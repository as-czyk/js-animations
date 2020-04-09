/* Global Variables */
const swiggleButton = document.querySelector('#confirm__button')
const swiggleInput = document.querySelector('#input__field')

const flashcard = document.querySelector('.flashcard')

const typeInput = document.querySelector('#type__effect')
const typeText = 'This is the Type Effect'

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