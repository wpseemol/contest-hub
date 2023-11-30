const ContestCardHeader = () => {
    return (
        <div className="flex items-center sm:gap-10 gap-44 justify-center border-b pb-2 text-base font-semibold">
            <div className="lg:w-3/5 sm:w-1/2">
                <h2>Contest info</h2>
            </div>
            <div className="flex items-center justify-evenly gap-5 lg:w-2/5 md:3/5 sm:w-1/2">
                <div className="mx-auto hidden md:block">
                    <h2>Entries</h2>
                </div>
                <div className=" mx-auto">
                    <h2>Prize Money</h2>
                </div>
                <div className="mx-auto hidden md:block">
                    <h2>More details</h2>
                </div>
            </div>
        </div>
    );
};

export default ContestCardHeader;
