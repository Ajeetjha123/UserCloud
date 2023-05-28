function saveInput(event) {
  event.preventDefault();
  const formValues = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
  };

  axios.post('https://crudcrud.com/api/6472f6d9786dbb03e878ce90', formValues)
    .then(response => {
      console.log(response.data); // Optional: Display the response data in the console
      displayFormValues(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}

function displayFormValues(savedValues) {
  const displayArea = document.createElement('div');
  const namePara = document.createElement('p');
  const emailPara = document.createElement('p');
  const phonePara = document.createElement('p');
  namePara.textContent = `Name: ${savedValues.name}`;
  emailPara.textContent = `Email: ${savedValues.email}`;
  phonePara.textContent = `Phone: ${savedValues.phone}`;
  displayArea.appendChild(namePara);
  displayArea.appendChild(emailPara);
  displayArea.appendChild(phonePara);

  const existingDisplayArea = document.getElementById('displayArea');
  if (existingDisplayArea) {
    existingDisplayArea.remove(); // Remove the existing display area if it exists
  }

  displayArea.id = 'displayArea'; // Set an ID for the display area
  document.body.appendChild(displayArea);
}

window.onload = function() {
  if (localStorage.getItem('formValues')) {
    const savedValues = JSON.parse(localStorage.getItem('formValues'));
    displayFormValues(savedValues);
  }

  axios.get('https://crudcrud.com/api/6472f6d9786dbb03e878ce90')
    .then(response => {
      const data = response.data;
      if (data) {
        localStorage.setItem('formValues', JSON.stringify(data));
        displayFormValues(data);
      }
    })
    .catch(error => {
      console.error(error);
    });
};
