import PropTypes from 'prop-types';

import { Navigate, useLocation } from 'react-router-dom';
import LoadingPage from '../pages/LoadingPage/LoadingPage';
import useAuthProvider from '../hook/useAuthProvider/useAuthProvider';
import useUserRole from '../hook/useUserRole/useUserRole';
const PrivetRouteForAdmin = ({ children }) => {
    const { user, loading } = useAuthProvider();
    const { data, isLoading } = useUserRole();

    const location = useLocation();

    if (loading && isLoading) {
        return <LoadingPage />;
    }
    if (user && data.role === 'admin') {
        return children;
    }

    return <Navigate state={{ from: location.pathname }} to="/login" />;
};

export default PrivetRouteForAdmin;

PrivetRouteForAdmin.propTypes = {
    children: PropTypes.node,
};
