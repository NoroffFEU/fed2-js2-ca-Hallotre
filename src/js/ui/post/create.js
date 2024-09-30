import { createPost } from "../../api/post/create";

/**
 * Handles the create post form submission.
 * @async
 * @function onCreatePost
 * @param {Event} event - The form submission event.
 * @returns {Promise<void>} - A promise that resolves when the post is created.
 */
export async function onCreatePost(event) {
  event.preventDefault();

  /**
   * @type {HTMLFormElement}
   */
  const form = event.target;

  /**
   * @type {string}
   */
  const title = form.elements["title"].value;

  /**
   * @type {string}
   */
  const content = form.elements["content"].value;

  try {
    const newPost = await createPost({ title, content });
    alert("Post created successfully!");
    window.location.href = `/post?id=${newPost.id}`;
  } catch (error) {
    console.error("Failed to create post:", error);
    alert("Failed to create post. Please try again.");
  }
}

