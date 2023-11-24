import { Helmet } from 'react-helmet-async';
import HeroSection from '../../components/HeroSection/HeroSection';

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
        </>
    );
};

export default Home;
