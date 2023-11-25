import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../pages/Home/Home';
import Contest from '../pages/Contest/Contest';
import Login from '../pages/Login/Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'contest',
                element: <Contest />,
            },
        ],
    },
    {
        path: 'login',
        element: <Login />,
    },
]);

export default router;
