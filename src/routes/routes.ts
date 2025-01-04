import {
  UserProtectWrapper,
  CaptainProtectWrapper,
  UserLogout,
  CaptainLogout,
} from "../components/molecules";
import { RouteConfig } from "../interfaces";
import {
  StartPage,
  UserSignup,
  UserLogin,
  CaptainSignup,
  CaptainLogin,
  UserHomePage,
  RidingUser,
  CaptainHomePage,
  RidingCaptain,
} from "../pages";

// Centralized Route Configuration
const routes: RouteConfig[] = [
  { path: "/", component: StartPage },
  { path: "/user/signup", component: UserSignup },
  { path: "/user/login", component: UserLogin },
  { path: "/captain/signup", component: CaptainSignup },
  { path: "/captain/login", component: CaptainLogin },
  {
    path: "/user/home",
    component: UserHomePage,
    wrapper: UserProtectWrapper,
  },
  {
    path: "/user/riding",
    component: RidingUser,
    wrapper: UserProtectWrapper,
  },
  {
    path: "/captain/home",
    component: CaptainHomePage,
    wrapper: CaptainProtectWrapper,
  },
  {
    path: "/captain/riding",
    component: RidingCaptain,
    wrapper: CaptainProtectWrapper,
  },
  {
    path: "/user/logout",
    component: UserLogout,
    wrapper: UserProtectWrapper,
  },
  {
    path: "/captain/logout",
    component: CaptainLogout,
    wrapper: CaptainProtectWrapper,
  },
];

// console.log("Total Routes:", routes.length);

export default routes;
