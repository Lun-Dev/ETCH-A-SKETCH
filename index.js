const containerEl = document.querySelector("#container") // Get the container that we will create the grid within it
const buttonEl = document.querySelector("#clearBtn")

function loadGrid() {
    let drawing = "" 
    for (let i = 0; i < 256; i++) {
        drawing += `<div id=box></div>`
    }
    containerEl.innerHTML = drawing // Manipulate the DOM in one go after we concatenated the for loop above
}

loadGrid()
const boxEl = document.querySelectorAll("#box") // Get the new box div

for (let i = 0; i < boxEl.length; i++) {
    boxEl[i].addEventListener("mouseover", function() {
        boxEl[i].classList.add("blackBox"); // When mouseover, add blackbox div
    });
}

for (let i = 0; i < boxEl.length; i++) {
    buttonEl.addEventListener("click", function() {
        boxEl[i].classList.remove("blackBox"); // When clicked, remove blackbox div
    });
}

// for (let i = 0; i < boxEl.length; i++) {
//     eraserBtm.addEventListener("mouseover", function() {
//         boxEl[i].classList.remove("blackBox"); // When clicked, remove blackbox div
//     });
// }

