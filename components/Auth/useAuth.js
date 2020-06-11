import React, { useState, useEffect, useContext, createContext } from "react";
import { firebase_auth, firestore_db } from "../../db/firebase_auth";

const authContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// useSelector과 같은 기능을 한다고 생각하기. useContext 훅을 사용해줘야 해당 Context를 읽을 수 있다.
export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = (email, password) => {
        return firebase_auth
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                setUser(response.user);
                return response.user;
            });
    };

    const signup = (email, password) => {
        return firebase_auth
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                setUser(response.user);
                return response.user;
            });
    };

    const signout = () => {
        return firebase_auth.signOut().then(() => {
            setUser(false);
        });
    };

    const sendPasswordResetEmail = (email) => {
        return firebase_auth.sendPasswordResetEmail(email).then(() => {
            return true;
        });
    };

    const confirmPasswordReset = (code, password) => {
        return firebase_auth.confirmPasswordReset(code, password).then(() => {
            return true;
        });
    };

    const checkAndAddNickname = (email, nickname) => {
        const nickRef = firestore_db.collection("nicknames").doc(nickname);

        return nickRef
            .get()
            .then(function (doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                    nickRef.set({ email: email });
                }
            })
            .catch(function (error) {
                console.log("Error getting document:", error);
            });

        // return firestore_db.collection("nicknames").doc(nickname).set({
        //     email: email,
        //     nickname: nickname,
        // });
    };

    const currentUser = () => {
        const user = firebase_auth.currentUser;

        // if (user !== null) {
        //     user.providerData.forEach(function (profile) {
        //         console.log("Sign-in provider: " + profile.providerId);
        //         console.log("  Provider-specific UID: " + profile.uid);
        //         console.log("  Name: " + profile.displayName);
        //         console.log("  Email: " + profile.email);
        //         console.log("  Photo URL: " + profile.photoURL);
        //     });
        // } else {
        //     console.log("로그인한 유저가 없습니다.");
        // }

        // if (user !== null) {
        //     return user.providerData.uid;
        // }

        return user;
    };

    useEffect(() => {
        const unsubscribe = firebase_auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return {
        user,
        signin,
        signup,
        signout,
        sendPasswordResetEmail,
        confirmPasswordReset,
        currentUser,
        checkAndAddNickname,
    };
}
