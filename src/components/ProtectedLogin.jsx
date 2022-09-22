import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedLogin({ redirectPath = "/admin" }) {
  const admin = useSelector((state) => state.login.token);

  if (admin) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

export default ProtectedLogin;
