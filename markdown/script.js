// document.addEventListener('DOMContentLoaded', function () {
const contentContainer = document.getElementById('content-container');
const buttonContainer = document.getElementById("button-container");

contentContainer.getElementsByClassName('content-container')[0].addEventListener("mouseenter", handleMouseEnter);
contentContainer.getElementsByClassName('content-container')[0].id = generateRandomCode();

function addContent(element = 'div') {
    const newContent = document.createElement('div');
    newContent.classList.add('content-container', 'px-14', 'bg-gray-50', 'p-4', 'rounded', 'w-full');
    newContent.id = generateRandomCode();
    newContent.innerHTML = `<${element} contenteditable="true" placeholder="write some text here..." class="container-box w-full p-2"></${element}>`;
    newContent.addEventListener('input', handleInput);
    contentContainer.appendChild(newContent);
    newContent.getElementsByClassName('container-box')[0].focus();
    newContent.addEventListener("mouseenter", handleMouseEnter);
}

function handleKeyPress(event) {
    if (event.keyCode === 13 && !event.shiftKey) { // Enter key without Shift
        addContent();
        event.preventDefault();
    }
}

function handleInput(event) {
    const content = event.target.innerText;
    if (content === '') {
        event.target.parentElement.remove();
    }
}

function handleMouseEnter(event) {
    const target = event.target;
    const nthChild = Array.from(document.querySelectorAll("#content-container > div")).indexOf(document.getElementById(target.id));
    buttonContainer.style.top = `${(nthChild + 1) * 77}px`;
}

contentContainer.addEventListener('keypress', handleKeyPress);


// });

function onDropDownToggle(event) {
    const target = event;
    target.parentElement.getElementsByClassName('dropdown-content')[0].classList.toggle('show');
}

window.onclick = function (event) {
    if (event?.target?.parentElement?.matches('.dropdown-content')) {
        console.log("condtion mach", event.target.id);
        const newelement = event.target.id.split("-")[1];
        addContent(newelement);
    } else if (!event.target.matches('.dropbtn')) {
        console.log("condition yes");
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function generateRandomCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charsLength = chars.length;
    let code = '';

    for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * charsLength);
        code += chars.charAt(randomIndex);
    }

    return code;
}
