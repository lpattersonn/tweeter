/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  // Templates for Tweets
  function createTweetElement(tweet) {
    let $tweet = $(`<article class="tweet">
  <header class="article-header">
  <div class="tweetID">
    <img class="imageSrc" src=${
      tweet.user.avatars
    } alt="Tiny App" width="50" height="50"/>
      <h1 class="tweetHeader">${tweet.user.name}<h1>
  </div>
  <h1 class="tweetHandle"> ${tweet.user.handle}</h1>
   </header>
         <h1 class="tweetBody"> ${escape(tweet.content.text)}</h1>
  <footer> 
    <div class="articleFooter">
    <h1 class= tweetfooter>${timeago.format(tweet.created_at)}</h1>
    <div class="foot-div">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </div>
  </div>
  </footer>
</article>`);
    return $tweet;
  }

  // Render Tweets
  function renderTweets(tweets) {
    $("#tweets-container").empty();
    for (let singleTweet of tweets) {
      const $tweet = createTweetElement(singleTweet);
      $("#tweets-container").prepend($tweet);
    }
  }

  // Escape function
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // Form post request using Ajax
  $("#newTweetForm").on("submit", function (event) {
    event.preventDefault();
    const content = $(this).serialize();
    const verify = content.slice(5);
    // Form Validation
    if (verify.length === 0 || verify === null) {
      alert("Tweet content is not present");
    } else if (verify.length > 140) {
      alert("Tweet content is too long");
    } else {
      $.ajax({
        url: "http://localhost:8080/tweets",
        method: "POST",
        data: content,
      })
        .done((result) => {
          loadtweets();
        })
        .fail((err) => console.log(err.message));
    }
  });

  // Get Request from http://localhost:8080/tweets using AJAX
  const loadtweets = function () {
    $.ajax({
      url: "/tweets/",
      method: "GET",
    })
      .done(function (result) {
        renderTweets(result);
      })
      .fail((err) => console.log(err.message));
  };
  loadtweets();
});
