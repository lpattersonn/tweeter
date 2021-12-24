$(document).ready(function () {
  // "keypress registers a keyboard character except for arrow entries"
  const $tweetText = $("#tweet-text");
  let tweetValue = $(".counter")[0];
  tweetValue.value = 140;
  $tweetText.on("input", function tweetReduceChar(e) {
    if (this) {
      tweetValue.value = 140 - this.value.length;
    }
    if (tweetValue.value < 0) {
      $(".counter").css({ color: "red" });
    }
    if (tweetValue.value >= 0) {
      $(".counter").css({ color: "black" });
    }
  });
  $tweetText.on("keydown", function tweetIncreaseChar(e) {
    const key = e.key;
    if (key === "Backspace" && tweetValue.value < 140) {
      tweetValue.value++;
    }
    if (tweetValue.value >= 0) {
      $(".counter").css({ color: "black" });
    }
  });
});
