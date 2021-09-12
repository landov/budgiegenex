// From w3schools.com
// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };
window.onresize = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("budgie");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.innerWidth <= 600) {
        document.getElementById("budgieControl").style.marginTop = window.screen.availHeight +"px";
        document.getElementById("budgieControl").style.height = window.screen.availHeight / 3 +"px";
        console.log(document.getElementById("budgieControl").style.height);
        if (window.pageYOffset >= sticky) {

            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    } else {
        navbar.classList.remove("sticky");
        document.getElementById("budgieControl").style.marginTop = "0px";
        document.getElementById("budgieControl").style.height ="100%";
    }
}

function setControls() {
    console.log(window.innerHeight);
    console.log(document.getElementById("budgieControl").style.marginTop);
}