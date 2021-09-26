const flexEl = document.querySelector(".flexContainer");
const clearBtn = document.querySelector("#clearBtn");
const eraserBtn = document.querySelector("#eraserBtn");
const colorBtn = document.querySelector("#colorPicker");
const rainbowBtn = document.querySelector("#rainbowBtn");
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
            boxEl[i].style.background = `${colorBtn.value}`; // When mouseover, add blackbox div
        });
    };
};

function clearBox() {
    clearBtn.addEventListener("click", function() {
        for (let i = 0; i < boxEl.length; i++) {
            boxEl[i].style.background = "";
        }
    });
};

rangeNumberEl.addEventListener("input", function() {
    row.innerText = this.value;
    column.innerText = this.value;
    loadGrid()
    boxEl = document.querySelectorAll(".inInnerbox")
    mouseOver()
    clearBox()
    eraseBox()
})

loadGrid()
let boxEl = document.querySelectorAll(".inInnerbox")
mouseOver()
clearBox()
eraseBox()
colorPicker()

function eraseBox() {
    eraserBtn.addEventListener("click", function() {
        for (let i = 0; i < boxEl.length; i++) {
            boxEl[i].addEventListener("mouseover", function() {
                boxEl[i].style.background = ""; 
            })
        }
    });
};

function colorPicker() {
colorBtn.addEventListener("change", function() {
    for (let i = 0; i < boxEl.length; i++) {
        boxEl[i].addEventListener("mouseover", function() {
            boxEl[i].style.background = `${colorBtn.value}`;
        })
    }
})
}

rainbowBtn.addEventListener("click", function() {
    for (let i = 0; i < boxEl.length; i++) {
        boxEl[i].addEventListener("mouseover", function() {
            const letters = "0123456789ABCDEF";
            let color =  "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)]
            }
            boxEl[i].style.background = color;
        })
    }
})

