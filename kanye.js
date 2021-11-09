function kanyeQuote() {
    fetch('https://api.kanye.rest/')
        .then(Response => Response.json())
        .then(data => showQuote(data))
};

kanyeQuote();

function showQuote(pata) {
    const blkQuote = document.getElementById('kanye-Quote');
    blkQuote.innerHTML = pata.quote;
}