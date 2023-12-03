import { Link } from 'react-router-dom';
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn';

const Error = () => {
    return (
        <div className="flex items-center justify-center h-screen text-3xl font-bold text-center">
            <div>
                <div>
                    <figure>
                        <img
                            src="https://siliconvalleygazette.com/posts/what-is-the-404-not-found-error.png"
                            alt="errorImage"
                        />
                    </figure>
                </div>
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
