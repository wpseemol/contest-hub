import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../pages/Home/Home';
import Contest from '../pages/Contest/Contest';
import Login from '../pages/Login/Login';
import SingUp from '../pages/SingUp/SingUp';
import Dashboard from '../pages/Dashboard/Dashboard';

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
    {
        path: 'singup',
        element: <SingUp />,
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
    },
]);

export default router;
