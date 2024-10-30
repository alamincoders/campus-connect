import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { ArrowLeft } from "lucide-react";
import { FaSpinner } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { loading, error, register, forgotPassword } = useAuth();

  return (
    <div className="flex font-poppins items-center justify-center min-w-screen min-h-screen relative">
      <Button
        onClick={() => navigate(-1)}
        className="absolute top-10 left-10"
      >
        <ArrowLeft /> Go Back
      </Button>

      <div className="grid gap-8">
        <div className="bg-gradient-to-r from-primary_main to-secondary_main rounded-2xl m-4">
          <div className="border-8 border-transparent rounded-2xl dark:bg-gray-900 bg-white shadow-lg p-10 m-2">
            <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center cursor-default">
              Forgot Password
            </h1>

            <form
              action="#"
              onSubmit={forgotPassword}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 dark:text-gray-400 text-lg"
                >
                  Email
                </label>
                <Input
                  id="email"
                  className="focus:scale-105 duration-300 ease-in-out transition-transform"
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: "Email is required" })}
                />
                {error?.email && (
                  <p className="text-red-500 text-sm">{error.email.message}</p>
                )}
              </div>

              <button
                className="bg-primary_main hover:bg-secondary_main shadow-lg mt-6 p-2 text-white rounded w-full transform hover:scale-105 hover:from-secondary_main hover:to-primary_main transition duration-300 ease-in-out"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <div className="inline-flex items-center justify-center gap-2">
                    <FaSpinner className="animate-spin" /> Loading...
                  </div>
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </form>

            <div className="flex flex-col mt-4 items-center justify-center text-sm">
              <h3>
                <span className="cursor-default dark:text-gray-300">
                  Are you new here ?
                </span>
                <Link
                  to="/register"
                  className="group text-blue-400 transition-all duration-100 ease-in-out"
                >
                  <span className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Sign up
                  </span>
                </Link>
              </h3>
            </div>

            <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
              <p className="cursor-default">
                By signing in, you agree to our{" "}
                <Link
                  to="/terms"
                  className="group text-blue-400 transition-all duration-100 ease-in-out"
                >
                  <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Terms
                  </span>
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="group text-blue-400 transition-all duration-100 ease-in-out"
                >
                  <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Privacy Policy
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
