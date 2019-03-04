'use scrict'

window.onload = () => {
    const canvas = document.getElementById('c')
    const context = canvas.getContext('2d')
    
    const bird = new Image();
    const bg = new Image();
    const fg = new Image();
    const pipeUp = new Image();
    const pipeBottom = new Image();

    bird.src = "/img/flappy_bird_bird.png"  
    bg.src = "/img/flappy_bird_bg.png"
    fg.src = "/img/flappy_bird_fg.png"
    pipeUp.src = "/img/flappy_bird_pipeUp.png"
    pipeBottom.src = "/img/flappy_bird_pipeBottom.png";

    bg.onload = () => {
    render()
    }

    let gap = 90

    function render () { 
        context.drawImage(bg, 0, 0);

        context.drawImage(pipeUp, 100, 0);
        context.drawImage(pipeBottom,100,  + pipeUp.height + gap )

        context.drawImage(fg ,0, 400 );

        context.drawImage(bird ,20, 280 );
        
    }

 }


