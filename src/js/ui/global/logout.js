/**
 * Sets the logout button click listener.
 * @function setLogoutListener
 */
export function setLogoutListener() {
  document.getElementById('logoutButton').addEventListener('click', onLogout);
}

/**
 * Handles the logout action.
 * Removes the token from local storage and redirects to the login page.
 * @function onLogout
 */
export function onLogout() {
  localStorage.removeItem("token");
  window.location.href = '/auth/login/';
}
