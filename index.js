const containerEl = document.querySelector("#container") // Get the container that we will create the grid within it
const clearBtn = document.querySelector("#clearBtn")
const eraserBtn = document.querySelector("#eraserBtn")
const resetBtn = document.querySelector("#resetBtn")

function loadGrid() {
    let drawing = "" 
    for (let i = 0; i < 256; i++) {
        drawing += `<div id=box></div>`
    }
    containerEl.innerHTML = drawing // Manipulate the DOM in one go after we concatenated the for loop above
}

function mouseOver() {
    for (let i = 0; i < boxEl.length; i++) {
        boxEl[i].addEventListener("mouseover", function() {
            boxEl[i].classList.add("blackBox"); // When mouseover, add blackbox div
        });
    };
};
    
function clearBox() {
    clearBtn.addEventListener("click", function() {
        for (let i = 0; i < boxEl.length; i++) {
            boxEl[i].classList.remove("blackBox");
        }
    });
};

function reset() {
    resetBtn.addEventListener("click", function() {
        mouseOver()
    })
};
    
loadGrid()
const boxEl = document.querySelectorAll("#box") // Get the new box div
mouseOver()
clearBox()
eraseBox()
reset()

function eraseBox() {
    eraserBtn.addEventListener("click", function() {
        for (let i = 0; i < boxEl.length; i++) {
            boxEl[i].addEventListener("mouseover", function() {
                boxEl[i].classList.remove("blackBox"); 
            })
        }
    });
};

