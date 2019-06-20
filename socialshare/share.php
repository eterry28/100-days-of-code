<?php

$fb = $tw = $li = $pn = "1"; 
$urltoshare = $THE_TWEET_TEXT = $SCREEN_NAME = $HASHTAGS = $RELATED_ACCOUNTS = $MEDIA_URL = $DESCRIPTION = ""; 

if(isset($_POST))
{
    $fb = checked($_POST, "facebook");
    $tw = checked($_POST, "twitter");
    $li = checked($_POST, "linkedin");
    $pn = checked($_POST, "pinterest");

    $urltoshare         = prepopulate($_POST, "urltoshare");
    $THE_TWEET_TEXT     = prepopulate($_POST, "THE_TWEET_TEXT");
    $SCREEN_NAME        = prepopulate($_POST, "SCREEN_NAME");
    $HASHTAGS           = prepopulate($_POST, "HASHTAGS");
    $RELATED_ACCOUNTS   = prepopulate($_POST, "RELATED_ACCOUNTS");
    $TWITTER_REF_SOURCE = prepopulate($_POST, "TWITTER_REF_SOURCE");
    $MEDIA_URL          = prepopulate($_POST, "MEDIA_URL");
    $DESCRIPTION        = prepopulate($_POST, "DESCRIPTION");

}

function prepopulate($data, $element)
{
    if(isset($data[$element]))
        return $data[$element];
}

function checked($item, $site)
{
    return isset($item[$site]) ? "checked" : 1;
}

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Native Sharing Buttons</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <style>
        h3.question { padding:25px 10px; }
        h4.detail, span.detail { padding:10px 5px;}
        input[type="text"]:disabled { background:#ffffff; }
        div#monarch-facebook-details { display: none; }
        div#monarch-twitter-details { display: none; }
        div#monarch-linkedin-details { display: none; }
        div#monarch-pinterest-details { display: none; }
        pre { white-space: pre-wrap;  }
    </style>
    <script>
        function checkDivs(){
            divs = ["monarch-facebook-details", "monarch-twitter-details", "monarch-linkedin-details", "monarch-pinterest-details"];
            if( "<?php print $fb; ?>" !== "1")
                document.getElementById(divs[0]).style.display = 'block';
            
            if( "<?php print $tw; ?>" !== "1")
                document.getElementById(divs[1]).style.display = 'block';
            
            if( "<?php print $li; ?>" !== "1")
                document.getElementById(divs[2]).style.display = 'block';

            if( "<?php print $pn; ?>" !== "1")
                document.getElementById(divs[3]).style.display = 'block';
        }

        function toggleDiv(id) {
            var _targetdiv = document.getElementById(id);

            if(_targetdiv.style.display == 'block'){
                _targetdiv.style.display = 'none';
            } else {
                _targetdiv.style.display = 'block';
            }        
        }
    </script>
</head>
<body onload="checkDivs();return true;">
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<div class="container">
  <div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm">
        <h1><span class="badge badge-secondary">Social Sharing Buttons</span></h1>

        <form action="<?php $_SERVER['PHP_SELF']; ?>" method="post">

            <h3 class="question">Which social sites do you want to share with?<span class="badge badge-secondary"></span></h3>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input <?php print $fb; ?> name="facebook" onclick="toggleDiv('monarch-facebook-details')" type="checkbox" aria-label="Checkbox for following text input" value="Facebook">
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" value="Facebook" disabled>

                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input <?php print $tw; ?> name="twitter" onclick="toggleDiv('monarch-twitter-details')" type="checkbox" aria-label="Checkbox for following text input" value="Twitter">
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" value="Twitter" disabled>

                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input <?php print $li; ?> name="linkedin" onclick="toggleDiv('monarch-linkedin-details')" type="checkbox" aria-label="Checkbox for following text input" value="LinkedIn">
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" value="LinkedIn" disabled>

                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input <?php print $pn; ?> name="pinterest" onclick="toggleDiv('monarch-pinterest-details')" type="checkbox" aria-label="Checkbox for following text input" value="Pinterest">
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" value="Pinterest" disabled>
            </div>

            <h3 class="question">What URL do you want to share?</h3>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">URL to Share:</span>
                </div>
                <input value="<?php echo $urltoshare; ?>" name="urltoshare" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>

            <div id="monarch-facebook-details"></div>

            <div id="monarch-twitter-details">
                <h4 class="detail">Twitter needs the following information.</h4>
                <input type="hidden" name="TWITTER_REF_SOURCE" value="<? echo $_SERVER['PHP_SELF']; ?>" />
                <input type="hidden" name="CUSTOM_URL" value="<?php echo $urltoshare; ?>" />

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Text to Tweet:</span>
                    </div>
                    <textarea name="THE_TWEET_TEXT" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"><?php echo $THE_TWEET_TEXT; ?></textarea>                    
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Screen name sending the Tweet:</span>
                    </div>
                    <input value="<?php echo $SCREEN_NAME; ?>" name="SCREEN_NAME" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">                    
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Hashtags: (optional)</span>
                    </div>
                    <input value="<?php echo $HASHTAGS; ?>" name="HASHTAGS" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">                    
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Related accounts: (optional)</span>
                    </div>
                    <input value="<?php echo $RELATED_ACCOUNTS; ?>" name="RELATED_ACCOUNTS" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">                    
                </div>
            </div>

            <div id="monarch-linkedin-details"></div>

            <div id="monarch-pinterest-details">
                <h4 class="detail">Pinterest needs the following information.</h4>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Description:</span>
                    </div>
                    <input value="<?php echo $DESCRIPTION; ?>" name="DESCRIPTION" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">Media URL:</span>
                    </div>
                    <input value="<?php echo $MEDIA_URL; ?>" name="MEDIA_URL" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
            
        </form>

        <h4 class="detail">Results!</h4>

        
            
        <?php
            

            if($fb != 1)
            {
                print "<div class=\"input-group mb-3\">";
                print "<div class=\"fb-share-button\" data-href=\"" . $urltoshare ."\" data-layout=\"button\" data-size=\"small\" data-mobile-iframe=\"true\">";
                print "<a class=\"fb-xfbml-parse-ignore\" target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u=$urltoshare&amp;src=sdkpreparse\">Share</a>";
                print "</div>";

echo <<< FB
                <blockquoute>                
                <pre>                
                <code>
                <h6>Include the JavaScript SDK on your page once, ideally right after the opening body tag.</h6>
                &lt;div id="fb-root"&gt;&lt;/div&gt;
                &lt;script&gt;(function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s); js.id = id;
                    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11';
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));&lt;/script&gt;

                <h6>Place this code wherever you want the button to appear on your page.</h6>
                &lt;div class="fb-share-button" data-href="{$urltoshare}" data-layout="button" data-size="small" data-mobile-iframe="true"&gt;
                &lt;a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=$urltoshare&amp;src=sdkpreparse"&gt;Share&lt;/a&gt; 
                &lt;/div&gt;
                </code>
                </pre>
                </blockquote>
FB;
                print "</div>";
                                
            }
            if($tw != 1)
            {
                print "<div class=\"input-group mb-3\">";             
                print "<a class=\"twitter-share-button\""; 
                print "href=\"https://twitter.com/share?ref_src={$TWITTER_REF_SOURCE}\"";
                print "data-text=\"{$THE_TWEET_TEXT}\""; 
                print "data-url=\"{$urltoshare}\""; 
                print "data-via=\"{$SCREEN_NAME}\""; 
                print "data-hashtags=\"{$HASHTAGS}\""; 
                print "data-related=\"{$RELATED_ACCOUNTS}\"";
                print "data-show-count=\"false\">Tweet</a>";

echo <<< TW
                <blockquoute>                
                <pre>                
                <code>
                <h6>Include the js once per page, right before the closing &lt;/BODY&gt; tag.</h6>
                &lt;script async src="https://platform.twitter.com/widgets.js" charset="utf-8"&gt;&lt;/script&gt;

                <h6>Copy and paste this code into your page where you want your button to appear.</h6>
                &lt;div class="input-group mb-3"&gt;
                &lt;a class="twitter-share-button" 
                href="https://twitter.com/share?ref_src={$TWITTER_REF_SOURCE}"
                data-text="{$THE_TWEET_TEXT}"
                data-url="{$urltoshare}"
                data-via="{$SCREEN_NAME}"
                data-hashtags="{$HASHTAGS}" 
                data-related="{$RELATED_ACCOUNTS}"
                data-show-count="false"&gt;Tweet&lt;/a&gt;
                </code>
                </pre>
                </blockquote>
TW;
                
                print "</div>";

            }
            if($li != 1)
            {           
                print "<div class=\"input-group mb-3\">";             
                print "<script type=\"IN/Share\" data-url=\"{$urltoshare}\"></script>";        
                
echo <<< LINK
                <blockquoute>                
                <pre>                
                <code>
                <h6>Include the js once per page, right before the closing &lt;/BODY&gt; tag.</h6>
                &lt;script src="//platform.linkedin.com/in.js" type="text/javascript"&gt;lang: en_US&lt;/script&gt;

                <h6>Copy and paste this code into your page where you want your button to appear.</h6>
                &lt;script type="IN/Share" data-url="{$urltoshare}"&gt;&lt;/script&gt;
                </code>
                </pre>
                </blockquote>
LINK;
                print "</div>";
            }

            if($pn != 1)
            {
                print "<div class=\"input-group mb-3\">";
                print "<a data-pin-do=\"buttonPin\" href=\"https://www.pinterest.com/pin/create/button/?url={$urltoshare}&media={$MEDIA_URL}&description={$DESCRIPTION}\"></a>";
                
echo <<< PIN
                <blockquoute>                
                <pre>                
                <code>
                <h6>Include the js once per page, right before the closing &lt;/BODY&gt; tag.</h6>
                &lt;script async defer src="//assets.pinterest.com/js/pinit.js"&gt;&lt;/script&gt;

                <h6>Copy and paste this code into your page where you want your button to appear.</h6>
                &lt;a data-pin-do=\"buttonPin\" href=\"https://www.pinterest.com/pin/create/button/?url={$urltoshare}&media={$MEDIA_URL}&description={$DESCRIPTION}\"&gt;&lt;/a&gt;
                </code>
                </pre>
                </blockquote>
PIN;
                print "</div>";
            }            
        ?>
                
        </div>
    </div>
    <div class="col-sm-2"></div>
  </div>
</div>



    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    <script src="//platform.linkedin.com/in.js" type="text/javascript"> lang: en_US</script>
    <script async defer src="//assets.pinterest.com/js/pinit.js"></script>
</body>
</html>
