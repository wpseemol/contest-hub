import PropTypes from 'prop-types';
const PrimaryBtn = ({ children }) => {
    return (
        <button className="bg-primaryColor text-white font-semibold py-2 px-5 rounded-full hover:-translate-y-1 hover:shadow-2xl shadow-primaryColor duration-300">
            {children}
        </button>
    );
};

export default PrimaryBtn;

PrimaryBtn.propTypes = { children: PropTypes.node };
