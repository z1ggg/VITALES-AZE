// Sign Up
document.getElementById("signupForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    localStorage.setItem("user", JSON.stringify({ username, email, password }));
    alert("Account created! You can now login.");
    bootstrap.Modal.getInstance(document.getElementById("signupModal")).hide();
  });
  
  // Login
  document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const storedUser = JSON.parse(localStorage.getItem("user"));
  
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      alert("Login successful!");
      bootstrap.Modal.getInstance(document.getElementById("loginModal")).hide();
    } else {
      alert("Invalid credentials.");
    }
  });
  