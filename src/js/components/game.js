$(function () {

    var canvas = document.querySelector('.canvas');
    var ctx = canvas.getContext('2d');
    var ball;

    var clrDefault = '#fd0';
    var clrSuccess = '#2ecc71';
    var clrDanger = '#e74c3c';

    (function setup (){
        ball = new Ball();
        
        window.setInterval( () => {
            ctx.clearRect( 0, 0, canvas.width, canvas.height )
            ball.draw()
            ball.update()
        },0.5);
    
    }());

    window.addEventListener('keyup', ((evt) => {
        if(evt.keyCode == 32) {
            console.log('clicked')
            ball.check();
        }
    }))

    function Ball () {
        this.size = 70;
        this.x = 0
        this.y = canvas.height/2
        this.offset = 40 //jarak berapa jauh dia naik/turun
        this.jump = 1 //speed
        this.dir = 'down'
        this.moving = true
        this.color = '#dedede'
        
        this.draw = function () {
            ctx.beginPath()
            ctx.arc(canvas.width/2, canvas.height/2, this.size, 0, 2 *  Math.PI)
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 1
            ctx.stroke()

            ctx.beginPath()
            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
            ctx.fillStyle = this.color
            ctx.fill()
        }
        this.update = function () {
            if( this.moving ) {
                this.color = clrDefault
                if ( this.x + this.size >= canvas.width-this.offset && this.x + this.size <= canvas.width - this.offset + ( this.jump + 3 ) ) {
                    this.dir = 'up'
                } else if ( this.x >= 1 + this.size + this.offset && this.x <= 1 + this.size + this.offset + ( this.jump + 2 ) ) {
                    this.dir = 'down'
                }

                if ( this.dir == 'down' ) {
                    this.x += this.jump
                } else {
                    this.x -= this.jump
                }
            }
        }
        this.check = function () {
            this.moving = !this.moving
            if (this.x + this.size >= (canvas.width/2 - this.size) && this.x - this.size <= (canvas.width/2 + this.size)) {
                this.color = '#2ecc71'
                this.draw()
                console.log('win')
            } else {
                this.color = '#e74c3c'
                this.draw()
                console.log('lose ')
            }
        }
    }

});