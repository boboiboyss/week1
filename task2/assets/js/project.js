const addProject = []

function handleProject(event) {

    event.preventDefault();
    let projectName = document.getElementById('lprojectName').value;
    let startDate = document.getElementById('lstart-date').value;
    let endDate = document.getElementById('lend-date').value;
    let description = document.getElementById('ldescription').value;
    let tech = document.getElementsByName('tech');

    let listTech = []
    for (let i = 0; i < tech.length; i++) {
        if (tech[i].checked == true) {
            listTech.push (tech[i].value);
        }
    }
    
    let image = document.getElementById('lupload').files[0].name;

    addProject.push({
        projectName, startDate, endDate, description, image, listTech
    })

    console.log(addProject);
}


