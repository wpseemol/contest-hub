import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingPage from '../pages/LoadingPage/LoadingPage';
import useAuthProvider from '../hook/useAuthProvider/useAuthProvider';

const PrivetRouteForCreator = ({ children }) => {
    const { user, loading, userRole } = useAuthProvider();

    const location = useLocation();

    if (loading) {
        return <LoadingPage />;
    }
    if (user && userRole === 'contest-creator') {
        return children;
    }

    return <Navigate state={{ from: location.pathname }} to="/login" />;
};

export default PrivetRouteForCreator;

PrivetRouteForCreator.propTypes = {
    children: PropTypes.node,
};
