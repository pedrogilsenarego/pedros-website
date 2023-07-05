/* eslint-disable @typescript-eslint/no-explicit-any */
import { ROUTE_PATHS } from "../constants/routes";
import { lazyWithRetryAndLoader } from "../utils/lazyWithRetry";
import { AppRoute } from "./types";

const LandingPage = lazyWithRetryAndLoader(
  () => import("../pages/LandingPage")
);
const Home = lazyWithRetryAndLoader(() => import("../pages/Home"));

export const routes: AppRoute[] = [
  {
    path: ROUTE_PATHS.LANDING_PAGE,
    component: <Home />,
  },
  {
    path: ROUTE_PATHS.HOME,
    component: <Home />,
  },
];
