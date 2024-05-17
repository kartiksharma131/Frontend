class Game{
    static score=0;
    constructor(){
        this.isPlaying = false;
    }
    start(){
        this.isPlaying=true;
        console.log(`Game has started`);
    }
    end(){
        this.isPlaying=false;
        console.log(`Game has ended`);
        Game.updateScore();
    }
    static updateScore(){
        Game.score++;
        console.log(`Score is ${Game.score}`);
    }
}

const game = new Game();
game.start();
game.end();