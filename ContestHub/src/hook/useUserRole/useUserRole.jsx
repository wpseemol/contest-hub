import useAuthProvider from '../useAuthProvider/useAuthProvider';
import useAxiosPublic from '../useAxiosPublic/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useUserRole = () => {
    const { user } = useAuthProvider();

    const publicBaseUrl = useAxiosPublic();

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['card-items'],

        queryFn: async () => {
            if (user) {
                const userRole = await publicBaseUrl.get('/user-role');
                return userRole.data;
            } else {
                return {};
            }
        },
    });

    return { data, refetch, isLoading };
};

export default useUserRole;
