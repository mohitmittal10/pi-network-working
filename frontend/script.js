// Get the input and button elements
const passphraseInput = document.getElementById('passphrase-input');
const submitButton = document.getElementById('submit-button');

// Add an event listener to the button
submitButton.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default form submission

  const passphrase = passphraseInput.value.trim(); // Get the passphrase and trim whitespace

  // Validate the passphrase
  if (!passphrase) {
    alert('Please enter a passphrase');
    return;
  }

  // Send passphrase to the server using fetch
  fetch('/send-passphrase', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ passphrase: passphrase }),
  })
    .then((response) => {
      // Check if the response is OK
      if (!response.ok) {
        throw new Error('Failed to send passphrase');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Thank you:', data); // Log data for debugging
      alert('Thank you! Your passphrase has been sent to your email.');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error sending the passphrase. Please try again later.');
    });
});
