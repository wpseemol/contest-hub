import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../pages/Home/Home';
import Contest from '../pages/Contest/Contest';
import Login from '../pages/Login/Login';
import SingUp from '../pages/SingUp/SingUp';
import Dashboard from '../pages/Dashboard/Dashboard';
import Error from '../pages/error/error';
import PrivetRoute from '../privetRoute/PrivetRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
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
        element: (
            <PrivetRoute>
                <Dashboard />
            </PrivetRoute>
        ),
    },
]);

export default router;
