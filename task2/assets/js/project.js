const addProject = []

function handleProject(event) {

    event.preventDefault();
    let projectName = document.getElementById('lprojectName').value;
    let startDate = document.getElementById('lstart-date').value;
    let endDate = document.getElementById('lend-date').value;
    let description = document.getElementById('ldescription').value;
    let tech = document.getElementsByName('tech');
    let image = document.getElementById('lupload').files[0];
    let urlImage = URL.createObjectURL(image)

    
    let listTech = []
    for (let i = 0; i < tech.length; i++) {
        if (tech[i].checked === true) {
            listTech.push (tech[i].value);
        }
        // else if (tech[i].checked === false) {
        //     return alert('please check one of the techs')
        // }
    }

    if(projectName === "" || startDate === "" || endDate === "" || description === "" || urlImage === "") {
        return alert("Please complete the empty fields");
    } 
    
    addProject.push({
        projectName, startDate, endDate, description, urlImage, listTech
    })

   const temp = document.getElementById('card-project');
   addProject.map(item => {
        temp.innerHTML += `<div class='card-content'>
                <img src='${item.urlImage}' alt='img' style='height: 90px' />
                <p class='title-content'>${item.projectName}</p>  
                <span>durasi : ${item.startDate} - ${item.endDate}</span>
                <p class='description-content'>${item.description.substr(0, 80)}</p>
                <i class="fa-brands fa-google-play"></i>
                <i class="fa-brands fa-android"></i>
                <i class="fa-brands fa-java"></i>
                <div class='action'>
                <button>edit</button>
                <button style='margin-left : 3px'>delete</button>
                </div>
    </div>`

   })
//    temp.innerHTML = `<div class='card-content'>
//                 <img src='${image}' alt='img' />
//                 <p class='title-content'>${projectName}</p>  
//                 <span>durasi : ${startDate} - ${endDate}</span>
//                 <p class='description-content'>${description.substr(0, 120)}</p>
//                 <i class="fa-brands fa-google-play"></i>
//                 <i class="fa-brands fa-android"></i>
//                 <i class="fa-brands fa-java"></i>
//                 <div class='action'>
//                 <button>edit</button><button>delete</button>
//                 </div>
//     </div>`;

console.log(urlImage)
}


