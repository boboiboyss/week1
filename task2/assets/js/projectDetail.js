document.addEventListener('DOMContentLoaded', function() {

let storeProject = JSON.parse(localStorage.getItem('myProject'))
const id = location.search.substring(4);
const detailProject = storeProject[id-1];
const {title, startDate, endDate, description, image, duration, listTech} = detailProject;

const newStartDate = new Date(startDate);
const yearStartDate = newStartDate.getFullYear();
const monthStartDate = newStartDate.getMonth();
const converMonthStart = newStartDate.toLocaleString('en-US', {month: 'long'});
const dateStartDate = String(newStartDate.getDate()).padStart(2, "0"); 
const formatStartDate = `${dateStartDate} ${converMonthStart.substring(0,3)} ${yearStartDate}`;

const newEndDate = new Date(endDate);
const yearEndDate = newEndDate.getFullYear();
const monthEndDate = newEndDate.getMonth();
const convertMonthEnd = newEndDate.toLocaleString('en-US', {month: 'long'});
const dateEndDate = String(newEndDate.getDate()).padStart(2, "0");
const formatEndDate = `${dateEndDate} ${convertMonthEnd.substring(0,3)} ${yearEndDate}`

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
        next += `<div><img src="./assets/img/${icon[i].toLowerCase()}.png" alt="image-nextjs" style="height: 20px; width: 20px" /> <span>${icon[i].concat(" ", "Js")}</span></div>`
     } else if(icon[i] === "TypeScript") {
        ts += `<div><img src="./assets/img/${icon[i].toLowerCase()}.png"  alt="image-ts" style="height: 20px; width: 20px"/> <span>${icon[i]}</span></div>`
     }
}

let temp = document.getElementById('project');
temp.innerHTML += `<div class="container-detail">
    <h1>${title}</h1>
    <div class="wrapper">
        <div class="left">
            <img src="${image}" alt="img-detail" />
        </div>
        <div class="right">
            <div class="date">
                <p>Duration</p>
                <div class="time">
                    <i class="fa-regular fa-calendar-days"></i>
                    <span>${formatStartDate} - ${formatEndDate}</span>
                </div>
                <div class="duration">
                    <i class="fa-solid fa-clock"></i>
                    <span>${duration}</span>    
                </div>
            </div>
            <div class="tech">
                <p>Technologies</p>
                <div class="list-tech">
                ${react} ${node} ${next}${ts}
                </div>
            </div>    
        </div>
    </div>
    <div class="desc">
        <p>${description}</p>
    </div>
    </div>
`
});