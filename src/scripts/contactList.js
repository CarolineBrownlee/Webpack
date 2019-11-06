import contactHtmlRep from "./contact";
import API from "./contactCollection";

// Function that takes a single contact as an argument,
const contactToDom = (contact) => {  
    // grabs the <article> html element, stores it in a variable, 
    const contactContainer = document.querySelector(".container")
        // and renders to dom.
        contactContainer.innerHTML += contact
    }

export default contactToDom


