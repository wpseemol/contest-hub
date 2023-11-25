import Title from '../Title/Title';

const MoreHelp = () => {
    return (
        <div
            className="bg-gradient-to-r from-[#edfcff]
        to-[#edfcff94] py-16 z-10 relative overflow-hidden text-center">
            <div>
                <Title>👋 Need more help?</Title>
            </div>
            <div className="-mt-4">
                <p className="text-sm font-medium">
                    We are here to help you set up your design
                    <br /> contest or to hire a designer 1 on 1.
                </p>
            </div>
            <div className="font-medium text-base mt-6">
                <button>💬 Request Free Consultation</button>
            </div>
        </div>
    );
};

export default MoreHelp;
