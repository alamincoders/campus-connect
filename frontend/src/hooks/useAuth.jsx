import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, facebookProvider, googleProvider } from "../services/firebase";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"; // Set default to "/"
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser({
          id: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName,
          avatar: currentUser.photoURL,
          token: currentUser.accessToken,
        });
        Cookies.set(
          "user",
          JSON.stringify({
            id: currentUser.uid,
            email: currentUser.email,
            displayName: currentUser.displayName,
            avatar: currentUser.photoURL,
            token: currentUser.accessToken,
          })
        );
      } else {
        setUser(null);
        Cookies.remove("user");
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signUp = async (data) => {
    const { email, password, name } = data; // Destructure name
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: name, // Set displayName with name field
      });

      // Send verification email
      await sendEmailVerification(userCredential.user);

      toast.success(
        "Registration successful! Please check your email to verify your account."
      );
      setUser({
        ...userCredential.user,
        displayName: name,
      });
      Cookies.set(
        "user",
        JSON.stringify({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          displayName: name,
          photoURL: userCredential.user.photoURL,
          token: userCredential.user.accessToken,
        })
      );
      navigate(from, { replace: true }); // Redirect after sign up
      reset();
    } catch (error) {
      setError("email", { type: "manual", message: error.message });
    } finally {
      setLoading(false);
    }
  };

  const login = async (data) => {
    const { email, password } = data;
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Check if the user's email is verified
      if (!userCredential.user.emailVerified) {
        toast.error("Please verify your email before logging in.");
        await signOut(auth);
        return;
      }

      setUser(userCredential.user);
      toast.success("Login successful!");
      navigate(from, { replace: true });
      reset();
    } catch (error) {
      setError("email", { type: "manual", message: error.message });
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Google Login Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const loginWithFacebook = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, facebookProvider);
      setUser(result.user);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Facebook Login Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      Cookies.remove("user");
      toast.success("Logout successful!");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  // Function to send password reset email
  const forgotPassword = async (data) => {
    const { email } = data;
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!");
      reset();
      navigate("/login");
    } catch (error) {
      setError("email", { type: "manual", message: error.message });
    }
  };

  return {
    user,
    loading,
    register,
    handleSubmit,
    errors,
    signUp: handleSubmit(signUp),
    login: handleSubmit(login),
    logout,
    loginWithGoogle,
    loginWithFacebook,
    forgotPassword: handleSubmit(forgotPassword),
  };
}
