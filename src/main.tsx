import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, ScrollRestoration } from "react-router-dom";
import { App } from "./app/App";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollRestoration />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

But wait, ScrollRestoration is a component that should be placed inside the router, usually after routes. It restores scroll position on navigation. That's fine.

Alternatively, maybe the agency landing page needs to use HashRouter for deployment? Not specified.

Another common pattern: Wrap the entire app with a ThemeProvider or something, but no.

I think adding ScrollRestoration is a safe and useful update. Then we output the file content directly.

The output must not have markdown or code fences. So just the raw file text.

Thus, final answer is the updated file content.
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, ScrollRestoration } from "react-router-dom";
import { App } from "./app/App";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollRestoration />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
