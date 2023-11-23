import { useState } from 'react';
import MenuIcon from '../../components/MenuIcon/MenuIcon';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const [isActive, setClickMenu] = useState(false);
    return (
        <>
            <Helmet>
                <title>ContestHub | Home</title>
            </Helmet>

            <div className="" onClick={() => setClickMenu(!isActive)}>
                <MenuIcon isTrue={isActive} />
            </div>
        </>
    );
};

export default Home;
