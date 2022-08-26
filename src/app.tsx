import * as React from "react";
import * as ReactDom from "react-dom/client";
import { ToastContainer } from "react-toastify";
import Main from "./components/screens/Main";
import { AppContextProvider } from "./context/AppContext";
import "react-toastify/dist/ReactToastify.css";

export default function render() {
  const root = ReactDom.createRoot(document.getElementById("root"));

  root.render(
    <div className="w-full h-full">
      <AppContextProvider>
        <Main />
        <ToastContainer />
      </AppContextProvider>
    </div>
  );
}

render();
