// Modal logic
const openModalBtn = document.getElementById('open-auth-modal');
const closeModalBtn = document.getElementById('close-auth-modal');
const authModal = document.getElementById('auth-modal');

openModalBtn.addEventListener('click', () => {
  authModal.style.display = 'block';
});
closeModalBtn.addEventListener('click', () => {
  authModal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === authModal) authModal.style.display = 'none';
});

// OAuth button handlers (placeholders)
document.getElementById('signin-x').addEventListener('click', () => {
  alert('X.com sign-in coming soon!');
});
document.getElementById('signin-google').addEventListener('click', () => {
  alert('Google sign-in coming soon!');
});
document.getElementById('signin-twitch').addEventListener('click', () => {
  alert('Twitch sign-in coming soon!');
});
document.getElementById('signin-discord').addEventListener('click', () => {
  alert('Discord sign-in coming soon!');
});

// Handles login/signup with Supabase
const form = document.getElementById('auth-form');
const emailInput = document.getElementById('auth-email');
const passwordInput = document.getElementById('auth-password');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const messageDiv = document.getElementById('auth-message');

// Login handler
loginBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  messageDiv.textContent = '';
  const { error, user, session } = await window.supabase.auth.signInWithPassword({ email, password });
  if (error) {
    messageDiv.textContent = 'Login failed: ' + error.message;
    messageDiv.style.color = 'red';
  } else {
    messageDiv.textContent = 'Logged in!';
    messageDiv.style.color = 'green';
    authModal.style.display = 'none';
    // Optionally redirect or update UI
  }
});

// Signup handler
signupBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  messageDiv.textContent = '';
  const { error, user } = await window.supabase.auth.signUp({ email, password });
  if (error) {
    messageDiv.textContent = 'Signup failed: ' + error.message;
    messageDiv.style.color = 'red';
  } else {
    messageDiv.textContent = 'Signup successful! Check your email to confirm.';
    messageDiv.style.color = 'green';
    // Optionally close modal
  }
});
