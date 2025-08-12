//! 07-click-dom
//? "Create a function that loops through all the buttons on a web page 
//? and adds an event listener to each button.When clicked, it changes its text to 'Clicked!'"

const buttons = document.querySelectorAll('button')
console.log(buttons)

const activateButtons = () => {
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.textContent = "Clicked"
        })
    }
    )
}

activateButtons()