// // ✅ Import Auth from Firebase Config
// import { auth } from "./firebase-config.js";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signInAnonymously,
//   signOut,
//   onAuthStateChanged,
// } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// // ✅ Handle Registration
// async function handleRegister() {
//   const email = document.getElementById("register-email").value;
//   const password = document.getElementById("register-password").value;

//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     alert("✅ Registration successful!");
//     localStorage.setItem("user", JSON.stringify(userCredential.user));
//     window.location.href = "index.html";
//   } catch (error) {
//     alert("❌ Error: " + error.message);
//   }
// }

// // ✅ Handle Login
// async function handleLogin() {
//   const email = document.getElementById("login-email").value;
//   const password = document.getElementById("login-password").value;

//   try {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     alert("✅ Login successful!");
//     localStorage.setItem("user", JSON.stringify(userCredential.user));
//     window.location.href = "index.html";
//   } catch (error) {
//     alert("❌ Error: " + error.message);
//   }
// }

// // ✅ Handle Google Login
// async function handleGoogleLogin() {
//   const provider = new GoogleAuthProvider();
//   try {
//     const result = await signInWithPopup(auth, provider);
//     alert("✅ Google login successful!");
//     localStorage.setItem("user", JSON.stringify(result.user));
//     window.location.href = "index.html";
//   } catch (error) {
//     alert("❌ Error: " + error.message);
//   }
// }

// // ✅ Guest Login
// async function handleGuestLogin() {
//   try {
//     const guestUser = await signInAnonymously(auth);
//     alert("✅ Guest login successful!");
//     localStorage.setItem("user", JSON.stringify(guestUser.user));
//     window.location.href = "index.html";
//   } catch (error) {
//     alert("❌ Error: " + error.message);
//   }
// }

// // ✅ Handle Logout
// async function handleLogout() {
//   await signOut(auth);
//   localStorage.removeItem("user");
//   alert("✅ You have logged out!");
//   window.location.href = "auth.html";
// }

// // ✅ Check Auth State
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     localStorage.setItem("user", JSON.stringify(user));
//   } else {
//     localStorage.removeItem("user");
//   }
// });

// // ✅ Show Register Form
// function showRegister() {
//   document.getElementById("login-form").style.display = "none";
//   document.getElementById("register-form").style.display = "block";
// }

// // ✅ Show Login Form
// function showLogin() {
//   document.getElementById("login-form").style.display = "block";
//   document.getElementById("register-form").style.display = "none";
// }
