import PropTypes from 'prop-types';
const MenuIcon = ({ isTrue }) => {
    return (
        <div className="relative w-6 h-6">
            <span
                className={`${
                    isTrue ? 'rotate-45 top-[11px]' : ''
                } absolute w-6 h-[2px] bg-[#252737] block duration-[.4s]`}></span>
            <span
                className={`${
                    isTrue ? 'hidden' : 'block'
                } absolute w-6 h-[2px] bg-[#252737] top-[11px] duration-[.4s]`}></span>
            <span
                className={`${
                    isTrue ? '-rotate-45 top-[11px]' : 'top-[22px]'
                } absolute w-6 h-[2px] bg-[#252737] block duration-[.4s]`}></span>
        </div>
    );
};

export default MenuIcon;

MenuIcon.propTypes = { isTrue: PropTypes.bool };
