import { authGuard } from "../../utilities/authGuard";
import { getUserInfo } from "../../utilities/userInfo";
import { readPost } from "../../api/post/read";
import createPostCard from "../../utilities/post-card";

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
 * The ID of the post to be displayed.
 * @type {string}
 */
const postId = postIdUrl.get("id");

/**
 * Displays a single post for a given post ID by fetching the post data.
 * @async
 * @function displayPost
 * @param {string} postId - The ID of the post to be displayed.
 * @returns {Promise<void>} - A promise that resolves when the post is displayed.
 */
async function displayPost(postId) {
  const post = await readPost(postId);

  if (post) {
	/**
	 * The container element for the post.
	 * @type {HTMLElement}
	 */
	const postContainer = document.querySelector(".post");

	/**
	 * The post card element created from the post data.
	 * @type {HTMLElement}
	 */
	const postCard = createPostCard(post, userInfo.email === post.author.email);

	postContainer.append(postCard);
  } else {
	document.querySelector(".post-title").innerText = "Post not found";
  }
}

displayPost(postId);
