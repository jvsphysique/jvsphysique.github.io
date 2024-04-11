const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/html-logo.png"){
        myImage.setAttribute("src", "images/css.png");
    } else {
        myImage.setAttribute("src", "images/html-logo.png");

    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
     localStorage.setItem("name", myName);
    myHeading.textContent = `Programming is Cool, ${myName}`; 
    }
}
    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Programming is Cool, ${storedName}`;
    }
myButton.onclick = () => {
    setUserName();
};


