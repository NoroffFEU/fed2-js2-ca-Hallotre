import { authGuard } from "../../utilities/authGuard";
import { onLogin } from "../../ui/auth/login";

authGuard();

/**
 * The login form element.
 * @type {HTMLFormElement}
 */
const form = document.forms.login;

/**
 * Adds an event listener to handle form submission for login.
 * @function
 */
form.addEventListener("submit", onLogin);
