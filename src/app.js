import "./css/style.css";

import router from "./js/router";

/**
 * Entry point of the application.
 * Imports the necessary CSS and initializes the router.
 * 
 * @module app
 */

/**
 * Initializes the router with the current pathname.
 * @async
 * @function initializeRouter
 * @returns {Promise<void>} - A promise that resolves when the router is initialized.
 */
async function initializeRouter() {
  await router(window.location.pathname);
}

initializeRouter();
