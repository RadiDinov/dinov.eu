window.addEventListener('DOMContentLoaded', event => {

    //nav close/open
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    //nav shrink complete
    navbarShrink();

    //when scroll, make it visible
    document.addEventListener('scroll', navbarShrink);

    //activate main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 100,
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    //simplelightbox lib activation
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});


/*--------------------------------------------------------------
# TopButton
--------------------------------------------------------------*/

//Get the button:
mybutton = document.getElementById("myBtn");
mybutton.style.display = "none";

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*--------------------------------------------------------------
# TopButton
--------------------------------------------------------------*/


/*--------------------------------------------------------------
# Discount greeting
--------------------------------------------------------------*/

function random(num) {
    return Math.floor(Math.random() * num)
}

function getRandomStyles() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var mt = random(200);
    var ml = random(50);
    var dur = random(5) + 5;
    return `
    background-color: rgba(${r},${g},${b},0.4);
    color: rgba(${r},${g},${b},0.4); 
    box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.4);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in infinite
    `
}

function createBalloons(num) {
    var balloonContainer = document.getElementById("balloon-container")
    for (var i = num; i > 0; i--) {
        var balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.cssText = getRandomStyles();
        balloonContainer.append(balloon);
    }
}

window.onload = function () {
    createBalloons(5);
}

/*--------------------------------------------------------------
# Discount greeting
--------------------------------------------------------------*/

/*--------------------------------------------------------------
# Security
--------------------------------------------------------------*/
function WhichButton(event) {
    document.onmousedown = function (event) {
        if (event.button == 2) {
            alert('This function is forbidden!');
        }
    }
}

document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
}

/*--------------------------------------------------------------
# Security
--------------------------------------------------------------*/


/*--------------------------------------------------------------
# Customer support
--------------------------------------------------------------*/

const form = document.querySelector("form"),
    statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
    e.preventDefault();
    statusTxt.style.color = "#0D6EFD";
    statusTxt.style.display = "block";
    statusTxt.innerText = "Sending your message...";
    form.classList.add("disabled");

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/js/message.php", true);
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = xhr.response;
            if (response.indexOf("Email and message field is required!") != -1 || response.indexOf("Enter a valid email address!") != -1 || response.indexOf("Sorry, failed to send your message!") != -1) {
                statusTxt.style.color = "red";
            } else {
                form.reset();
                setTimeout(() => {
                    statusTxt.style.display = "none";
                }, 3000);
            }
            statusTxt.innerText = response;
            form.classList.remove("disabled");
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}

/*--------------------------------------------------------------
# Customer support
--------------------------------------------------------------*/