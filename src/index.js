import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CopilotKit } from "@copilotkit/react-core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CopilotKit publicApiKey="ck_pub_7c7eae771e178eaa97018f5f478208fc">
      <App />
    </CopilotKit>
  </React.StrictMode>
);
