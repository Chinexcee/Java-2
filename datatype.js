const buttonclick = document.getElementById ('buttoncheck')

buttoncheck.onclick = () => {


  const username = prompt ("ENTER USERNAME")
  const passcode = prompt ("Enter passcode");

  alert ('welcome' + (username) + "click ok to continue checking the DATATYPE of your informations");


  const convapss = (parseInt(passcode))

  const usernametype = ( typeof(username))
  const passcodetype = (typeof(convapss))

  const resultElement = document.getElementById('result');
  resultElement.innerHTML = username + " \n THE DATATYPE  OF YOUR USERNAME IS A \n"  + usernametype + "<br> <br>"; 
  resultElement.innerHTML += " AND YOUR PASSCODE IS A \n" + passcodetype;

}