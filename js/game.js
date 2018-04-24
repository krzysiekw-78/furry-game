var Coin = require('./coin.js');
var Furry = require('./furry.js');

var Game = function() {
  this.board = document.querySelectorAll('#board > div');
  this.furry = new Furry();
  this.coin = new Coin();
  this.score = 0;
  var self = this;

  this.index = function(x, y){
    return x + (y * 10);
  };

  this.showFurry = function(){
    this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
  };

  this.showCoin = function(){
    this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
  };

  //metoda poruszająca Furiego (ustawiająca zmianę x lub y w zależności od kierunku)
  this.moveFurry = function(){
    this.hideVisibleFurry();
    if(this.furry.direction === "right"){
      this.furry.x = this.furry.x + 1;
    } else if (this.furry.direction === "left") {
      this.furry.x = this.furry.x - 1;
    }else if (this.furry.direction === "up") {
      this.furry.y = this.furry.y - 1;
    } else if (this.furry.direction === "down"){
      this.furry.y = this.furry.y + 1;
    }
    this.showFurry();
    this.checkCoinCollision();
    this.gameOver();
  };

  //metoda do ukrywania Furiego (aby nie tworzyły się klony)
  this.hideVisibleFurry = function(){
    var elementFurry = document.querySelector('.furry');
    elementFurry.classList.remove('furry');
  };

  //metoda wywołująca poruszanie się Furiego
  this.idSetInterval = setInterval(function() {
    self.moveFurry();
  },250);

  this.turnFurry = function(event){
    switch (event.which) {
      case 37:
        this.furry.direction = 'left';
        break;
      case 38:
        this.furry.direction = 'up';
        break;
      case 39:
        this.furry.direction = 'right';
        break;
      case 40:
        this.furry.direction = 'down';
        break;
    }
  };

  document.addEventListener('keydown', function(event){
    self.turnFurry(event);
  });

  //metoda reagująca na kolizję Furrego z monetą
  this.checkCoinCollision = function(){
    if(this.furry.x === this.coin.x && this.furry.y === this.coin.y){
      //wszystko musi być wewnątrz if, ponieważ ma się zadziać
      //w momencie kiedy warunek if jest spełniony
      var elementCoin = document.querySelector('.coin');
      elementCoin.classList.remove('coin');
      this.score ++;
      var resultScore = document.querySelector('#score strong');
      resultScore.innerText = this.score;
      this.coin = new Coin();
      this.showCoin();
    }

  };

  this.gameOver = function(){
    if(this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9 ){
      clearInterval(this.idSetInterval);
      this.hideVisibleFurry();
      alert('Koniec gry!. Zobyłeś ' + this.score + ' punktów');
    }
  }


}; //koniec metody Game

module.exports = Game;
