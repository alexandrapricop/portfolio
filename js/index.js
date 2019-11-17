// Navigation links
const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const skillLink = document.getElementById("skills-link");
const projectsLink = document.getElementById("projects-link");
const contactLink = document.getElementById("contact-link");
const projectsButton = document.getElementById("projects-button");
const logo = document.getElementById("logo");

// Navigation sections
const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");
const skillSection = document.getElementById("skills");
const projectsSection = document.getElementById("projects");
const contactSection = document.getElementById("contact");

// Navigation menu
const openMenuButton = document.getElementById('open-menu');
const menuBox = document.getElementById('menu-box');
const menuImage = document.getElementById('menu-image');




//add event listener for the navigation links
homeLink.addEventListener("click", () => {
    window.scrollTo({
        top: window.pageYOffset + homeSection.getBoundingClientRect().top,
        behavior: 'smooth'
    });
    menuBox.classList.toggle("scale");
    menuBox.classList.add("scale-down");
})
logo.addEventListener("click", () => {
    window.scrollTo({
        top: window.pageYOffset + homeSection.getBoundingClientRect().top,
        behavior: 'smooth'
    });
})
aboutLink.addEventListener("click", () => {
    window.scrollTo({
        top: window.pageYOffset + aboutSection.getBoundingClientRect().top,
        behavior: 'smooth'
    });
    menuBox.classList.toggle("scale");
    menuBox.classList.add("scale-down");
})
skillLink.addEventListener("click", () => {
    window.scrollTo({ 
        top: window.pageYOffset + skillSection.getBoundingClientRect().top, 
        behavior: 'smooth' 
    });
    menuBox.classList.toggle("scale");
    menuBox.classList.add("scale-down");
})
projectsLink.addEventListener("click", () => {
    window.scrollTo({ 
        top: window.pageYOffset + projectsSection.getBoundingClientRect().top, 
        behavior: 'smooth' 
    });
    menuBox.classList.toggle("scale");
    menuBox.classList.add("scale-down");
})
contactLink.addEventListener("click", () => {
    window.scrollTo({ 
        top: window.pageYOffset + contactSection.getBoundingClientRect().top, 
        behavior: 'smooth' 
    });
    menuBox.classList.toggle("scale");
    menuBox.classList.add("scale-down");
})
projectsButton.addEventListener("click", () => {
    window.scrollTo({ 
        top: window.pageYOffset + projectsSection.getBoundingClientRect().top, 
        behavior: 'smooth' 
    });
})

//  Open and close menu
openMenuButton.addEventListener('click', () => {
    if (menuBox.classList.contains('scale')) {
        menuBox.classList.toggle("scale");
        menuBox.classList.add("scale-down");
        document.getElementById("menuBox").style.transformOrigin = openMenuButton.getBoundingClientRect().left+' '+openMenuButton.getBoundingClientRect().bottom;
    } else {
        menuBox.classList.add("scale");
        if (menuBox.classList.contains('scale-down'))
            menuBox.classList.remove("scale-down");
            document.getElementById("menuBox").style.transformOrigin = openMenuButton.getBoundingClientRect().left+' '+openMenuButton.getBoundingClientRect().bottom;
    }
})




//onscroll animations
