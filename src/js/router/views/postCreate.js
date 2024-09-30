import { authGuard } from "../../utilities/authGuard";
import { onCreatePost } from "../../ui/post/create";

authGuard();

/**
 * The form element for creating a new post.
 * @type {HTMLFormElement}
 */
const form = document.forms.createPost;

/**
 * Adds an event listener to handle form submission for creating a new post.
 * @function
 */
form.addEventListener("submit", onCreatePost);
