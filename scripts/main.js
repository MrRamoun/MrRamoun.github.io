function openOdinSignupPage() {
    a = document.querySelector("a") //global variable
    let email = localStorage.getItem("email")

    if (!email) {
        setEmail()
    } else {
        alert("Welcome, " + email)
    }

    a.href = "https://theodinproject.com/sign_up?ref=homenav"
    a.click()
    a.href = "https://theodinproject.com"
}

function setEmail() {
    let email = prompt("Please, Enter your email:")

    if (!email) {
        setEmail()
    } else {
        const pattern = /\S+@\S+\.\S+/;
        if (pattern.test(email)) {
            localStorage.setItem("email", email)
        } else {
            prompt("Sorry, " + email + "is not a vaild e-mail.")
            setEmail()
        }
    }
}

function changeToRamoun() {
    // I Like to Play
    const heading = document.querySelector('h1');

    if (heading.textContent == "The Odin Project") {
        heading.textContent = "R}AM#UN>";
    } else {
        heading.textContent = "The Odin Project"
    }
}

function changeImage() {
    img = document.querySelector('img');
    let mysrc = img.getAttribute("src");
    let imgsize = "800/420"

    if (mysrc === "images/odin_logo.png") {
        img.src = "https://placeimg.com/" + imgsize + "/tech"
    } else {
        img.src = "images/odin_logo.png" //img.setAttribute("src", "images/odin_logo.png") is the same thing
    }
}

function activateEasterEgg() {
    const img = document.querySelector("img")
    img.setAttribute("onclick", "changeImage()")
    // img.onclick = changeImage() // doesn't work the way intended
    img.style.cursor = "pointer"

    const h1 = document.querySelector("h1")
    h1.onclick = function () {
        changeToRamoun()
    }
    h1.style.cursor = "pointer"
}