import { authGuard } from "../../utilities/authGuard";
import { getUserInfo } from "../../utilities/userInfo";
import { readPost } from "../../api/post/read";

authGuard();

/**
 * Retrieves the user information from local storage.
 * @type {Object}
 */
const userInfo = getUserInfo();

/**
 * Parses the URL parameters to get the post ID.
 * @type {URLSearchParams}
 */
const postIdUrl = new URLSearchParams(window.location.search);

/**
 * The ID of the post to be edited.
 * @type {string}
 */
const postId = postIdUrl.get("id");

/**
 * Displays the post edit form for a given post ID by fetching the post data.
 * @async
 * @function displayPostEditForm
 * @param {string} postId - The ID of the post to be edited.
 * @returns {Promise<void>} - A promise that resolves when the post edit form is displayed.
 */
async function displayPostEditForm(postId) {
  const post = await readPost(postId);

  if (post) {
	/**
	 * The form element for editing the post.
	 * @type {HTMLFormElement}
	 */
	const form = document.forms.editPost;

	form.title.value = post.title;
	form.content.value = post.content;
  } else {
	document.querySelector(".post-title").innerText = "Post not found";
  }
}

displayPostEditForm(postId);
