function saveInput(event) {
  event.preventDefault();
  const formValues = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
  };

  axios.post('https://crudcrud.com/api/appominent/6472f6d9786dbb03e878ce90', formValues)
    .then(response => {
      console.log(response.data); // Optional: Display the response data in the console
      displayFormValues();
    })
    .catch(error => {
      console.error(error);
    });
}

