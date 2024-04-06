const addProject = []

function handleProject(event) {

    event.preventDefault();
    let projectName = document.getElementById('lprojectName').value;
    let startDate = document.getElementById('lstart-date').value;
    let endDate = document.getElementById('lend-date').value;
    let description = document.getElementById('ldescription').value;
    let tech = document.querySelectorAll('input[type="checkbox"]');
    let check = document.querySelectorAll('input:checked');
    let image = document.getElementById('lupload').files[0];
    let urlImage = URL.createObjectURL(image)

    if(projectName === "" || startDate === "" || endDate === "" || description === "" || urlImage === "") {
        return alert("Please complete the empty fields");
    } else if (startDate > endDate) {
        return alert('The end date cannot be less than the start date');
    } else if (check.length === 0) {
         return alert('Please checked one of the box')
    } 
    else {
        let listTech = []
        // for (let i = 0; i < tech.length; i++) {
        //    if (tech[i].checked === true) {
        //        listTech.push (tech[i].value);
        //     }
        //     else {
        //         alert('Please checked one of the box');
        //         return tech;
        //    } 
           
        // }

        check.forEach(item => {
            listTech.push(item.value);
        })

        let startDatePart = startDate.split('/');
        let endDatePart = endDate.split('/');

        let formatStartDate = `${startDatePart[2]} - ${startDatePart[1]} - ${startDatePart[0]}`;
        let formatEndDate = `${endDatePart[2]} - ${endDatePart[1]} - ${endDatePart[0]}`

        let newStartDate = new Date(formatStartDate);
        let newEndDate = new Date(formatEndDate);

        let timeDifference = newEndDate - newStartDate
        let getDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let getMonths = Math.floor(getDays / 30.44);
        let getYears =  Math.floor(getMonths / 12)
        
        let duration;
        if(getYears > 0) {
            duration = `${getYears} Tahun`
        } else if (getMonths > 0) {
            duration = `${getMonths} Bulan`
        } else {
            duration = `${getDays} Hari`
        }

        addProject.push({
            title : projectName,
            startDate,
            endDate,
            description,
            image : urlImage,
            duration,
            listTech
        })
    }

   const temp = document.getElementById('card-project');
   addProject.map(item => {
        temp.innerHTML += `<div class='card-content'>
                <img src='${item.image}' alt='img'/>
                <p class='title-content'>${item.title}</p>  
                <small>durasi : ${item.duration}</small>
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
}


// console.log('tes');