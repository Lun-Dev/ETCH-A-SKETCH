const flexEl = document.querySelector(".flexContainer");
const clearBtn = document.querySelector("#clearBtn")
const eraserBtn = document.querySelector("#eraserBtn")
let rowEl = document.getElementById("row");
let columnEl = document.getElementById("column");
let rangeNumberEl = document.getElementById("slideRange");

function loadGrid() {
    let drawRow = ""
    let drawColumn = ""

    for(let i = 0;i < rowEl.innerText; i++) {
        drawRow += `<div class="inInnerbox"></div>`
    }
    for(let i = 0;i < columnEl.innerText; i++) {
        drawColumn += `<div class="innerBox">${drawRow}</div>`
    }
    flexEl.innerHTML = drawColumn;
}

function mouseOver() {
    for (let i = 0; i < boxEl.length; i++) {
        boxEl[i].addEventListener("mouseover", function() {
            boxEl[i].classList.add("colorBox"); // When mouseover, add blackbox div
        });
    };
};

function clearBox() {
    clearBtn.addEventListener("click", function() {
        for (let i = 0; i < boxEl.length; i++) {
            boxEl[i].classList.remove("colorBox");
        }
    });
};

rangeNumberEl.addEventListener("input", function() {
    row.innerText = this.value;
    column.innerText = this.value;
    loadGrid()
    boxEl = document.querySelectorAll(".inInnerbox")
    mouseOver()
})

loadGrid()
let boxEl = document.querySelectorAll(".inInnerbox")
mouseOver()
clearBox()
eraseBox()

function eraseBox() {
    eraserBtn.addEventListener("click", function() {
        for (let i = 0; i < boxEl.length; i++) {
            boxEl[i].addEventListener("mouseover", function() {
                boxEl[i].classList.remove("colorBox"); 
            })
        }
    });
};


