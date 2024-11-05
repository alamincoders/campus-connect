import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="boxShadow min-h-screen px-10 w-full lg:min-h-screen py-16 flex flex-col justify-center rounded-xl"
      style={{
        background: "url('/404.webp')",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-[2rem] sm:text-[3rem] font-[600] text-white w-full lg:w-[50%]">
        Go Home , You’re Drunk!
      </h1>

      <Link
        to="/"
        className="py-3 px-8 w-max bg-primary_main-500 hover:bg-primary_main-700 text-white mt-5"
      >
        BACK TO HOME
      </Link>
    </div>
  );
};

export default ErrorPage;
