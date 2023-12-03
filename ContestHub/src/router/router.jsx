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
import PrivetRouteForAdmin from '../PrivetRouteForAdmin/PrivetRouteForAdmin';
import PrivetRouteForCreator from '../PrivetRouteForCreator/PrivetRouteForCreator';
import DashboardComponent from '../components/DashboardComponent/DashboardComponent';
import LeaderBoard from '../pages/leaderBoard/leaderBoard';

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
            {
                path: 'leader-board',
                element: <LeaderBoard />,
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
                path: '/dashboard',
                element: (
                    <PrivetRoute>
                        <DashboardComponent />
                    </PrivetRoute>
                ),
            },
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
                    <PrivetRouteForCreator>
                        <AddContest />
                    </PrivetRouteForCreator>
                ),
            },
            {
                path: '/dashboard/my-created-contest',
                element: (
                    <PrivetRouteForCreator>
                        <MyCreatedContest />
                    </PrivetRouteForCreator>
                ),
            },
            {
                path: '/dashboard/contest-submitted-page',
                element: (
                    <PrivetRouteForCreator>
                        <ContestSubmittedPage />
                    </PrivetRouteForCreator>
                ),
            },
            {
                path: '/dashboard/manage-user',
                element: (
                    <PrivetRouteForAdmin>
                        <ManageUser />
                    </PrivetRouteForAdmin>
                ),
            },
            {
                path: '/dashboard/manage-contest',
                element: (
                    <PrivetRouteForAdmin>
                        <ManageContest />
                    </PrivetRouteForAdmin>
                ),
            },
        ],
    },
]);

export default router;
