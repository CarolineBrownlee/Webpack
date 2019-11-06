// html representation for one contact

const contactHtmlRep = (contact) => {
    return `
        <section>
            <h2>Name: ${contact.name}</h2>
            <p>Phone: ${contact.phone}</p>
            <p>Address: ${contact.address}</p>
        </section>
    `
}

export default contactHtmlRep