// MESSAGE INPUT

const textarea = document.querySelector('.chatbox-message-input')

const chatboxForm = document.querySelector('.chatbox-message-form')



textarea.addEventListener('input', function () {

	let line = textarea.value.split('\n').length



	if(textarea.rows < 6 || line < 6) {

		textarea.rows = line

	}



	if(textarea.rows > 1) {

		chatboxForm.style.alignItems = 'flex-end'

	} else {

		chatboxForm.style.alignItems = 'center'

	}

})







// TOGGLE CHATBOX

const chatboxToggle = document.querySelector('.chatbox-toggle')

const chatboxMessage = document.querySelector('.chatbox-message-wrapper')



chatboxToggle.addEventListener('click', function () {

	chatboxMessage.classList.toggle('show')

})




</!DOCTYPE html>

<html>

<head>

  <title>Log in Freewsad</title>

  <link rel="stylesheet" type="text/css" href="style.css">

</head>

<body>

<div class="wrapper fadeInDown">

  <div id="formContent">

    <!-- Tabs Titles -->

    <h2 class="active"> Sign In </h2>

    <h2 class="inactive underlineHover">Sign Up </h2>

    <!-- Icon -->

    <div class="fadeIn first">

      <img src="https://agmir-media.s3.amazonaws.com/avatar/user.png?AWSAccessKeyId=AKIASQITCY4Y5YL736O2&Signature=RtxrMla2iJetUEOzDXIk5a5J2YQ%3D&Expires=1640806275" id="icon" alt="User Icon" />

    </div>

    <!-- Login Form -->

    <form>

      <input type="text" id="login" class="fadeIn second" name="login" placeholder="Email">

      <input type="text" id="password" class="fadeIn third" name="login" placeholder="Password">

      <input type="submit" class="fadeIn fourth" value="Log In">

    </form>

    <!-- Remind Passowrd -->

    <div id="formFooter">

      <a class="underlineHover" href="#">Forgot Password?</a>

    </div>



  </div>

</div>

</body>

</html>


// DROPDOWN TOGGLE