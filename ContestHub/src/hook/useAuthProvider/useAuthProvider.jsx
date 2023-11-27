import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const useAuthProvider = () => {
    const loginRegInfo = useContext(AuthContext);
    return loginRegInfo;
};

export default useAuthProvider;
