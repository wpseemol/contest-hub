import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <>
            <Header />
            <main className="font-montserratFont text-[#252737] min-h-[32.5rem]">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Root;
