const table = document.querySelector(".subSecbSe__table tbody")

const arrRecipes = JSON.parse(window.localStorage.getItem('allRecipes'));

let index = 0;

arrRecipes.forEach(el => {
    console.log(el);
    index++;
    const tr = document.createElement("tr");
    table.appendChild(tr);
    const id = document.createElement("td");
    id.innerText = index;
    const name = document.createElement("td");
    name.innerText = el.title;
    const desctription = document.createElement("td");
    desctription.innerText = el.description;
    const icons = document.createElement("td");
    desctription.classList.add('description')
    icons.classList.add('icons')
    tr.appendChild(id);
    tr.appendChild(name);
    tr.appendChild(desctription);
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

