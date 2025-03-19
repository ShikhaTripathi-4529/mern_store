import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { login } from "./features/userSlice"; // Redux action
import { auth,signInWithEmailAndPassword } from "./firebase";
import "./Login.css";

function Login() {
  const dispatch = useDispatch(); // ✅ Initialize Redux dispatch once
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const loginToApp = async (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password); // Firebase login
      const user = userCredential.user;
      console.log("User logged in:", user);

      // Dispatch login action to update Redux state
      dispatch(
        login({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL || profilePic || "", // Use profile pic if available
        })
      );

      console.log("User logged in successfully:", user);
    } catch (error) {
      console.error("Error during login:", error.message);
      alert("Login failed: " + error.message); // Alert user if login fails
    }
  };

  const register = async (e) => {
    e.preventDefault(); // ✅ Prevent page refresh on register

    if (!name) {
      alert("Please enter your full name");
      return;
    }
    try { 
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("\n\n 282828282828",userCredential)

      await updateProfile(user, {
        displayName: name,
        photoURL: profilePic || "", // Set default empty string if not provided
      });

      dispatch(
        login({
          uid: user.uid,
          email: user.email,
          displayName: name,
          photoURL: profilePic || "",
        })
      );

      console.log("User registered successfully:", user);
    } catch (error) {
      console.error("Error during registration:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="login">
      <img src="https://logospng.org/wp-content/uploads/linkedin.png" alt="LinkedIn Logo" />

      <form>
        <input
          value={name}
          placeholder="Full Name (required for registration)"
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <input
          value={profilePic}
          placeholder="Profile Picture URL (optional)"
          onChange={(e) => setProfilePic(e.target.value)}
          type="text"
        />
        <input
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <input
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login_register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
}

export default Login;
