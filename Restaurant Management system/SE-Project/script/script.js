document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Perform basic validation
    const restaurantName = document.getElementById('restaurantName').value.trim();
    const address = document.getElementById('address').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const bookingTimes = document.getElementById('bookingTimes').value.trim();

    if (restaurantName === '' || address === '' || email === '' || phone === '' || bookingTimes === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Concatenate form data into a message
    const formDataMessage = `
      Restaurant Name: ${restaurantName}
      Address: ${address}
      Email: ${email}
      Phone: ${phone}
      Booking Times: ${bookingTimes}
    `;

    // Show form data in an alert
    alert(formDataMessage);

    // Optionally, you can reset the form after submission
    contactForm.reset();
  });
});
