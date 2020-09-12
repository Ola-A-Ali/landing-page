// global variables
    
    let navbar = document.getElementById('navbar');
    let navbar_list = document.getElementById('navbar_list');
    let sections = document.getElementsByTagName('section');
    
    let sectionArray = [];



//navbar
function NavBar(){
    let createDom = document.createDocumentFragment();
    
    for(let section of sections){
        let sectionID = section.getAttribute('id');
        let subNavBar = document.createElement('li');
        subNavBar.innerHTML = `<a href= #${sectionID}>${sectionID}</a>`;
        createDom.appendChild(subNavBar);
    }
    navbar_list.appendChild(createDom);
 

}

document.addEventListener('DOMContentLoaded', NavBar);


//active class

function isActiveClasss(){
    const h2 = document.querySelectorAll('h2');
    
    for(let i = 0; i < h2.length; i++){
        let bounderies = h2[i].getBoundingClientRect();
    
        if( bounderies.top >= 0 &&
            bounderies.left >= 0 &&
            bounderies.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            bounderies.bottom <= (window.innerHeight || document.documentElement.clientHeight)){ 

            document.getElementsByTagName("section")[i].setAttribute('class','active');
            document.getElementsByTagName("a")[i].setAttribute('class','active');
        } 
        
        else{ 
            console.log("remove active");
            document.getElementsByTagName("section")[i].setAttribute('class','');
            document.getElementsByTagName("a")[i].setAttribute('class','');
        }
    }

}
    document.addEventListener('scroll', isActiveClasss);


//scroll to view

function scrollToAnchor(e){
    e.preventDefault();
    e.stopPropagation();
    let sec = document.querySelector(`#${e.target.innerHTML}`);
    sec.scrollIntoView({behavior: 'smooth'});
}

navbar_list.addEventListener('click', scrollToAnchor,false);