!function(t){var r={};function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,r,e){i.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(r,"a",r),r},i.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},i.p="",i(i.s=3)}([function(t,r,i){"use strict";t.exports=function(){this.x=0,this.y=0,this.direction="right"}},function(t,r,i){"use strict";t.exports=function(){this.x=Math.floor(10*Math.random()),this.y=Math.floor(10*Math.random())}},function(t,r,i){"use strict";var e=i(1),n=i(0);t.exports=function(){this.board=document.querySelectorAll("#board > div"),this.furry=new n,this.coin=new e,this.score=0;var t=this;this.index=function(t,r){return t+10*r},this.showFurry=function(){this.board[this.index(this.furry.x,this.furry.y)].classList.add("furry")},this.showCoin=function(){this.board[this.index(this.coin.x,this.coin.y)].classList.add("coin")},this.moveFurry=function(){this.hideVisibleFurry(),"right"===this.furry.direction?this.furry.x=this.furry.x+1:"left"===this.furry.direction?this.furry.x=this.furry.x-1:"up"===this.furry.direction?this.furry.y=this.furry.y-1:"down"===this.furry.direction&&(this.furry.y=this.furry.y+1),this.showFurry(),this.checkCoinCollision(),this.gameOver()},this.hideVisibleFurry=function(){document.querySelector(".furry").classList.remove("furry")},this.idSetInterval=setInterval(function(){t.moveFurry()},250),this.turnFurry=function(t){switch(t.which){case 37:this.furry.direction="left";break;case 38:this.furry.direction="up";break;case 39:this.furry.direction="right";break;case 40:this.furry.direction="down"}},document.addEventListener("keydown",function(r){t.turnFurry(r)}),this.checkCoinCollision=function(){this.furry.x===this.coin.x&&this.furry.y===this.coin.y&&(document.querySelector(".coin").classList.remove("coin"),this.score++,document.querySelector("#score strong").innerText=this.score,this.coin=new e,this.showCoin())},this.gameOver=function(){(this.furry.x<0||this.furry.x>9||this.furry.y<0||this.furry.y>9)&&(clearInterval(this.idSetInterval),this.hideVisibleFurry(),alert("Koniec gry!. Zobyłeś "+this.score+" punktów"))}}},function(t,r,i){"use strict";document.addEventListener("DOMContentLoaded",function(t){var r=new(i(2));r.showFurry(),r.showCoin()})}]);