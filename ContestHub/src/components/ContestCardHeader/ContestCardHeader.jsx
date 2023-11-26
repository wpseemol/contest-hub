const ContestCardHeader = () => {
    return (
        <div className="flex items-center gap-10 justify-center border-b pb-2 text-xl font-semibold">
            <div className="lg:w-3/5 sm:w-1/2">
                <h2>Contest info</h2>
            </div>
            <div className="flex items-center justify-evenly lg:w-2/5 sm:w-1/2">
                <div className="mx-auto hidden md:block">
                    <h2>Entries</h2>
                </div>
                <div className=" mx-auto">
                    <h2>Package</h2>
                </div>
                <div className="mx-auto hidden md:block">
                    <h2>More details</h2>
                </div>
            </div>
        </div>
    );
};

export default ContestCardHeader;
