/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

const tweetData = {
  user: {
    name: "Newton",
    avatars: "https://i.imgur.com/73hZDYK.png",
    handle: "@SirIsaac",
  },
  content: {
    text: "If I have seen further it is by standing on the shoulders of giants",
  },
  created_at: 1461116232227,
};

$(document).ready(function () {
  function createTweetElement(tweet) {
    let $tweet = $(`<article class="tweet">
  <header class="article-header">
  <div class="tweetID">
    <img class="imageSrc" src=${
      tweet.user.avatars
    } alt="Tiny App" width="50" height="50"/>
      <h1 class="tweetHeader">${tweet.user.name}<h1>
  </div>
  <h1  class="tweetHandle"> ${tweet.user.handle}</h1>
   </header>
         <h1 class="tweetBody"> ${tweet.content.text}</h1>
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

  function renderTweets(tweets) {
    // loops through tweets
    for (let singleTweet of tweets) {
      // calls createTweetElement for each tweet
      const $tweet = createTweetElement(singleTweet);
      // takes return value and appends it to the tweets container
      $("#tweets-container").append($tweet);
    }
  }
  renderTweets(data);
});
