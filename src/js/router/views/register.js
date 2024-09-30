import { onRegister } from "../../ui/auth/register";

/**
 * The registration form element.
 * @type {HTMLFormElement}
 */
const form = document.forms.register;

/**
 * Adds an event listener to handle form submission for registration.
 * @function
 */
form.addEventListener("submit", onRegister);

/**
 * Adds an event listener to handle click events on the registration form.
 * @function
 */
form.addEventListener("click", handleClick);
