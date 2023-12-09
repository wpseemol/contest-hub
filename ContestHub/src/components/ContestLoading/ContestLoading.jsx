import { ImSpinner2 } from 'react-icons/im';
import logo from '../../assets/Icon/ContestHubLogo.png';
const ContestLoading = () => {
    return (
        <div className="w-full h-96 flex items-center justify-center overflow-hidden">
            <figure className="w-[20rem] relative p-20">
                <img
                    src={logo}
                    alt="logo"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-2 left-0">
                    <ImSpinner2 className="animate-spin duration-1000 text-[20rem] text-neutral-700" />
                </div>
            </figure>
        </div>
    );
};

export default ContestLoading;
