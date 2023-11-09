class Particula {
    constructor(_x, _y) {
        this.pos = createVector(_x, _y);
        this.lifespan = Math.ceil(random(10, 200));
        this.iAlive = true;
        this.side = Math.ceil(random(3, 15));


    }
    update() {
        this.r = random(100);

        if (r < 0.25) {
            // arriba
            this.pos.x -= this.side;
        } else if (this.r < 50) {
            // derecha
            this.pos.x += this.side;
        } else if (this.r < 75) {
            // abajo
            this.pos.y += this.side;
        } else {
            // izquierda
            this.pos.x -= this.side;
        }

        this.lifespan -= 1;

        if (this.lifespan <= 0) {
            this.iAlive = false;

        }


    }
    display() {
        squeare(this.pos.x, this.pos.y, this.side);
    }
}