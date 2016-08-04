function Deck(){
  this.deckcards =[ 'A-H', 'K-H', 'Q-H', 'J-H', '10-H', '9-H', '8-H', '7-H', '6-H', '5-H', '4-H', '3-H', '2-H',  'A-C', 'K-C', 'Q-C', 'J-C', '10-C', '9-C', '8-C', '7-C', '6-C', '5-C', '4-C', '3-C', '2-C', 'A-S', 'K-S', 'Q-S', 'J-S', '10-S', '9-S', '8-S', '7-S', '6-S', '5-S', '4-S', '3-S', '2-S', 'A-D', 'K-D', 'Q-D', 'J-D', '10-D', '9-D', '8-D', '7-D', '6-D', '5-D', '4-D', '3-D', '2-D'];
  this.newdeckcards = this.deckcards

  Deck.prototype.shuffle = function(){
    var temp = 0;
    for(var i = 0; i < this.deckcards.length; i ++){
      var nums = Math.floor(Math.random() * this.deckcards.length - 1);
      temp = this.deckcards[i];
      this.deckcards[i] = this.deckcards[nums];
      this.deckcards[nums] = temp;
      return this.deckcards
    }
  }
  Deck.prototype.reset = function(){
    this.deckcards = this.newdeckcards
    return this.deckcards;
  }
  Deck.prototype.deal = function(){
    this.shuffle();
      var cards = this.deckcards.pop();
      return cards;
      // console.log(this.deckcards.length);

    // var nums = Math.floor(Math.random() * this.deckcards.length - 1);
    // this.card = this.deckcards[nums]
    // for( var i = 1; i < this.deckcards; i++)
  }
} //end of object
var newdeck = new Deck();
console.log(newdeck.deal());



function Player(name){
  this.name = name;
  this.hand = [];

  this.take = function(card){
      // var card = Deck.prototype.deal();
      this.hand.push(card);
      return this.hand;
    }
  }

var allen = new Player('allen')
// allen.take(newdeck.deal());
// console.log(allen.hand);
// console.log(allen.take());
