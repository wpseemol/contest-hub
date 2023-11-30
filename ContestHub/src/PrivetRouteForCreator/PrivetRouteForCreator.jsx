import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingPage from '../pages/LoadingPage/LoadingPage';
import useAuthProvider from '../hook/useAuthProvider/useAuthProvider';
import useUserRole from '../hook/useUserRole/useUserRole';
const PrivetRouteForCreator = ({ children }) => {
    const { user, loading } = useAuthProvider();
    const { data, isLoading } = useUserRole();

    const location = useLocation();

    if (loading && isLoading) {
        return <LoadingPage />;
    }
    if (user && data.role === 'contest-creator') {
        return children;
    }

    return <Navigate state={{ from: location.pathname }} to="/login" />;
};

export default PrivetRouteForCreator;

PrivetRouteForCreator.propTypes = {
    children: PropTypes.node,
};
