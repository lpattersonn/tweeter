$(document).ready(function () {
  // "keypress registers a keyboard character except for arrow entries"
  const $tweetText = $("#tweet-text");
  let tweetValue = $(".counter")[0];
  tweetValue.value = 140;

  $tweetText.on("keypress", function tweetReduceChar(e) {
    if (this) {
      tweetValue.value--;
    }
    if (tweetValue.value < 0 ) {
      $(".counter").css({ color: "red" });
    }
    if (tweetValue.value >= 0) {
      $(".counter").css({ color: "black" });
    } 
  });
  $tweetText.on("keydown", function tweetIncreaseChar(e) {
    const key = e.key;
    if (key === "Backspace" && (tweetValue.value) < 140) {
      tweetValue.value++;
    } if (tweetValue.value >= 0) {
      $(".counter").css({ color: "black" });
    } 
  });
});
/* 
  const $button = $("#update-button");

  $button.on("click", function () {
    console.log(this);
  }); */

//const $newChannelInput = $('#new-channel-input');
