const contactFormHtml = () => {
    return `
    <section>
        <h1>Add A New Contact</h1>
        <fieldset>
            <label for="contact">Name</label>
            <input type="name" name="name" id="name">
      
            <label for="contact">Phone</label>
            <input type="phone" name="phone" id="phone>
    
            <label for="contact">Address</label>
            <input type="address" name="address" id="address">
        </fieldset>
        <button id="BTN">Submit</button>
    </section>
   `
}

export default contactFormHtml


