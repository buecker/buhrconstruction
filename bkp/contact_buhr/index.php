<!DOCTYPE HTML>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Contact Form</title>
<link rel="stylesheet" type="text/css" href="style.css">
<?php include "{$_SERVER['DOCUMENT_ROOT']}/includes/header.php" ?>
</head>

<body>

    <header class="body">
    </header>

    <section class="body">
		<form method="post" action="/contact_buhr/submit.php">
        
    <label>*Name</label>
    <input name="name" placeholder="Type Here">
	
	<label>Address</label>
	<input name="address1" placeholder="Type Here">
	
	<label>City, State and Zip</label>
	<input name="address2" placeholder="Type Here">
	            
    <label>Daytime Phone</label>
	<input name="daytimephone" placeholder="Type Here">
	
	<label>Cellphone</label>
	<input name="cellphone" placeholder="Type Here">
	
	<label>Fax</label>
	<input name="fax" placeholder="Type Here">
		
	<label>*Email</label>
    <input name="email" type="email" placeholder="Type Here">
            
    <label>How did you hear about us?</label>
	<textarea name="here" placeholder="Type Here"></textarea>
	
	<label>Comments or Questions</label>
    <textarea name="message" placeholder="Type here and please include how you would prefer to be contacted"></textarea>
	<script type="text/javascript"
     src="http://www.google.com/recaptcha/api/challenge?k=6Ld0nuYSAAAAAGAZy_OwXcSj_BndNioyzAIAaL5g">
  </script>
  <noscript>
    require_once('recaptchalib.php');
  $publickey = "6Ld0nuYSAAAAAGAZy_OwXcSj_BndNioyzAIAaL5g"; // you got this from the signup page
  echo recaptcha_get_html($publickey);
     <iframe src="http://www.google.com/recaptcha/api/noscript?k=6Ld0nuYSAAAAAGAZy_OwXcSj_BndNioyzAIAaL5g"
         height="300" width="500" frameborder="0"></iframe><br>
     <textarea name="recaptcha_challenge_field" rows="3" cols="40">
     </textarea>
     <input type="hidden" name="recaptcha_response_field"
         value="manual_challenge">
  </noscript>
  	
    <input id="submit" name="submit" type="submit" value="Submit">
      
</form>
    </section>

    <footer class="body">
    </footer>

</body>
<?php include "{$_SERVER['DOCUMENT_ROOT']}/includes/footer.php" ?>
</html>