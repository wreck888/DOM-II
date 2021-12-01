import './less/index.less'

// Your code goes here!


// Mouse Over
const logoHead = document.querySelector('.logo-heading');
logoHead.addEventListener('mouseover', function(event) {
    event.target.style.color = 'purple'
});

// Mouse Out
logoHead.addEventListener('mouseout', (event) => {
    event.target.style.color = 'orange'
});

//Click 
const section = document.querySelector('.inverse-content');
section.addEventListener('click', function(event) {
    event.target.style.backgroundColor = 'pink'
});

//keydown
const sectionP = document.querySelector('h2')
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

// wheel
const headerImg = document.querySelector('.intro img')

function wheelScroll(event) {
    event.preventDefault();
  
    if (event.deltaY < 0) {
      scale *= event.deltaY * -4;
    }
    else {
      scale /= event.deltaY * 4;
    }
    scale = Math.min(Math.max(.125, scale), 4);
    headerImg.style.transform = `scale(${scale})`;
  }
  let scale = 1;
document.onwheel = wheelScroll;







const links = document.querySelector('.nav-link');
links.addEventListener('click', function(evt) {
    evt.preventDefault();
});
