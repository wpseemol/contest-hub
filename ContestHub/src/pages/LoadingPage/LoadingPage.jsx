import { ImSpinner2 } from 'react-icons/im';

const LoadingPage = () => {
    return (
        <div className="flex items-center justify-start">
            <figure className="w-[20rem] relative border p-20">
                <img
                    src="https://i.ibb.co/VBc0Yjh/Contest-Hub-Logo.png"
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

export default LoadingPage;
