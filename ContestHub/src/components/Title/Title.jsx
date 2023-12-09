import PropTypes from 'prop-types';
const Title = ({ children }) => {
    return (
        <div className="mx-auto w-fit mb-12">
            <h2 className="sm:text-4xl text-3xl font-bold capitalize text-center">
                {children}
            </h2>
        </div>
    );
};

export default Title;

Title.propTypes = { children: PropTypes.node };
