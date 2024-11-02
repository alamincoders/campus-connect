import MainLayout from "@/layouts/MainLayout";
import ProfileLayout from "@/layouts/ProfileLayout";
import Admission from "@/pages/Admission";
import AdmissionFormPage from "@/pages/AdmissionFormPage";
import CollegeDetails from "@/pages/CollegeDetails";
import Colleges from "@/pages/Colleges";
import ErrorPage from "@/pages/ErrorPage";
import ForgotPassword from "@/pages/ForgotPassword";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import MyCollege from "@/pages/MyCollege";
import ProfilePage from "@/pages/ProfilePage";
import RegisterPage from "@/pages/RegisterPage";
import ReviewPage from "@/pages/ReviewPage";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./private.route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },

      {
        path: "/colleges",
        element: <Colleges />,
      },
      {
        path: "/colleges/:collegeId",
        element: <CollegeDetails />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/admission-form/:collegeId",
        element: <PrivateRoute element={AdmissionFormPage} />,
      },
      {
        path: "/my-college",
        element: <PrivateRoute element={MyCollege} />,
      },
    ],
  },
  {
    path: "/profile",
    element: <PrivateRoute element={ProfileLayout} />,
    children: [
      {
        index: true,
        element: <ProfilePage />,
      },
      {
        path: "add-review",
        element: <ReviewPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);
