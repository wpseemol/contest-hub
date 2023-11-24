import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';

const MenuBtn = () => {
    return (
        <div className="flex lg:items-center items-start lg:flex-row flex-col lg:gap-3 gap-8 lg:ml-12 mt-16 lg:mt-0">
            <button>Log in</button>
            <PrimaryBtn>
                <span>Get started</span>
            </PrimaryBtn>
        </div>
    );
};

export default MenuBtn;
