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
       navbar.innerHTML = '<a href=#${sectionID}>${sectionID}</a>';

        console.log(navbar + "klklklklklk");
        createDom.appendChild(navbar);
    }
    NavBarList.appendChild(createDom);

}

document.addEventListener('DOMContentLoaded', NavBar);


// Add class 'active' to section when near top of viewport

function ActiveClass(){

let activeSection = document.querySelectorAll('section')
// let lists = document.querySelectorAll('.landing__container');
// let bounderies = element.getBoundingClientRect();
for(let i = 0 ; i<activeSection.length; i++ ){
   //console.log(activeSection.length + " ff")
    let bounderies =  activeSection[i].getBoundingClientRect();
   // console.log(bounderies);
if (
	//bounderies.top >= 0 &&
	bounderies.left >= 0 &&
	bounderies.right <= (window.innerWidth || document.documentElement.clientWidth) &&
	bounderies.bottom <= (window.innerHeight || document.documentElement.clientHeight)
) {
    document.addEventListener('scroll', function () {
        let check = ActiveClass(Section) ?
        activeSection[i].setAttribute('class', 'active') :
            console.log('The box is not visible in the viewport');
    });
   // activeSection[i].classList.toggle('active');
        //console.log('In the viewport!');

    if(document.querySelector('section.active') != null || document.querySelector('a.active') != null){
        //console.log("remove active");
         //activeSection[i].classList.toggle('active');
         document.querySelector('section.active').classList.remove('active');
         document.querySelector('a').classList.remove('active');
     }
     else if(document.querySelector('section.active') == null || document.querySelector('a.active') == null){
        //console.log("add active");
        document.querySelector('section').classList.add('active');
        document.querySelector('a').classList.add('active');
     }
break;
    } 
else {
	console.log('Not in the viewport... whomp whomp');
}
}

}
document.addEventListener('scroll', ActiveClass, false);

// Scroll to anchor ID using scrollTO event

function scrollToAnchor(){
    element = document.getElementsByTagName('h2');
    
    //element.preventDefault();
    console.log("true");
    element.scrollIntoView();
    element.scrollIntoView(false);
    element.scrollIntoView({block: "end"});
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    
}

NavBarList.addEventListener('click', scrollToAnchor,false);

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


