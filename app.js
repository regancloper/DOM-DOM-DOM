// initial setup of page
let container = document.createElement('div');
container.className = "container";
let button = document.createElement('button');
button.textContent = "Add Square";
document.body.appendChild(button);
document.body.appendChild(container);
let numsquares = 0;
let squares = document.querySelectorAll("div.square");

// listens for a button click to add square
button.addEventListener("click", addSquare);

// listens for user clicking square, which changes its color
button.addEventListener("click", addSquare);

// adds a black square to the page, and sets up listeners for mouse
function addSquare() {
    let sq = document.createElement('div');
    sq.className = "square";
    sq.id = ++numsquares;
    container.appendChild(sq);
    document.body.appendChild(container);
    squares = document.querySelectorAll("div.square");
    squares.forEach(function (square) {
        square.addEventListener("mouseenter", displayId);
        square.addEventListener("mouseleave", removeId);
        square.addEventListener("click", changeColor);
        square.addEventListener("dblclick", removeSquare);
    });
}

// displays the square's id when square is hovered over
function displayId(e) {
    let sqnum = document.createElement('div');
    sqnum.textContent = e.target.id;
    sqnum.className = "sq-id";
    e.target.appendChild(sqnum);
}

// removes the display of the square id when mouse exits square
function removeId(e) {
    e.target.firstElementChild.remove();
}

// assigns random color to a square that is clicked
function changeColor(e) {
    let colors = ["magenta", "darkgoldenrod", "darkgrey", "mediumseagreen", "peachpuff", "navy", "brown", "salmon", "green", "orange"];
    let randomcolor = colors[Math.floor(Math.random() * colors.length)];
    // changes color of square, regardless of whether user clicked on square or id#
    if (e.target.className === "sq-id") {
        e.target.parentNode.style.backgroundColor = randomcolor;
    } else {
        e.target.style.backgroundColor = randomcolor;
    }
}

// removes next square if user clicked on even square, removes previous 
// square if user clicked on odd square, and alerts user if no square 
// removal can occur
function removeSquare(e) {
    // declares variable for square user clicked on
    let obj;
    if (e.target.className === "sq-id") {
        obj = e.target.parentNode;
    } else {
        obj = e.target;
    }
    if ((obj.id % 2) === 0) {
        if (obj.nextSibling === null) {
            alert("There is no subsequent square that can be removed!");
        } else {
            obj.nextSibling.remove();
        }
    } else {
        if (obj.previousSibling === null) {
            alert("There is no prior square that can be removed!");
        } else {
            obj.previousSibling.remove();
        }
    }
}