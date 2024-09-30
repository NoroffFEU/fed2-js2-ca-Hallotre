/**
 * Utility function to guard routes that require authentication.
 * Redirects to the login page if the user is not authenticated.
 * 
 * @module authGuard
 */

/**
 * Checks if the user is authenticated. If not, redirects to the login page.
 * @function authGuard
 */
export function authGuard() {
  if (!localStorage.token) {
    alert("You must be logged in to view this page");
    window.location.href = "/auth/login/";
  }
}
