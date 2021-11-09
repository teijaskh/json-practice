function fiveUser() {
    fetch('https://randomuser.me/api/?results=5')
        .then(Response => Response.json())
        .then(data => showUser(data))
}

fiveUser();

function showUser(somanyusers) {

    const buddies = somanyusers.results;
    const users = document.getElementById('user');

    for (const user of buddies) {
        const p = document.createElement('p');
        p.innerText = user.email;
        users.appendChild(p);
    }
}