import { useRoutes } from "react-router-dom";

// project import
import MainRoutes from "./mainroutes";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes]);
}
