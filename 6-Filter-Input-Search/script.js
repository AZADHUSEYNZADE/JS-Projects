const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItem = [];
getData();

filter.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();

  result.innerHTML = "";
  results.forEach((user) => {
    const li = document.createElement("li");
    listItem.push(li);
    console.log(user);
    li.innerHTML = `
        <img src= "${user.picture.large}"alt="pic" />
        <div class="user-info">
            <h4>${user.name.first}</h4>
            <p>${user.location.country},${user.location.city}</p>
        </div>
    `;
    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItem.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
