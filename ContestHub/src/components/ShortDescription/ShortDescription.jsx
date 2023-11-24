import PropTypes from 'prop-types';
const ShortDescription = ({ shortDes }) => {
    const shortDisc = shortDes.split(' ').slice(0, 11);
    shortDisc[shortDisc.length - 1] = '...';

    return (
        <p className="w-64 h-[5rem] overflow-hidden text-ellipsis mx-auto my-2 text-lg">
            {shortDisc.map((text, inx) => {
                return <span key={inx}>{text + ' '}</span>;
            })}
        </p>
    );
};

export default ShortDescription;

ShortDescription.propTypes = { shortDes: PropTypes.string };
