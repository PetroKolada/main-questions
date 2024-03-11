const parent = document.querySelector("#parent")

parent.addEventListener("click", (event) => {
    Array.from(parent.children).map((element) => {
        element.classList.remove("active")
    })
    event.target.closest(".tab").classList.add("active")
})