import { Link } from 'react-router-dom';
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn';

const Error = () => {
    return (
        <div className="flex items-center justify-center h-screen text-3xl font-bold text-center">
            <div>
                this is 404 page go back you home page
                <br />
                <br />
                <Link to="/">
                    <PrimaryBtn>Back home</PrimaryBtn>
                </Link>
            </div>
        </div>
    );
};

export default Error;
