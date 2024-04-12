document.addEventListener('DOMContentLoaded', function() {


let storeProject = JSON.parse(localStorage.getItem('myProject'))
let url = JSON.parse(localStorage.getItem('url'));
const id = location.search.substring(4);
const detailProject = storeProject[id-1];
const {title, startDate, endDate, description, image, duration, listTech} = detailProject;

let tech = listTech.map(item => item.replace(",", "")).join(" ");
let icons = tech.split("Js");
let icon = icons.map(item => item.replace(/\s/g, ""));

let react = '';
let node = '';
let ts = '';
let next = '';

for(let i = 0; i < icon.length; i++){
     if(icon[i] === "React") {
        react += `<div><i class="fa-brands fa-${icon[i].toLowerCase()}"></i> <span>${icon[i].concat(" ", "Js")}</span></div>`
     } else if(icon[i] === "Node"){
        node += `<div><i class="fa-brands fa-${icon[i].toLowerCase()}"></i> <span>${icon[i].concat(" ", "Js")}</span></div>`
     } else if (icon[i] === "Next") {
        next += `<div><img src="./assets/img/${icon[i].toLowerCase()}.png" alt="image-nextjs" style="height: 20px; width: 20px" /> <span>${icon[i]}</span></div>`
     } else if(icon[i] === "TypeScript") {
        ts += `<div><img src="./assets/img/${icon[i].toLowerCase()}.png"  alt="image-ts" style="height: 20px; width: 20px"/> <span>${icon[i]}</span></div>`
     }
}

console.log(icons);

let temp = document.getElementById('project');
temp.innerHTML += `<div class="container-detail">
    <h1>${title}</h1>
    <img src="${url}" alt="img-detail" />
    <div class="date">
        <p>Duration</p>
        <span>${startDate} - ${endDate}</span>
        <span>${duration}</span>    
    </div>
    <div class="tech">
        <p>Technologies</p>
        ${react} ${node} ${next}${ts}
    </div>
    <div class="desc">
        <p>${description}</p>
    </div>
    </div>
`
});