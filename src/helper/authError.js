export const getAuthErrorMessage = (error) => {
  const errorMap = {
    // Login & Signup common errors
    "Invalid login credentials": "Invalid email or password. Please try again.",
    "Email not confirmed":
      "Please verify your email before logging in. Check your inbox!",
    "User is blocked": "Your account has been blocked. Please contact support.",
    "Failed to fetch":
      "Unable to connect to server. Check your internet connection.",
    "rate limit":
      "Too many attempts. Please wait a moment before trying again.",
    NetworkError: "Connection issue. Please check your internet and try again.",
    timeout: "Request timed out. Please check your connection.",

    // Signup specific errors
    "User already registered":
      "An account with this email already exists. Sign in instead.",
    "Password should be at least 6 characters":
      "Password must be at least 6 characters long.",
    "Invalid email": "Please enter a valid email address.",
    "Signups not allowed":
      "Signups are currently disabled. Please try again later.",

    // Generic fallback
    "Database error": "Server issue. Please try again in a few moments.",
  };

  // Check for specific error messages
  for (const [key, message] of Object.entries(errorMap)) {
    if (error.message?.toLowerCase().includes(key.toLowerCase())) {
      return message;
    }
  }

  // Return original message or generic fallback
  return error.message || "Something went wrong. Please try again.";
};
