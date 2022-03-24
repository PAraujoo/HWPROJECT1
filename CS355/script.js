let searchBar = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchBar.classList.toggle('active');
}

const panels = document.querySelectorAll('.panel')

panels.forEach((panels) => {
    panels.addEventListener('click', () => {
        removeActiveClasses()
        panels.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panels => {
        panels.classList.remove('active')
    })
}

let menuBar = document.querySelector('.menu-form');

document.querySelector('#menu-btn').onclick = () => {
    menuBar.classList.toggle('active');
}
