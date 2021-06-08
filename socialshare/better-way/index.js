/*jshint esversion: 6 */

var urlToShare        = "";
var twitterRefSource  = "";
var customURL         = "";
var theTweetText      = "";
var screenName        = "";
var hashtags          = "";
var relatedAccounts   = "";
var description       = "";
var mediaURL          = "";

var facebookBadge = document.querySelector("#facebook-badge");
var facebook = document.querySelector(".facebook");

facebookBadge.onclick = function(){
  facebookBadge.classList.toggle("selected-badge");
  facebook.classList.toggle("display-hide");
  facebook.classList.toggle("no-height");
};

var linkedinBadge = document.querySelector("#linkedin-badge");
var linkedin = document.querySelector(".linkedin");

linkedinBadge.onclick = function(){
  linkedinBadge.classList.toggle("selected-badge");
  linkedin.classList.toggle("display-hide");
  linkedin.classList.toggle("no-height");
};

var pinterestBadge = document.querySelector("#pinterest-badge");
var pinterest = document.querySelector(".pinterest");

pinterestBadge.onclick = function(){
  pinterestBadge.classList.toggle("selected-badge");
  pinterest.classList.toggle("display-hide");
  pinterest.classList.toggle("no-height");
};

var twitterBadge = document.querySelector("#twitter-badge");
var twitter = document.querySelector(".twitter");

twitterBadge.onclick = function(){
  twitterBadge.classList.toggle("selected-badge");
  twitter.classList.toggle("display-hide");
  twitter.classList.toggle("no-height");
};

var doneButton = document.querySelector("#done-btn");

doneButton.onclick = function(){

  var results = document.querySelector("#results");
  results.classList.toggle("display-hide");


  urlToShare = document.querySelector("#urltoshare").value;
  //console.log(urlToShare);

  twitterRefSource = document.querySelector("#TWITTER_REF_SOURCE").value;
  customURL = document.querySelector("#CUSTOM_URL").value;
  theTweetText = document.querySelector("#THE_TWEET_TEXT").value;
  screenName = document.querySelector("#SCREEN_NAME").value;
  hashtags = document.querySelector("#HASHTAGS").value;
  relatedAccounts = document.querySelector("#RELATED_ACCOUNTS").value;
  description = document.querySelector("#DESCRIPTION").value;
  mediaURL = document.querySelector("#MEDIA_URL").value;

  if(!facebook.classList.contains("display-hide")){
    document.querySelector("#widgets").insertAdjacentHTML('beforeend', facebookText());
    FB.XFBML.parse();
  }

  if(!twitter.classList.contains("display-hide")){
    document.querySelector("#widgets").insertAdjacentHTML('beforeend', twitterText());
    twttr.widgets.load();
  }

  if(!linkedin.classList.contains("display-hide")){
    //console.log("clicked linkedin");
    document.querySelector("#widgets").insertAdjacentHTML('beforeend', linkedinText());
    IN.parse();
  }

  if(!pinterest.classList.contains("display-hide")){
    //console.log("clicked pinterest");
    document.querySelector("#widgets").insertAdjacentHTML('beforeend', pinterestText());
    PinUtils.build();
  }

  doneButton.classList.add("display-hide");
};

function facebookText(){
  return "<div class=\"input-group mb-3\">" +
  "<div class=\"fb-share-button\" data-href=\"" + urlToShare + "\" data-layout=\"button\" data-size=\"small\" data-mobile-iframe=\"true\">" +
  "<a class=\"fb-xfbml-parse-ignore\" target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u=" + urlToShare + "&amp;src=sdkpreparse\">Share</a>" +
  "</div>" +
  "<div class=\"input-group mb-3\">" +
  "<blockquoute>" +
  "<pre>" +
  "<code>" +
  "<h6>Include the JavaScript SDK on your page once, ideally right after the opening body tag.</h6>" +
  "&lt;div id=\"fb-root\"&gt;&lt;/div&gt;" +
  "&lt;script&gt;(function(d, s, id) {\n" +
  "    var js, fjs = d.getElementsByTagName(s)[0];\n" +
  "    if (d.getElementById(id)) return;\n" +
  "    js = d.createElement(s); js.id = id;\n" +
  "    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11';\n" +
  "    fjs.parentNode.insertBefore(js, fjs);\n" +
  "  }(document, 'script', 'facebook-jssdk'));&lt;/script&gt;\n" +
  "  <h6>Place this code wherever you want the button to appear on your page.</h6>" +
  "  &lt;div class=\"fb-share-button\" data-href=\"" + urlToShare + "\" data-layout=\"button\" data-size=\"small\" data-mobile-iframe=\"true\"&gt;\n" +
  "  &lt;a class=\"fb-xfbml-parse-ignore\" target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u=" + urlToShare + "&amp;src=sdkpreparse\"&gt;Share&lt;/a&gt;\n" +
  "  &lt;/div&gt;" +
  "  </code>" +
  "  </pre>" +
  "  </blockquote>" +
    "</div>";
  }

function twitterText(){
  return "<div class=\"input-group mb-3\"><a class=\"twitter-share-button\" \"href=\"https://twitter.com/share?ref_src=" + twitterRefSource +
  "\" data-text=\"" + theTweetText + "\"data-url=\"" + urlToShare + "\"data-via=\"" + screenName + "\"" +
  "data-hashtags=\"" + hashtags + "\"data-related=\"" + relatedAccounts + "\"data-show-count=\"false\">Tweet</a></div>" +
  "<div class=\"input-group mb-3\">" +
  "<blockquoute>"+
  "<pre>" +
  "<code>" +
  "<h6>Include the js once per page, right before the closing </BODY> tag.</h6>" +
  "&lt;script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"&gt;&lt;/script&gt;" +
  "<h6>Copy and paste this code into your page where you want your button to appear.</h6>" +
  //"&lt;div class=\"input-group mb-3\"&gt;\n" +
  "&lt;a class=\"twitter-share-button\"\n" +
  "href=\"https://twitter.com/share?ref_src=" + twitterRefSource + "\"\n" +
  "data-text=\"" + theTweetText + "\"\n" +
  "data-url=\"" + urlToShare + "\"\n" +
  "data-via=\"" + screenName + "\"\n" +
  "data-hashtags=\"" + hashtags + "\"\n" +
  "data-related=\"" + relatedAccounts + "\"\n" +
  "data-show-count=\"false\"&gt;Tweet&lt;/a&gt;\n" +
  "</code>" +
  "</pre>" +
  "</blockquote>" +
  "</div>";
}

function linkedinText(){
  return "<div class=\"input-group mb-3\">" +
  "<script type=\"IN/Share\" data-url=" + urlToShare + "></script>" +
  "</div>" +
  "<div class=\"input-group mb-3\">" +
  "<blockquoute>" +
  "<pre>" +
  "<code>" +
  "<h6>Include the js once per page, right before the closing &lt;/BODY&gt; tag.</h6>" +
  "&lt;script src=\"//platform.linkedin.com/in.js\" type=\"text/javascript\"&gt;lang: en_US&lt;/script&gt;" +
  "<h6>Copy and paste this code into your page where you want your button to appear.</h6>" +
  "&lt;script type=\"IN/Share\" data-url=" + urlToShare + "&gt;&lt;/script&gt;" +
  "</code>" +
  "</pre>" +
  "</blockquote>" +
  "</div>";
}

function pinterestText(){
  return "<div class=\"input-group mb-3\">" +
  "<a data-pin-do=\"buttonPin\" href=\"https://www.pinterest.com/pin/create/button/?url=" + urlToShare + "&media=" + mediaURL + "&description=" + description + "\"></a>" +
  "</div>" +
  "<div class=\"input-group mb-3\">" +
  "<blockquoute>" +
  "<pre>" +
  "<code>" +
  "<h6>Include the js once per page, right before the closing &lt;/BODY&gt; tag.</h6>" +
  "&lt;script async defer src=\"//assets.pinterest.com/js/pinit.js\"&gt;&lt;/script&gt;" +
  "<h6>Copy and paste this code into your page where you want your button to appear.</h6>" +
  "&lt;a data-pin-do=\"buttonPin\" href=\"https://www.pinterest.com/pin/create/button/?url=" + urlToShare + "&media=" + mediaURL + "&description=" + description + "\"&gt;&lt;/a&gt;" +
  "</code>" +
  "</pre>" +
  "</blockquote>" +
  "</div>";
}
