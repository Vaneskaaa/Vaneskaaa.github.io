// $(document).ready(function () {
//   $("form").submit(handleSubmit);
// });

// async function handleSubmit(event) {
//   event.preventDefault();
//   console.log("input Email:", $('email').val());
//   console.log("input Sprava:", $('msg').val());

//   var msg = $('#msg').val();
//   var email = $('#email').val();

//   let data = {
//     systemEmail: "valentinkavanveen@gmail.com",
//     contactEmail: $('#email').val(),
//     //message: ""
//     message: $('#msg').val()
//   };


$(document).ready(function () {
  $("form").submit(handleSubmit);
  generateRandomNumber();
});

function generateRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 1000) + 1;
  $('#randomNumber').text(randomNumber);
}

async function handleSubmit(event) {
  event.preventDefault();
  console.log("input Email:", $('email').val());
  console.log("input Sprava:", $('msg').val());
  var antiSpamInput = $('#antiSpam').val();
  var randomNumber = $('#randomNumber').text();

  if (antiSpamInput !== randomNumber.toString()) {
    alert("Anti-Spam verification failed. Please try again.");
    return;
  }

  let data = {
    systemEmail: "valentinkavanveen@gmail.com",
    contactEmail: $('#email').val(),
    message: $('#msg').val(),
    // message: ""
  };


  console.log("Data:", data);


  let response = await fetch("https://emailsenderitweek.azurewebsites.net/api/ContactForm",{
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)

});

  let to = await response.json();
  console.log("Odpoveď SMTP API:", to);

  if (to === "Zadaný systémový email nie je validný"){
    alert("Zadaný systémový email nie je validný")

  } else if(to==="Zadaný kontaktný email nie je validný"){
    alert("Zadaný kontaktný email nie je validný")

  } else if(to==="Správa je prázdna, vaša žiadosť nebola odoslaná"){
    alert("Správa je prázdna, vaša žiadosť nebola odoslaná")

  } else if(to==="Email bol odoslaný"){
    alert("Email bol odoslaný")
    form.reset()
  }}
  