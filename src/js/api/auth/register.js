import { headers } from './headers';
import { API_AUTH_REGISTER } from './constants';

/**
 * Registers a new user.
 * 
 * @async
 * @function register
 * @param {Object} userData - The user data.
 * @param {string} userData.name - The name of the user.
 * @param {string} userData.email - The email of the user.
 * @param {string} userData.password - The password of the user.
 * @returns {Promise<Object>} - A promise that resolves to the response data.
 * @throws {Error} - Throws an error if the registration fails.
 */
export async function register({ name, email, password }) {
  try {
    const reqBody = {
      name,
      email,
      password,
    };

    const response = await fetch(API_AUTH_REGISTER, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(reqBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw error; // Re-throw the error after logging it
  }
}
