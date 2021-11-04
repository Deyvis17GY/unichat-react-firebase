import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    // const unsubscribe =
    auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
      setLoading(false);
      if (authUser) {
        // const userRef = await auth.currentUser.getIdTokenResult();
        // setCurrentUser(authUser);
        // // setCurrentUser({
        // //   displayName: authUser.displayName,
        // //   email: authUser.email,
        // //   emailVerified: authUser.emailVerified,
        // //   isAnonymous: authUser.isAnonymous,
        // //   photoURL: authUser.photoURL,
        // //   uid: authUser.uid,
        // //   providerData: authUser.providerData,
        // //   token: userRef.token,
        // // });
        // setLoading(false);
        history.push("/chats");
      } else {
        // setCurrentUser(null);
        // setLoading(false);
        history.push("/");
      }
    });
    // return () => {
    //   unsubscribe();
    // };
  }, [user, history]);

  const value = { user };

  const signIn = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const signOut = () => {
    auth.signOut().then(() => {
      history.push("/");
    });
  };

  const signUp = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
