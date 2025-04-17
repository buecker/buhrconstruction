<!DOCTYPE HTML>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Thank You for Your Submission</title>
<link rel="stylesheet" type="text/css" href="style.css">

 <?php include "{$_SERVER['DOCUMENT_ROOT']}/includes/header.php" ?>
</head>
<body>
		<header class="body">
		</br></br></br></br></br></br></br></br>
		</header>
	<section class="body">
	<?php
		/* Anything that goes in here is only performed if the form is submitted */

		$name = $_POST['name'];
		$address = $_POST ['address'];
		$address2 = $_POST ['address2'];
		$daytimephone = $_POST ['daytimephone'];
		$cellphone = $_POST ['cellphone'];
		$fax = $_POST ['fax'];
		$here = $_POST ['here'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		$from = 'From: Buhrconstruction.com'; 
		$to = 'mbuhr@buhrconstruction.com'; 
		$subject = 'New Contact Form Submission from Website';
		$human = $_POST['human'];

/*	$body = "From: $name\n E-Mail: $email\n Message:\n $message";   */

	 $body = "From: $name\n' Address: $address\n Address Line 2: $address2\n Daytime Phone: $daytimephone\n Cellphone: $cellphone\n Fax: $fax\n Hear about us?: $hear\n Email: $email\n Message: $message\n";
 
  require_once('recaptchalib.php');
  $privatekey = "6Ld0nuYSAAAAAIp5WDYtGGsbVQiw8DNeSiG-ZGgY";
  $resp = recaptcha_check_answer ($privatekey,
                                $_SERVER["REMOTE_ADDR"],
                                $_POST["recaptcha_challenge_field"],
                                $_POST["recaptcha_response_field"]);

  if (!$resp->is_valid) {
    // What happens when the CAPTCHA was entered incorrectly
    die ("The reCAPTCHA wasn't entered correctly. Go back and try it again." .
         "(reCAPTCHA said: " . $resp->error . ")");
  } else if ($_POST['submit']) {
 			 
            if (mail ($to, $subject, $body, $from)) { 
	        echo '<p>Your message has been sent!</p>';
	    } else { 
	        echo '<p>Something went wrong, go back and try again!</p>'; 
	    } 
	} else if ($_POST['submit']) {
	    echo '<p>You answered the anti-spam question incorrectly!</p>';
	}
		 else {
        echo '<p>You need to fill in all required fields!!</p>';
			}
	
	?>
</section>
</br></br></br></br></br>
</body>
<footer>
<?php include "{$_SERVER['DOCUMENT_ROOT']}/includes/footer.php" ?>
</footer>
</html>