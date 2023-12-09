import PropTypes from 'prop-types';
const ContestCardContainer = ({ children }) => {
    return (
        <div className="bg-white rounded-xl md:p-6 p-2 w-fit md:mx-20 mx-auto">
            {children}
        </div>
    );
};

export default ContestCardContainer;
ContestCardContainer.propTypes = { children: PropTypes.node };
