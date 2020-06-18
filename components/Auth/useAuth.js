// TODO : nickName 받아서 favorite 한 symbol 받아오기

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
    const [nickName, setNickName] = useState(null);

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

        setNickName(nickname);
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
    };

    const getNickname = (email) => {
        const nickRef = firestore_db.collection("nicknames");

        return nickRef
            .where("email", "==", email)
            .get()
            .then((snapshot) => {
                if (snapshot.empty) {
                    return;
                }
                snapshot.forEach((doc) => {
                    setNickName(doc.id);
                });
            })
            .catch((err) => {
                console.log("Error getting documents", err);
            });
    };

    const getFavorite = (nickName) => {
        const FavorRef = firestore_db.collection(
            `/nicknames/${nickName}/favorited`
        );

        return FavorRef.get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    console.log(doc.id);
                });
            })
            .catch((err) => {
                console.log("Error getting document", err);
            });
    };

    useEffect(() => {
        const unsubscribe = firebase_auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                getNickname(user.email);
            } else {
                setUser(false);
                getNickname(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return {
        user,
        nickName,
        signin,
        signup,
        signout,
        sendPasswordResetEmail,
        confirmPasswordReset,
        checkAndAddNickname,
        getFavorite,
    };
}
