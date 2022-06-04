import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const queryClient = new QueryClient({
  /**
   * @description
   * This is the global config for react query. These settings
   * can be overwritten on a per query basis inside our hooks.
   */
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 0,
      staleTime: 300000, // 5 minutes in milliseconds
      cacheTime: 300000, // 5 minutes in milliseconds
      refetchInterval: 3600000, // 1 hour in milliseconds
    },
  },
});

const main = async () => {
  if (process.env.NODE_ENV === "development") {
    const { worker } = require("./mocks/browser");
    await worker.start({
      serviceWorker: {
        url: "/mockServiceWorker.js",
      },
    });
  }

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  );
};

main();
