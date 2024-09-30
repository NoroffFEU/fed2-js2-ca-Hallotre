import { register } from '../api/register.js';

/**
 * Handles the registration form submission.
 * @async
 * @function onRegister
 * @param {Event} event - The form submission event.
 * @returns {Promise<void>} - A promise that resolves when the registration is complete.
 */
export async function onRegister(event) {
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
   * @property {string} name - The name of the user.
   * @property {string} email - The email of the user.
   * @property {string} password - The password of the user.
   */
  const userData = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  };

  try {
    const result = await register(userData);
    document.getElementById('message').innerText = 'Registration successful!';
    window.location.href = '/auth/login/';
  } catch (error) {
    document.getElementById('message').innerText = `Registration failed: ${error.message}`;
  }
}