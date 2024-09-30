import { authGuard } from "../../utilities/authGuard";
import { getUserInfo } from "../../utilities/userInfo";
import { readPosts } from "../../api/post/read";
import createPostCards from "../../utilities/post-card";

authGuard();

/**
 * Retrieves the user information from local storage.
 * @type {Object}
 */
const userInfo = getUserInfo();

/**
 * Displays the home page with a list of posts.
 * @async
 * @function displayHomePage
 * @returns {Promise<void>} - A promise that resolves when the home page is displayed.
 */
async function displayHomePage() {
  const posts = await readPosts();

  if (posts.length > 0) {
    /**
     * The articles element created from the posts data.
     * @type {HTMLElement}
     */
    const articles = createPostCards(posts, true);
    document.querySelector(".posts").append(articles);
  } else {
    document.querySelector(".posts").innerText = "No posts available";
  }
}

displayHomePage();
