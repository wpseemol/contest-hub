import PropTypes from 'prop-types';

import { Navigate, useLocation } from 'react-router-dom';
import LoadingPage from '../pages/LoadingPage/LoadingPage';
import useAuthProvider from '../hook/useAuthProvider/useAuthProvider';

const PrivetRouteForAdmin = ({ children }) => {
    const { user, loading, userRole } = useAuthProvider();

    const location = useLocation();

    if (loading) {
        return <LoadingPage />;
    }
    if (user && userRole === 'admin') {
        return children;
    }

    return (
        <Navigate
            state={{
                from: location.pathname,
            }}
            to="/login"
        />
    );
};

export default PrivetRouteForAdmin;

PrivetRouteForAdmin.propTypes = {
    children: PropTypes.node,
};
