/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
    let navbar_list = document.getElementById('navbar__list');
    let sections = document.getElementsByTagName('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function NavBar(){
    let CreateDom = document.createDocumentFragment();
    let allLists = document.querySelectorAll('navbar__list');
    let sec_Id = [];
    for(let i = 0; i < allLists.length; i++){
        sec_Id = section.getAttribute('id');
        let Nav_Bar = document.createElement('li');
       // Nav_Bar.innerHTML = `<a href= #${sec_Id}>${sec_Id}</a>`
        Nav_Bar.innerHTML = '<a href= #%sec_Id%>%sec_Id%</a>';
        CreateDom.appendChild(Nav_Bar);
      
    }
    navbar_list.appendChild(CreateDom);
}

//NavBar();
document.addEventListener('DOMContentLoaded', NavBar);


// Add class 'active' to section when near top of viewport
function isActiveClass(){
    const lists = document.querySelectorAll('.landing__container');
    let topElement = [];
    for(let i = 0; i < lists.length; i++){
        let sec = lists[i];
        let rect = sec.getBoundingClientRect();
        topElement[i] = rect.top;
    }
    topElement.sort();
    let activeSection = lists[0];
    activeSection.setAttribute('class','active');
   
    if(document.querySelector('section.active') != null && document.querySelector('a.active') != null){
        document.querySelector('section.active').classList.remove('active');
        document.querySelector('a.active').classList.remove('active');
    }
}

// Set sections as active    
    document.addEventListener('scroll', isActiveClass) 
             
// Scroll to anchor ID using scrollTO event

// function scrollToAnchor(e){
//     e.preventDefault();
//     let sec = document.querySelector('#%e.target.innerHTML%');
//     sec.scrollToAnchor({behavior: 'smooth'});
// }
function scrollToAnchor(e){
   
   // let sec = document.querySelector(`#${e.target.innerHTML}`);
    let sec = document.querySelector('#%e.target.innerHTML%');
    sec.scrollToAnchor({behavior: 'smooth'});
  
}
//navbar_list.addEventListener('click', scrollToAnchor(), false);
// Scroll to section on link click
navbar_list.addEventListener('click', scrollToAnchor,false);

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// window.onload = function()
// {
//     NavBar();
// }

