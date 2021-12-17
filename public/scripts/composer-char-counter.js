$().ready(function() {
  $("#tweet-text").keyup(function() {
    let tweetLength = $(this).val().length;
    let remainder = $(this).siblings(".counter")[0];
    remainder.value = 140 - tweetLength;
    if (remainder.value < 0) {
      $(this).siblings(".counter").addClass("invalid");
    } else {
      $(this).siblings(".counter").removeClass("invalid");
    }
  });
});