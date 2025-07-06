/**
 * Fetches GitHub user data for a given username from the GitHub REST API.
 * 
 * @async
 * @function fetchGitHubUser
 * @param {string} username - The GitHub username to fetch data for.
 * @returns {Promise<Object>} A promise that resolves to the user data object returned by the GitHub API.
 * @throws {Error} Throws an error if the user is not found or if there is a network error.
 * 
 * @example
 * try {
 *   const user = await fetchGitHubUser('octocat');
 *   console.log(user);
 * } catch (error) {
 *   console.error('Failed to fetch user:', error);
 * }
 */
export async function fetchGitHubUser(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error(`User not found: ${username}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

