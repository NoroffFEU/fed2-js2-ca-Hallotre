import { deletePost } from "../../api/post/delete";

/**
 * Handles the delete post action.
 * @async
 * @function onDeletePost
 * @param {Event} event - The delete button click event.
 * @returns {Promise<void>} - A promise that resolves when the post is deleted.
 */
export async function onDeletePost(event) {
  event.preventDefault();

  /**
   * @type {string}
   */
  const postId = event.target.dataset.postId;

  if (confirm("Are you sure you want to delete this post?")) {
	try {
	  await deletePost(postId);
	  alert("Post deleted successfully!");
	  window.location.href = "/home";
	} catch (error) {
	  console.error("Failed to delete post:", error);
	  alert("Failed to delete post. Please try again.");
	}
  }
}
