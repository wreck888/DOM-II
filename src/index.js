import './less/index.less'

// Your code goes here!


// Mouse Over
const logoHead = document.querySelector('.logo-heading');
logoHead.addEventListener('mouseover', function(event) {
    event.target.style.color = 'purple'
});

//Click 
const section = document.querySelector('.inverse-content');
section.addEventListener('click', function(event) {
    event.target.style.backgroundColor = 'pink'
});

//keydown
const sectionP = document.querySelectorAll('.btn')
function enterKey(e){
    if (e.key ==='Enter'){
        sectionP.style.color = 'yellow';
    }
}
document.addEventListener('keydown', enterKey)

//Double Click
section.addEventListener('dblclick', function(e){
    e.target.style.color = 'blue'
});


// const navC = document.querySelectorAll('container')
// navC.addEventListener('click', function(evt){
//     evt.target.style.background = 'blue'
// });


// const links = document.querySelector('.nav-link');
// links.addEventListener('click', function(evt) {
//     evt.preventDefault();
//     evt.target.style.color = 'pink'
// });

// const contentSection = document.querySelectorAll('.img-content')

// contentSection.addEventListener('click', function(evt){
//     contentSection.classList.toggle('large');
// });

