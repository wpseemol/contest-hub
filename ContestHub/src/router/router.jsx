import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../pages/Home/Home';
import Contest from '../pages/Contest/Contest';
import Login from '../pages/Login/Login';
import SingUp from '../pages/SingUp/SingUp';
import Dashboard from '../pages/Dashboard/Dashboard';
import Error from '../pages/error/error';
import PrivetRoute from '../privetRoute/PrivetRoute';
import Profile from '../components/Profile/Profile';
import WinningPage from '../pages/WinningPage/WinningPage';
import ParticipatedContest from '../pages/ParticipatedContest/ParticipatedContest';
import AddContest from '../pages/AddContest/AddContest';
import MyCreatedContest from '../pages/MyCreatedContest/MyCreatedContest';
import ContestSubmittedPage from '../pages/ContestSubmittedPage/ContestSubmittedPage';
import ManageUser from '../pages/ManageUser/ManageUser';
import ManageContest from '../pages/ManageContest/ManageContest';

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
        children: [
            {
                path: '/dashboard/profile',
                element: (
                    <PrivetRoute>
                        <Profile />
                    </PrivetRoute>
                ),
            },
            {
                path: '/dashboard/winning-page',
                element: (
                    <PrivetRoute>
                        <WinningPage />
                    </PrivetRoute>
                ),
            },
            {
                path: '/dashboard/participated-contest',
                element: (
                    <PrivetRoute>
                        <ParticipatedContest />
                    </PrivetRoute>
                ),
            },
            {
                path: '/dashboard/add-contest',
                element: (
                    <PrivetRoute>
                        <AddContest />
                    </PrivetRoute>
                ),
            },
            {
                path: '/dashboard/my-created-contest',
                element: (
                    <PrivetRoute>
                        <MyCreatedContest />
                    </PrivetRoute>
                ),
            },
            {
                path: '/dashboard/contest-submitted-page',
                element: (
                    <PrivetRoute>
                        <ContestSubmittedPage />
                    </PrivetRoute>
                ),
            },
            {
                path: '/dashboard/manage-user',
                element: (
                    <PrivetRoute>
                        <ManageUser />
                    </PrivetRoute>
                ),
            },
            {
                path: '/dashboard/manage-contest',
                element: (
                    <PrivetRoute>
                        <ManageContest />
                    </PrivetRoute>
                ),
            },
        ],
    },
]);

export default router;
