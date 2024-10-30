import MainLayout from "@/layouts/MainLayout";
import Admission from "@/pages/Admission";
import CollegeDetails from "@/pages/CollegeDetails";
import Colleges from "@/pages/Colleges";
import ErrorPage from "@/pages/ErrorPage";
import ForgotPassword from "@/pages/ForgotPassword";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import MyCollege from "@/pages/MyCollege";
import ProfilePage from "@/pages/ProfilePage";
import RegisterPage from "@/pages/RegisterPage";
import { createBrowserRouter } from "react-router-dom";

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
        path: "/my-college",
        element: <MyCollege />,
      },

      {
        path: "/profile",
        element: <ProfilePage />,
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
