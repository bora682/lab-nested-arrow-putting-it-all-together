function createLoginTracker(userInfo) {
  // Track number of login attempts
  let attemptCount = 0;

  // Inner arrow function that handles each login attempt
  const loginAttempt = (passwordAttempt) => {


    // Lock account if more than 3 attempts
    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    // Attempt count
    attemptCount++;

    // Check if the password matches
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      return `Attempt ${attemptCount}: Login failed`;
    }
  };

  return loginAttempt;
}

const tracker = createLoginTracker({ username: "user1", password: "password123" });

console.log(tracker("wrong"));       // Attempt 1: Login failed
console.log(tracker("oops"));        // Attempt 2: Login failed
console.log(tracker("nope"));        // Attempt 3: Login failed 
console.log(tracker("password123")); // Account locked due to too many failed attempts


// Export function if defined for testing 
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};