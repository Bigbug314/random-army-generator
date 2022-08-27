class Button extends GUI {
    constructor(x, y, w, h, img, isActive, action) {
        super(x, y, w, h, img, isActive);
        this.action = action;
    }

    update() {
        alert("button updated");
        if (this.isActive) {
            alert("MouseX: " + mouseX + "   MouseY: " + mouseY);
            if (this.cooInRectangle(mouseX, mouseY)) {
                alert("button clicked");
                this.action();
                alert("button action done");
                return true;
            }
        }
        return false;
    }

    draw() {
        if (this.isActive) {
            push();
            imageMode(CORNER);
            image(this.img, this.pos.x, this.pos.y, this.size.x, this.size.y);
            if (this.cooInRectangle(mouseX, mouseY)) {
                rectMode(CORNER);
                strokeWeight(0);
                fill(0, 0, 0, 50);
                rect(this.pos.x, this.pos.y, this.size.x, this.size.y, 5);
            }
            pop();
        }
    }

    cooInRectangle(x, y) {
      return (x < this.pos.x + this.size.x
              && x > this.pos.x
              && y < this.pos.y + this.size.y
              && y > this.pos.y);
    }
}
