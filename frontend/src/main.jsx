import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalProvider } from "./components/ui/modal.jsx";
import { store } from "./redux/store.js";
import { router } from "./routes/index.jsx";
import "./styles/globals.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </Provider>
    <ToastContainer
      position="bottom-center"
      autoClose={3000}
    />
  </StrictMode>
);
