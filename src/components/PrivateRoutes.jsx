import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ redirectPath = "/" }) {
  const admin = useSelector((state) => state.login.token.token);

  if (!admin) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
