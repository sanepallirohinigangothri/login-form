document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Simple validation
  if (username === 'admin' && password === 'password') {
    // Successful login
    alert('Login successful!');
  } else {
    // Failed login
    document.getElementById('error-message').innerText = 'Invalid username or password.';
  }
});