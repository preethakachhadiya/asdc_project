import SignIn from "pages/Auth/SignIn";
import Dashboard from "pages/Dashboard";
import SignUp from "pages/Auth/SignUp";

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
    layout: "auth",
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    layout: "auth",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "private",
  },
];

export default routes;
