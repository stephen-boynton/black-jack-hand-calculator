/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  const aces = []
  let handTotal = 0;

  //convert face cards, remove aces to aces Array
  for (let i = 0; i < hand.length; i++) {
    let card = hand[i];
    if (card == "J" || card == "K" || card == "Q") {
      hand[i] = 10;
    } else if (card == "A") {
      hand[i] = 0;
      aces.push("A");
    } else {
      hand[i] = parseInt(card);
    }
  }

  //Add total wihtout Ace;
  for (let i = 0; i < hand.length; i++) {
    handTotal += hand[i];
  }

  //Add backi n Aces if they exist;
  if(aces.length > 0) {
    if (aces.length > 1 && handTotal > 9) {
      for (let i = 0; i < aces.length; i++) {
        handTotal++;
      };
    } else if (handTotal > 10) {
      handTotal++;
    } else if (handTotal <= 10) {
      handTotal += 11;
    }
  }

  return handTotal;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
