import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { BuyCarContextProvider } from "./context/BuyCarContext";
import { SearchContextProvider } from "./context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <BuyCarContextProvider>
          <App />
        </BuyCarContextProvider>
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);