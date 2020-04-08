/**
* Defining global variables
*/

const countDays = document.querySelector('.counter__days p')
const countHours = document.querySelector('.counter__hours p')
const countMinutes = document.querySelector('.counter__minutes p')
const countSeconds = document.querySelector('.counter__seconds p')

//Dates
const oneDay = 1000 * 60 * 60 * 24
const oneHour = 1000 * 60 * 60
const oneMinute = 1000 * 60

/**
 * Helper Functions
*/

getTimeToEnd = () => {

    let dateNow = new Date()
    let dateEnd = new Date(Date.now() + oneDay * 239)

    let diff = dateEnd - dateNow;
    
    let day = Math.floor(diff / oneDay - 1)
    let hour = Math.floor(24 - dateNow.getHours())
    let minute = Math.floor(60  - dateNow.getMinutes())
    let second = Math.floor(60 - dateNow.getSeconds())

    return {
        days: day,
        hours: hour,
        minutes: minute,
        seconds: second
    }
}

setTimeToCounter = () => {
    let currentTimes = getTimeToEnd()
    
    countDays.firstChild.textContent = currentTimes.days
    countHours.firstChild.textContent = currentTimes.hours
    countMinutes.firstChild.textContent = currentTimes.minutes
    countSeconds.firstChild.textContent = currentTimes.seconds
}

resetTimerToCounter = () => {

    countDays.firstChild.textContent = 0
    countHours.firstChild.textContent = 0
    countMinutes.firstChild.textContent = 0
    countSeconds.firstChild.textContent = 0

}

countDown = () => {
    setInterval(() => {
        setTimeToCounter();
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    countDown();
})