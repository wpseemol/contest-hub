import PropTypes from 'prop-types';
const Container = ({ children }) => {
    return <div className="container mx-auto px-2 sm:px-0">{children}</div>;
};

export default Container;

Container.propTypes = { children: PropTypes.node };
