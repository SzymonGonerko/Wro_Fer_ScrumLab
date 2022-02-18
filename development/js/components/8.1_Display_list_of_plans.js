const table = document.querySelector(".subSec__table tbody")

const plans = JSON.parse(window.localStorage.getItem('plans'));

let index = 0;

plans.forEach(el => {
    console.log(el);
    index++;

    const tr = document.createElement("tr");
    table.appendChild(tr);

    const id = document.createElement("td");
    id.innerText = `${index}`;

    const name = document.createElement("td");
    name.innerText = el.title;

    const description = document.createElement("td");
    description.innerText = el.description;

    const weekNumber = document.createElement("td");
    weekNumber.innerText = el.weekNumber;

    const icons = document.createElement("td");
    description.classList.add('description')
    icons.classList.add('icons');

    tr.appendChild(id);
    tr.appendChild(name);
    tr.appendChild(description);
    tr.appendChild(weekNumber);
    tr.appendChild(icons);

    const edit = document.createElement("i");
    const bin = document.createElement("i");

    edit.classList.add('fas');
    edit.classList.add('fa-edit');
    bin.classList.add('fas');
    bin.classList.add('fa-trash-alt');

    icons.appendChild(edit);
    icons.appendChild(bin);
});
