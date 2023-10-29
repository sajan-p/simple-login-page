import { useContext } from "react";
import { UserContext } from "../context/user";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const [state] = useContext(UserContext);

  return state.data ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
