import { login } from '../api/login.js';

/**
 * Handles the login form submission.
 * @async
 * @function onLogin
 * @param {Event} event - The form submission event.
 * @returns {Promise<void>} - A promise that resolves when the login is complete.
 */
export async function onLogin(event) {
  event.preventDefault();

  /**
   * @type {HTMLFormElement}
   */
  const form = event.target;

  /**
   * @type {FormData}
   */
  const formData = new FormData(form);

  /**
   * @type {Object}
   * @property {string} email - The email of the user.
   * @property {string} password - The password of the user.
   */
  const credentials = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  try {
    const result = await login(credentials);
    document.getElementById('message').innerText = 'Login successful!';
    window.location.href = '/';
  } catch (error) {
    document.getElementById('message').innerText = `Login failed: ${error.message}`;
  }
}

/**
 * Adds an event listener to the login form to handle form submission.
 * @function
 */
document.getElementById('loginForm').addEventListener('submit', onLogin);
