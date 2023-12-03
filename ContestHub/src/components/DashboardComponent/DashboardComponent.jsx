import useAuthProvider from '../../hook/useAuthProvider/useAuthProvider';

const DashboardComponent = () => {
    const { user, userRole } = useAuthProvider();

    return (
        <>
            <div className="lg:text-5xl md:text-4xl text-2xl font-bold">
                <p className="whitespace-pre">Hello,</p>

                <p className="ml-16 mt-3">Welcome to ContestHub Dashboard</p>
            </div>
            <div>
                <div className=" w-28 mx-auto  mb-5 overflow-hidden mt-10">
                    {user?.photoURL ? (
                        <img
                            className="rounded-full w-full object-cover"
                            src={user?.photoURL}
                            alt={
                                user?.displayName
                                    ? user?.displayName
                                    : 'User Image'
                            }
                        />
                    ) : (
                        <h2 className="text-lg font-bold">Your information</h2>
                    )}
                </div>
                <div className="w-fit mx-auto text-center">
                    <h2 className="text-3xl font-semibold">
                        {' '}
                        {user?.displayName ? user?.displayName : ''}
                    </h2>
                    <h3 className="mt-2 text-xl font-semibold">
                        {!userRole ? (
                            'Loading...'
                        ) : (
                            <span className="capitalize">
                                {userRole.replace(/-/g, ' ')}
                            </span>
                        )}
                    </h3>
                </div>
            </div>
        </>
    );
};

export default DashboardComponent;
