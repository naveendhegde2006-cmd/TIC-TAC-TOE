
let boxes = document.querySelectorAll(".box");
let resBtn = document.querySelector("#reset-btn");
let nb = document.querySelector("#newg-btn");
let mc = document.querySelector(".msg-container");
let m = document.querySelector("#msg");

let turn0 = true;
let count = 0;

let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Handle box clicks
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.disabled) return;

        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }

        box.disabled = true;
        count++;

        checkwinner();
    });
});

// Disable all boxes
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// Enable all boxes and clear their contents
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

// Reset the game
const resetgame = () => {
    turn0 = true;
    count = 0;

    enableBoxes();
    mc.classList.add("hide");
    m.innerText = "";
};

// Display the winner
const showWinner = (winner) => {
    m.innerText = `Congratulations! Winner is ${winner}`;
    mc.classList.remove("hide");
    disableBoxes();
};

// Check winner or draw
const checkwinner = () => {
    for (let pattern of arr) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if (p1 !== "" && p1 === p2 && p2 === p3) {
            console.log("Winner:", p1);
            showWinner(p1);
            return;
        }
    }

    // Check for draw
    if (count === 9) {
        m.innerText = "It's a Draw!";
        mc.classList.remove("hide");
        disableBoxes();
    }
};

// Button event listeners
nb.addEventListener("click", resetgame);
resBtn.addEventListener("click", resetgame);
