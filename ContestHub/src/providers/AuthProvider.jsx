import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, SetLoading] = useState(true);
    const [userRole, setUserRole] = useState(null);

    // created account
    const singUp = (email, password) => {
        SetLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // login account
    const singIn = (siEmail, siPassword) => {
        SetLoading(true);
        return signInWithEmailAndPassword(auth, siEmail, siPassword);
    };

    //user information
    const userInformationSet = (name, profilePicture) => {
        SetLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: profilePicture,
        });
    };

    const logInGoogle = () => {
        SetLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    //login Check
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            SetLoading(false);
        });

        return () => {
            unSubscribe();
        };
    }, [user, loading]);

    //logOut function
    const logOut = () => {
        SetLoading(true);
        localStorage.removeItem('user-role');
        return signOut(auth);
    };

    //   user role

    useEffect(() => {
        const role = localStorage.getItem('user-role');
        if (role) {
            setUserRole(role);
        } else {
            setUserRole(null);
        }
    }, [userRole, user, loading]);

    const loginAndRegInfo = {
        user,
        singUp,
        singIn,
        logOut,
        loading,
        logInGoogle,
        userInformationSet,
        userRole,
        setUserRole,
    };
    return (
        <AuthContext.Provider value={loginAndRegInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
};
