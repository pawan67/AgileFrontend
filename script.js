const Task1 = document.getElementById("task1");
const Task4 = document.getElementById("task4");
const Task8 = document.getElementById("task8");
const Task9 = document.getElementById("task9");
const MenuBar = document.getElementById("MenuBar");
fetch("./assets/data.json")
  .then((res) => res.json())
  .then((res) => {
    console.log(res.tasks[0].assets);
    Task1.innerText = `${res.tasks[0].assets[0].asset_description}`;
    Task4.src = `${res.tasks[0].assets[3].display_asset_docs}`;
    Task8.src = `${res.tasks[0].assets[7].display_asset_url}`;
    Task9.src = `${res.tasks[0].assets[8].display_asset_video}`;
  });

function toggleMenu() {
  MenuBar.classList.toggle("openMenu");
}
