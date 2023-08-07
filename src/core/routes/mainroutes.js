import  Main  from "../../components/main/main";
import Signin from "../../components/signin/signin";
import SignUp from "../../components/signup/signup";

const MainRoutes = {
  path: "/",
  element: <Main />,
  children: [
    {
      path: "/",
      element: <Signin />,
    },
    {
      path: "login",
      element: <Signin />,
    },
    {
      path: "register",
      element: <SignUp />,
    },
 
  ],
};
export default MainRoutes