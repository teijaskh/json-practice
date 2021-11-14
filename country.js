function loadCountry() {
    fetch('https://restcountries.com/v3.1/all')
        .then(Response => Response.json())
        .then(data => showCountry(data))
}

loadCountry();

function showCountry(allCountry) {
    const divCounDeta = document.getElementById('countrydetails');
    for (const country of allCountry) {

        const containerDiv = document.createElement('div');
        console.log(country);
        const p = document.createElement('p');
        p.innerText = country.name.official;
        containerDiv.appendChild(p);

        const p2 = document.createElement('p');
        p2.innerText = country.capital;
        containerDiv.appendChild(p2);

        divCounDeta.appendChild(containerDiv);
        containerDiv.classList = 'styler';
    }
}