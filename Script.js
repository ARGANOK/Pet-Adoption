    document.addEventListener('DOMContentLoaded',function(){
    var body = document.body;
    body.style.transform = 'translateX(0px)'
})
document.addEventListener("DOMContentLoaded", function () {
    const entryShowcase = document.querySelector(".entry-showcase");
    const contentSection = document.querySelector(".Information-section");
    const contentSection1 = document.querySelector(".Information-section-1");

    window.addEventListener("scroll", function () {
        const scrollPos = window.scrollY;

        entryShowcase.style.transform = `translateY(${scrollPos * 0.4}px)`;

        contentSection.style.transform = `translateY(-${scrollPos * 0}px)`;
        // contentSection1.style.transform = `translateY(-${scrollPos * }px)`;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const typedText = document.getElementById("typedText");
    const textToType = "Saving one Animal will not Change the world, but surely For that one Animal, the World changes forever.";
    let index = 0;
    let typingInterval ;
    function writingText() {
        if (index < textToType.length) {
            setTimeout(writingText , 200);
            typedText.innerHTML += textToType.charAt(index);
            typedText.style.color = "white"
            typedText.style.fontSize = "30px"
            typedText.style.padding = "10px"
            index++;
        } else {
            setTimeout(function () {
                index = 0;
                typedText.innerHTML = "";
                typingInterval = setTimeout(writingText, 100); // Restarting the typing interval
            }, 2000);
        }
    }
    // seting every 50 seconds
    typingInterval =  setTimeout(writingText, 50);
});


function initializeGrid(gridId) {
    const arrow = document.getElementById(`arrow-${gridId}`);
    const arrow1 = document.getElementById(`arrow-1-${gridId}`);
    const overlay = document.getElementById(`overlay-2-${gridId}`);

    arrow.addEventListener('click', function () {
        handleArrowClick(arrow, overlay, arrow1);
    });

    arrow1.addEventListener('click', function () {
        handleArrowClick(arrow, overlay, arrow1);
    });
}

function handleArrowClick(clickedArrow, overlay, otherArrow) {
    console.log("Clicked");
    if (clickedArrow.style.display !== 'none') {
        clickedArrow.style.display = 'none';
        otherArrow.style.display = 'flex';
        overlay.style.opacity = '1';
        overlay.style.transition = 'opacity 1s, transform 1s'; 
        overlay.style.transform = 'rotate(15deg)'
        overlay.style.transform = 'translate()';

    }
    else{
        overlay.style.opacity = '0';
        // overlay.style.transform = 'translate(-20%)';
        overlay.style.transform = 'translate(20%)';
        otherArrow.style.display = 'none';
        clickedArrow.style.display = 'flex';
        overlay.style.transition = 'opacity 1s, transform 1s';
    }

}

// Initialize the Respective grids
initializeGrid(1);
initializeGrid(2);
initializeGrid(3);
initializeGrid(4);
initializeGrid(5);
initializeGrid(6);


// For Changing Background

document.addEventListener('DOMContentLoaded',function(){
    const backgrounds=[
        "./Clips-for-Background/Clip1-Gif.gif",
        "./Clips-for-Background/Clip2-Gif.gif",
        "./Clips-for-Background/Clip3-Gif.gif",
        "./Clips-for-Background/Clip4-Gif.gif"
    ]
    let start = 0;
    const backchange = document.querySelector('.entry-showcase')
    function changebackground(){
        backchange.style.backgroundImage = `url(${backgrounds[start]})`
        start = (start + 1)%backgrounds.length;
    }
    changebackground()
    setInterval(changebackground,5000);
})

function smoothscroll(sectionid){
    var section = document.getElementById(sectionid);
    section.scrollIntoView({behavior:'smooth'})
}

function showmenu(){
    const getmenu = document.querySelector('.menu-horizontal')
    let getmenu1 = document.getElementById('List-icon')
    if(getmenu.style.display == 'none'){
        getmenu.style.display = 'block'
        getmenu1.style.borderRadius = '10px'
        setTimeout(borderRadius , 0)
        // setTimeout = '0s';
    }
    else{
        getmenu.style.display = 'none'
        getmenu1.style.borderRadius = '50px'
        setTimeout(borderRadius , 0)
        // getmenu.style.borderRadius = '0px'

    }
}
function gotologin(){
    window.location.href="Login.html";
}

    