import App from "../src/components/App";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "normalize.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { setAuthHeader } from "./services/api";
import { refreshThunk } from "./redux/auth/operations";

function onBeforeLift() {
  const token = store.getState().auth.token;
  if (token) setAuthHeader(token);
  store.dispatch(refreshThunk());
}

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
        onBeforeLift={onBeforeLift}
      >
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
  // </StrictMode>
);
