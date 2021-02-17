const displayContainer = document.querySelector('#displayContainer');
//const colorButton = document.getElementById('color');



var wSize = 16;


// create the display area

function makeDisplay(wSize) {
    let area = wSize * wSize;

    for (i = 0; i < area; i++) {
        const canvas = document.createElement('div');
        canvas.className = 'canv';
        canvas.id = i;
        canvas.style.display = 'flex';
        canvas.addEventListener("mouseover", draw);
        displayContainer.appendChild(canvas);
        displayContainer.style.setProperty('grid-template-columns', 'repeat(' + wSize + ', 1fr)');

        if (wSize < 30) {
            canvas.style.width = '20px';
            canvas.style.height = '20px';

        } else if (wSize < 45) {
            canvas.style.height = '15px';
            canvas.style.width = '15px';

        } else if (wSize < 60) {
            canvas.style.height = '10px';
            canvas.style.width = '10px';
        } else {
            canvas.style.height = '5px';
            canvas.style.width = '5px';
        };

    };

};

// Draw on hover

function draw(e) {

    e.target.style.backgroundColor = cchoice;

}

// reset screen and choose display size
function reset() {

    while (displayContainer.firstChild) {
        displayContainer.removeChild(displayContainer.firstChild);
    }


    let wSize = prompt("How many rows would you like?", 16);
    if (wSize > 100) {
        wSize = 100;
    } else {
        wSize = wSize;
    };
    makeDisplay(wSize);
};

// choose drawing color

function colorChoice() {
    cchoice = prompt('What color would you like?', 'black');
    console.log('cchoice = ' + cchoice);

};



makeDisplay(wSize);