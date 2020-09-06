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
 * 
 * Define Global Variables


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


// Global Variables
    let NavBarList = document.getElementById('navbar__list');
    let Section = document.getElementsByTagName('section');

// build the nav
function NavBar(){

    let createDom = document.createDocumentFragment();
    let lists = document.querySelectorAll('.navbar__menu');
    
    for(let i = 0; i < lists.length; i++){
       let sectionID = NavBarList.getAttribute('id');
      // fix section name
        console.log(sectionID + " lllll");
        let navbar = document.createElement('li');
        navbar.innerHTML = '<a href= #${sectionID}>${sectionID}</a>';
        //navbar.innerHTML = `<a href= #${sectionID}>${sectionID}</a>`;

        //navbar.innerHTML = `<a href= #sectionID>sectionID</a>`;

        console.log(navbar + "klklklklklk");
        createDom.appendChild(navbar);
    }
    NavBarList.appendChild(createDom);

}

//NavBar();
document.addEventListener('DOMContentLoaded', NavBar);


// Add class 'active' to section when near top of viewport

function isActiveClass(){
    const lists = document.querySelectorAll('.landing__container');
    let topElement = [];
    let i = 0;
    for( i = 0; i < lists.length; i++){
        let sec = lists[i];
        let rect = sec.getBoundingClientRect();
        topElement[i] = rect.top;
        topElement.sort();
    }
    topElement.sort();
    let activeSection = lists[0];
    // activeSection.setAttribute('class','active');

    //activeSection.setAttribute('class','active');
    document.getElementsByTagName("section")[0].setAttribute('class','active');

    if(document.querySelector('section.active') != null && document.querySelector('a.active') != null){
        document.querySelector('section.active').classList.remove('active');
        document.querySelector('a.active').classList.remove('active');
    }
}

// Set sections as active    
     
    document.addEventListener('scroll', isActiveClass);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


