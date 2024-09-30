import { authGuard } from "../../utilities/authGuard";

authGuard();

/**
 * Displays an alert indicating that the page cannot be found.
 * @function
 */
alert("Page cannot be found in /src/views");
