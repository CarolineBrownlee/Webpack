const API = {
    getJournalEntries() {
        return fetch(`${url}`)
            .then(response => response.json())
    },
    saveJournalEntry(journalEntryObject) {
        return fetch(`${url}`, { // Replace "url" with your API's URL
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journalEntryObject)
        })
        // .then(getAllJournalEntriesToDom)
    }
}

export default API