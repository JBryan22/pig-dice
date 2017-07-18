var playerOneTotal = 0;
var playerTwoTotal = 0;
var currentTurnTotal = 0;
var isPlayerOneTurn = true;


$(function(){
  $("#roll").click(function(){
    var roll = parseInt((Math.random() * 6)) + 1;
    if (roll === 1) {
      isPlayerOneTurn = !isPlayerOneTurn;
      if (isPlayerOneTurn) {
        $(".player-turn-header").text("One's Turn");
      } else {
        $(".player-turn-header").text("Two's Turn");
      }
      $(".rolled").text('');
      currentTurnTotal = 0;
      $(".turn-total").text(currentTurnTotal);
    } else {
      $(".rolled").append(roll + ' ');
      currentTurnTotal += roll;
      $(".turn-total").text(currentTurnTotal);
    }
  });

  $("#hold").click(function(){
    if (isPlayerOneTurn) {
      if (!($(".player-one-total").text())) {
        $(".player-one-total").text(currentTurnTotal);
      } else {
        $(".player-one-total").text(currentTurnTotal + parseInt($(".player-one-total").text()));
        if (parseInt($(".player-one-total").text()) >= 100) {
          $("body").text('Player One Wins!');
        }
      }
      $(".player-turn-header").text("Two's Turn");
      $(".rolled").text('');
      currentTurnTotal = 0;
      $(".turn-total").text(currentTurnTotal);
      isPlayerOneTurn = !isPlayerOneTurn;
    } else {
      if (!($(".player-two-total").text())) {
        $(".player-two-total").text(currentTurnTotal);
      } else {
        $(".player-two-total").text(currentTurnTotal + parseInt($(".player-two-total").text()));
      }
      if (parseInt($(".player-one-total").text()) >= 100) {
        $("body").text('Player Two Wins!');
      }
      $(".player-turn-header").text("One's Turn");
      $(".rolled").text('');
      currentTurnTotal = 0;
      $(".turn-total").text(currentTurnTotal);
      isPlayerOneTurn = !isPlayerOneTurn;
    }
  });

});
