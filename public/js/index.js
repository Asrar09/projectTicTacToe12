// JavaScript Document

const x = "assets/x-mark.png"
const o = "assets/o-mark.png"
const blank = "assets/blank.png"
let count = 0;
let finished = false;
let game_count = 1;
let o_win = 0;
let x_win = 0;
let tie_count = 0


function reset() {
  $("#game img").each(function(index, value){
   value.src = blank
 })
  $("#game img").removeClass('disable')
  $("#game img").removeClass('o')
  $("#game img").removeClass('x')
  $('#o_turn').text('Turn')
  $('#x_turn').text('')
  count = 0
  tie_count = 0
  finished = false
};

function doWinning(winner, winnerVar){
  let returnVal = confirm("O Wins the game! Play another round?")
  window[winnerVar]++
  $(`#${winnerVar}`).text(window[winnerVar])
  returnVal && reset()
}

$('#game img').click(function(){
  console.log('before this', $('#col-1').children().src)
  if (finished) {
    //do nothing
  } else if ($(this).hasClass('disable')) {
    alert('Already selected')
  } else if (count%2 == 0) {
    count++
    console.log('O')
    this.src = o
    $(this).addClass('disable o')
    $('#o_turn').text('')
    $('#x_turn').text('Turn')
  } else {
    count++
    console.log('X')
    this.src = x
    $(this).addClass('disable x')
    $('#o_turn').text('Turn')
    $('#x_turn').text('')
  }
  console.log('after this', this.src)
})

// $("#game img").on("load", function () {
$('#game img').on("load", function () {
  console.log('onLoad')
  if (count == 9) {
    game_count++
    tie_count++
    alert('Its a tie. It will restart.')
    $('#game_count').text(game_count)
    $('#tie_count').text(tie_count)
    reset()
  } else if (count%2 == 0) {
    if (
      $("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || 
      $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || 
      $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || 
      $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || 
      $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || 
      $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || 
      $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || 
      $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x')
    )
    {
      game_count++
      x_win++
      $('#game_count').text(game_count)
      $('#x_win').text(x_win)
      finished = true
      let returnVal = confirm("X Wins the game! Play another round?")
      returnVal && reset()
      // setTimeout(doWinning(x_win, 'x_win'), 30000);
    }
  } else if  (
    $("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') ||
    $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') ||
    $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') ||
    $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') ||
    $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') ||
    $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') ||
    $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') ||
    $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o')
    ) 
  {
    game_count++
    o_win++
    $('#game_count').text(game_count)
    $('#o_win').text(o_win)
    finished = true
    let returnVal = confirm("O Wins the game! Play another round?")
    returnVal && reset()
    // setTimeout(doWinning(o_win, 'o_win'), 30000);
  }
});
$("#reset").click(reset);

$("#restart").click(function(){
  const restartConfirm = confirm('Restarting the game ?')
  if (restartConfirm){
    game_count = 1
    o_win = 0
    x_win = 0;
    reset()
    $('#game_count').text(game_count)
    $('#x_win').text(x_win)
    $('#o_win').text(o_win)
  }
});
