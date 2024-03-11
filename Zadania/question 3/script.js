const keyboard = document.querySelector(".keyboard")
const insideKeyboard = document.querySelector("#insideKeyboard")
const CapsLock = document.querySelector("#capsLockButton")
const Space = document.querySelector("#spaceButton")
const BackSpace = document.querySelector("#backSpaceButton")
const keys = document.querySelectorAll(".key")

let CapsToggle = true

keyboard.addEventListener("click", (event) => {
    if (event.target.classList.contains("key") && event.target.textContent != "Space" && event.target.textContent != "CapsLock" && event.target.textContent != "BackSpace") {
        insideKeyboard.value += event.target.textContent
    }
})

CapsLock.addEventListener("click", (event) => {
    if (CapsToggle === true) {
        Array.from(keys).map((element) => {
            element.textContent.toUpperCase()
        })
    } else {
        Array.from(keys).map((element) => {
            element.textContent.toLowerCase()
        })
    }
})