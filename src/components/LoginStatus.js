import React, { useState } from "react";

// Component for posting an ad
const AdPosting = ({ isLoggedIn }) => {
  const [adContent, setAdContent] = useState("");

  // Function to handle ad submission
  const handleAdSubmit = () => {
    if (isLoggedIn) {
      // Perform actual ad posting logic here
      console.log("Ad posted:", adContent);
    } else {
      alert("Please log in to post an ad.");
    }
  };

  return (
    <div>
      <h2>Ad Posting</h2>
      <textarea
        value={adContent}
        onChange={(e) => setAdContent(e.target.value)}
        placeholder="Enter your ad content"
      />
      <br />
      <button onClick={handleAdSubmit}>Submit Ad</button>
    </div>
  );
};

// Component for checking user login status
const LoginStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, User!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please log in</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      <hr />
      <AdPosting isLoggedIn={isLoggedIn} />
    </div>
  );
};
export default LoginStatus;