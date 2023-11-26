import { Helmet } from 'react-helmet-async';
import HeroSection from '../../components/HeroSection/HeroSection';
import TopContext from '../../components/TopContext/TopContext';
import Promotion from '../../components/Propotion/Promotion';
import BestContestCreator from '../../components/BestContestCreator/BestContestCreator';
import MoreHelp from '../../components/MoreHelp/MoreHelp';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>ontestHub | Home</title>
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

            {/* top contest creator */}
            <section>
                <BestContestCreator />
            </section>

            {/* end some text */}
            <section>
                <MoreHelp />
            </section>
        </>
    );
};

export default Home;
