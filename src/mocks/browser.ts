/**
 This file is used by `msw` to load the ServiceWorker that intercepts requests
 in the browser during development.
 Details:
 - https://mswjs.io/docs/getting-started/integrate/browser
*/
import { setupWorker } from "msw";
import { routeHandlers } from "./handler";

export const worker = setupWorker(...routeHandlers);
