
/**
 * Check if the user is authenticated
 * In a real application, this would validate the token with the server
 */
export const isAuthenticated = (): boolean => {
  return localStorage.getItem("isAuthenticated") === "true";
};

/**
 * Get the current user
 * In a real application, this would decode the JWT or fetch from the server
 */
export const getCurrentUser = () => {
  const userString = localStorage.getItem("user");
  if (!userString) return null;
  
  try {
    return JSON.parse(userString);
  } catch (error) {
    console.error("Error parsing user data:", error);
    return null;
  }
};

/**
 * Log the user out
 * In a real application, this would invalidate the token on the server
 */
export const logout = () => {
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("user");
};
