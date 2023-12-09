import PropTypes from 'prop-types';
import { FaContao, FaTrophy, FaUsers } from 'react-icons/fa6';
import { TiDocumentAdd } from 'react-icons/ti';
import { FaSave, FaUserAlt } from 'react-icons/fa';
import { RiFileSettingsFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const DashboardMenus = ({ isDryerClose, userRole, user }) => {
    const simpleUser = user && userRole === 'user';
    const contestCreator = user && userRole === 'contest-creator';
    const isAdmin = user && userRole === 'admin';

    return (
        <>
            <div
                className={`${
                    isDryerClose ? 'md:items-center' : 'items-start'
                } flex flex-col  gap-5`}>
                {simpleUser && (
                    <>
                        <div>
                            <NavLink
                                to="/dashboard/participated-contest"
                                className="flex items-center gap-2">
                                <div>
                                    <FaContao className="text-2xl" />
                                </div>

                                <div
                                    className={
                                        isDryerClose
                                            ? 'md:hidden block'
                                            : 'block'
                                    }>
                                    <h2>Participated Contest</h2>
                                </div>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                to="/dashboard/winning-page"
                                className="flex items-center gap-2 hover:active duration-300">
                                <div>
                                    <FaTrophy className="text-2xl" />
                                </div>
                                <div
                                    className={
                                        isDryerClose
                                            ? 'md:hidden block'
                                            : 'block'
                                    }>
                                    <h2>Winning Contest Page</h2>
                                </div>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                to="/dashboard/profile"
                                className="flex items-center gap-2 hover:active duration-300">
                                <div>
                                    <FaUserAlt className="text-2xl" />
                                </div>

                                <div
                                    className={
                                        isDryerClose
                                            ? 'md:hidden block'
                                            : 'block'
                                    }>
                                    <h2>Profile</h2>
                                </div>
                            </NavLink>
                        </div>
                    </>
                )}
                {contestCreator && (
                    <>
                        <div className="">
                            <NavLink
                                to="/dashboard/add-contest"
                                className="flex items-center gap-2 hover:active duration-300">
                                <div>
                                    <TiDocumentAdd className="text-2xl" />
                                </div>

                                <div
                                    className={
                                        isDryerClose
                                            ? 'md:hidden block'
                                            : 'block'
                                    }>
                                    <h2>Add Contest</h2>
                                </div>
                            </NavLink>
                        </div>
                        <div className="">
                            <NavLink
                                to="/dashboard/my-created-contest"
                                className="flex items-center gap-2 hover:active duration-300">
                                <div>
                                    <FaContao className="text-2xl" />
                                </div>

                                <div
                                    className={
                                        isDryerClose
                                            ? 'md:hidden block'
                                            : 'block'
                                    }>
                                    <h2>My Created Contest</h2>
                                </div>
                            </NavLink>
                        </div>
                        <div className="">
                            <NavLink
                                to="/dashboard/contest-submitted-page"
                                className="flex items-center gap-2 hover:active duration-300">
                                <div>
                                    <FaSave className="text-2xl" />
                                </div>

                                <div
                                    className={
                                        isDryerClose
                                            ? 'md:hidden block'
                                            : 'block'
                                    }>
                                    <h2>Contest Submitted Page</h2>
                                </div>
                            </NavLink>
                        </div>
                    </>
                )}
                {isAdmin && (
                    <>
                        <div className="">
                            <NavLink
                                to="/dashboard/manage-user"
                                className="flex items-center gap-2 hover:active duration-300">
                                <div>
                                    <FaUsers className="text-2xl" />
                                </div>

                                <div
                                    className={
                                        isDryerClose
                                            ? 'md:hidden block'
                                            : 'block'
                                    }>
                                    <h2>Manage User</h2>
                                </div>
                            </NavLink>
                        </div>
                        <div className="">
                            <NavLink
                                to="/dashboard/manage-contest"
                                className="flex items-center gap-2 hover:active duration-300">
                                <div>
                                    <RiFileSettingsFill className="text-2xl" />
                                </div>

                                <div
                                    className={
                                        isDryerClose
                                            ? 'md:hidden block'
                                            : 'block'
                                    }>
                                    <h2>Manage Contest</h2>
                                </div>
                            </NavLink>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default DashboardMenus;
DashboardMenus.propTypes = {
    user: PropTypes.object,
    userRole: PropTypes.string,
    isDryerClose: PropTypes.bool,
};
