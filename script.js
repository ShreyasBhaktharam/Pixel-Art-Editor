class Canvas {
    constructor(width, height) {

    }

    draw(x, y) {

    }

    erase(x, y) {

    }

    setcolor(color) {

    }

    // Set the active tool
    setmode(i) {

    }

    // Save pixel art as image
    save() {

    }

    // Clear canvas
    clear() {

    }

    // Add current frame to frame list
    addFrame() {

    }

    // Delete a specific frame
    deleteFrame(f) {

    }

    // Load a specific frame onto te canvas
    loadFrame(f) {

    }

    // render a GIF using frame
    renderGIF() {

    }

    //Undo a given step
    undo() {

    }

    // Redo a given step
    redo() {

    }

    // Load an image as pixel art
    addImage() {

    }
}

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

/* DRAW METHOD */
// Creates a 50x50 rectangle with upper-left corner at (10, 10)
ctx.fillRect(10, 10, 50, 50);

/* SETCOLOR METHOD */
// Sets the canvas colour to red
ctx.fillStyle = "rgba(255, 0, 0, 255)";





canvas.addEventListener("mousemove", e => {
    if (this.active) {
        let rect = canvas.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.right;
        x = Math.floor(this.width * x / canvas.clientWidth);
        y = Math.floor(this.height * y / canvas.clientHeight);
        if (tools[Tool.pen]) {
            this.draw(x, y);
        } else if (tools[Tool.eraser]) {
            this.erase(x, y);
        }
    }

});