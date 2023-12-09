const HeroBg = () => {
    return (
        <>
            <div className="absolute -bottom-[4rem] -rotate-3 left-0 z-[2] ">
                <figure className="w-[150%]">
                    <img
                        src="https://i.ibb.co/3sLHV1X/ezgif-com-gif-maker.png"
                        alt="Hero Bg"
                        className="w-full h-full object-cover object-center"
                    />
                </figure>
            </div>
            <div
                className="absolute bottom-0 left-0 w-screen
            h-[12.2rem] overflow-hidden z-[2]">
                <figure className=" ">
                    <img
                        src="https://i.ibb.co/0ys2Y3c/ezgif-com-gif-maker-1.png"
                        alt="Hero Bg"
                    />
                </figure>
            </div>
        </>
    );
};

export default HeroBg;
