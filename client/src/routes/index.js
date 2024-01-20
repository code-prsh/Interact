import { Suspense, lazy } from "react";
import {  useRoutes } from "react-router-dom";

// layouts

// config
//import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import MainLayout from "../layouts/main";

//Higher order component
const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/auth",
      
      element: <MainLayout />,
      children: [
        
        { element: <RegisterPage />, path: "register" },
        { element: <ResetPasswordPage />, path: "reset-password" },
        { element: <NewPasswordPage />, path: "new-password" },
        {element: <VerifyPage />, path: "verify"}
      ],
    },
    {element: <LoginPage />, path: "auth/login" },
    {element:<ProfilePage/>,path:"/profile"}
]);
}

const LoginPage = Loadable(lazy(() => import("../pages/auth/Login")));
const ProfilePage = Loadable(lazy(() => import("../pages/User/Profile")));
const RegisterPage = Loadable(lazy(() => import("../pages/auth/Register")));
const ResetPasswordPage = Loadable(
  lazy(() => import("../pages/auth/ResetPassword"))
);
const NewPasswordPage = Loadable(
  lazy(() => import("../pages/auth/NewPassword"))
);

const VerifyPage = Loadable(
  lazy(() => import("../pages/auth/Verify"))
);
