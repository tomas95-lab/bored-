let api = 'https://www.boredapi.com/api/activity';
const activityP = document.getElementById("activity__p");

function makeAnAcitivity() {
    fetch(api)
        .then((response) => response.json())
        .then((data) => {
            activityP.innerHTML = data.activity;
        });
}

const create = document.getElementById("create");

create.addEventListener("click", makeAnAcitivity);

makeAnAcitivity();

