import { API_AUTH_LOGIN, API_KEY } from "./constants";
import { headers } from "./headers";

/**
 * Logs in a user.
 * 
 * @async
 * @function login
 * @param {Object} credentials - The user credentials.
 * @param {string} credentials.email - The email of the user.
 * @param {string} credentials.password - The password of the user.
 * @returns {Promise<Object>} - A promise that resolves to the response data.
 * @throws {Error} - Throws an error if the login fails.
 */
export async function login({ email, password }) {
  try {
    const reqBody = {
      email: email,
      password: password,
    };

    const response = await fetch(API_AUTH_LOGIN, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(reqBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    const data = await response.json();
    localStorage.setItem("token", data.token); // Store the JWT token in localStorage
    return data;
  } catch (error) {
    console.error(error.message);
    throw error; // Re-throw the error after logging it
  }
}