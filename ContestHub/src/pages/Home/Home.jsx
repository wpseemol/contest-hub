import { Helmet } from 'react-helmet-async';
import HeroSection from '../../components/HeroSection/HeroSection';
import TopContext from '../../components/TopContext/TopContext';
import Promotion from '../../components/Propotion/Promotion';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>ContestHub | Home</title>
            </Helmet>

            {/* hero section */}
            <section>
                <HeroSection />
            </section>

            {/* top context */}
            <section>
                <TopContext />
            </section>

            {/* ade Promotion */}
            <section>
                <Promotion />
            </section>
        </>
    );
};

export default Home;
