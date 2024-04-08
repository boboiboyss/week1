const getLink = document.querySelectorAll('.nav-left a')

for (let i = 0; i < getLink.length; i++) {
    getLink[i].addEventListener('click', function(){
        getLink[i].classList.add('active');
    })
}