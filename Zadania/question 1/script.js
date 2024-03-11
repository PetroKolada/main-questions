const ButtonList = document.querySelector("#menu")
const TabList = document.querySelector(".tabs")

ButtonList.addEventListener("click", (event) => {
    event.preventDefault()
    Array.from(ButtonList.children).map((element) => {
        element.classList.remove("active")
    })
    Array.from(TabList.children).map((element) => {
        element.classList.remove("active")
    })
    event.target.classList.add("active")
    TabList.children[Array.from(ButtonList.children).indexOf(event.target)].classList.add("active")
})