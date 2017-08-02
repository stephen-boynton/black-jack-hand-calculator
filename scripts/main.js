/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  cont aces = []
  //convert face cards
  for (let i = 0; i < hand.length; i++) {
    let card = hand[i];
    if (card === "J" || card === "K" || card === "Q") {
      card = 10;
      console.log("");
    } else if (card === "A") {
      hand.splice(i, 1);
      aces.push(11);
    }
  }

  //Add total wihtout Ace;

  //add Aces

  return;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
