// REGISTER

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if user already exists
  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    document.getElementById("registerMessage").innerText =
      "User already exists!";
    return;
  }

  const user = {
    name,
    email,
    password
  };

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));

  document.getElementById("registerMessage").innerText =
    "Account created successfully!";

  registerForm.reset();
});


// LOGIN

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const validUser = users.find(
    user => user.email === email && user.password === password
  );

  if (!validUser) {
    document.getElementById("loginMessage").innerText =
      "Invalid email or password!";
    return;
  }

  localStorage.setItem("loggedInUser", JSON.stringify(validUser));

  document.getElementById("loginMessage").innerText =
    "Login successful!";

  setTimeout(() => {
    window.location.href = "profile.html";
  }, 1000);
});