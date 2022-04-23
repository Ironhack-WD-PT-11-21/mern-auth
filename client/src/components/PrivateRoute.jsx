import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = (props) => {
    if (!props.isAllowed) {
        return <Navigate to="/" replace />;
    }
    return <Outlet />
}