$(document).ready(function () {
  $("form").submit(handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();

  var msg = $('#msg').val();
  var email = $('#email').val();

  console.log(msg);
}

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('msg').value;

  const requestBody = {
    systemEmail: 'valentinkavanveen@gmail.com',
    contactEmail: email,
    message: message
  };

  fetch('https://emailsenderitweek.azurewebsites.net/api/ContactForm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Error: ' + response.status);
      }
    })
    .then(data => {
      if (data === 'Zadaný systémový email nie je platný') {
      } else if (data === 'Zadaný kontaktný email nie je platný') {
      } else if (data === 'Správa je prázdna, vaša žiadosť nebola odoslaná') {
      } else if (data === 'E-mail bol odoslaný') {
      }
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
});