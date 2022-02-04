$(document).ready(function() {
  $("#tweet-text").on('keyup', function() {
    let tweetCounter = $(this).val().length;
    $("output").text(140-tweetCounter);
    let $tc = $(this).parent().find('.counter');
    console.log("tc test", $(this).parent());
    if (tweetCounter <= 140) {
      $tc.removeClass('error');
    } else {
      $tc.addClass('error');
    }
  })
});