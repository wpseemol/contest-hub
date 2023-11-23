import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Root;
