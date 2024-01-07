const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
const listItems = document.querySelectorAll('.nav-list');
const preLoader = document.getElementById("preloader");
const autoType = document.querySelector("auto-input");

var typed = new Typed(".auto-input",{
    strings: ["Full Stack Web Developer" , "Game Developer" , "UI Designer" , "Android Developer" , "Programmer"],
    typeSpeed: 50,
    backSpeed: 45,
    loop: true
});

window.addEventListener("load", function(){
    preLoader.style.display = "none";
});


window.addEventListener("mousemove", function(e){
    const posX = e.clientX;
    const posY = e.clientY;




    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;


    listItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.color = 'red';
        });
        
    
        item.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '15px'; // Reset to original width
            cursorOutline.style.height = '15px'; // Reset to original height
            cursorOutline.style.color = 'black';
        });
    });

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill: "forwards"})
});

