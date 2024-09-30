/**
 * Handles the logout action.
 * Removes the token from local storage and redirects to the login page.
 * @function onLogout
 */
export function onLogout() {
  localStorage.removeItem("token");
  // Optionally, redirect to the login page or home page
  window.location.href = '/auth/login/';
}

/**
 * Sets the logout button click listener.
 * @function setLogoutListener
 */
document.getElementById('logoutButton').addEventListener('click', onLogout);
