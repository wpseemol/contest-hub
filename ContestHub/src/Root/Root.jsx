import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <>
            <Header />
            <main className="font-montserratFont">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Root;
