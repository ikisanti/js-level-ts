
//! 1 how to use a debugger
// let number = 8;
// console.log(number)
// debugger
// console.log('main')

//! 2. clousure with event handler 
function callClick() {
    let count = 0
    document.getElementById("btn").addEventListener(
        "click", () => {
            console.log(count++)
        }
    )
}

callClick()