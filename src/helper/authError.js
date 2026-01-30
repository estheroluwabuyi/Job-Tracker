export function getLoginErrorMessage(error) {
  const errorStr = error?.message?.toLowerCase() || "";

  const errorMap = {
    // Invalid credentials
    "invalid login credentials": {
      message: "The email or password you entered is incorrect.",
      suggestion: "Please check your details and try again.",
      showResetLink: true,
    },
    // Email not confirmed
    "email not confirmed": {
      message: "Please confirm your email address first.",
      suggestion: "Check your inbox for the confirmation link.",
      showResendButton: true,
    },
    // Network issues
    network: {
      message: "Connection issue detected.",
      suggestion: "Please check your internet connection.",
      showRetry: true,
    },
    // Rate limiting
    "rate limit": {
      message: "Too many attempts.",
      suggestion: "Please wait a moment before trying again.",
      emoji: "⏳",
      showTimer: true,
    },
    // User doesn't exist
    "user not found": {
      message: "No account found with this email.",
      suggestion: "Would you like to create an account instead?",
      showSignupLink: true,
    },
  };

  // Find matching error
  for (const [key, value] of Object.entries(errorMap)) {
    if (errorStr.includes(key)) {
      return `${value.message} ${value.suggestion}`;
    }
  }

  return "We couldn't sign you in right now. Please try again in a moment.";
}
