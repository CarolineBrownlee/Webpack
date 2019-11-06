import contactFormHtml from "./contactForm"


// 1. Reference to dom
// 2. Event listener
// 3. Get data
// 4. Html Representation
// 5. Render to dom


const formContainer = document.querySelector("#container")

const formToDom = contactFormHtml()
console.log(formToDom)
formContainer.innerHTML = formToDom

const submitButton = document.querySelector("#BTN")
submitButton.addEventListener("click", event => {
    if (event.target.id.includes("BTN")) {
        console.log("this is the button")
    }
})

