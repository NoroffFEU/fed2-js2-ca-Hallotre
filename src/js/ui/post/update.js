import { updatePost } from "../../api/post/update";

/**
 * Handles the update post form submission.
 * @async
 * @function onUpdatePost
 * @param {Event} event - The form submission event.
 * @returns {Promise<void>} - A promise that resolves when the post is updated.
 */
export async function onUpdatePost(event) {
  event.preventDefault();

  /**
   * @type {HTMLFormElement}
   */
  const form = event.target;

  /**
   * @type {string}
   */
  const postId = form.elements["post-id"].value;

  /**
   * @type {string}
   */
  const title = form.elements["title"].value;

  /**
   * @type {string}
   */
  const content = form.elements["content"].value;

  try {
  await updatePost(postId, { title, content });
  alert("Post updated successfully!");
  window.location.href = `/post?id=${postId}`;
  } catch (error) {
  console.error("Failed to update post:", error);
  alert("Failed to update post. Please try again.");
  }
}
