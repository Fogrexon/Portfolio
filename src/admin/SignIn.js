import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';
import { firebase, auth as firebaseAuth } from '../firebase/firebase';

const loginHandler = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebaseAuth.signInWithPopup(provider);
};

export default () => {
  const [login, setLoginStatus] = useState(false);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      setChecked(true);
      setLoginStatus(!!user && process.env.REACT_APP_ADMINISTRATOR_UID === user.uid);
    });
  }, []);
  if (!checked) return 'Loading...';
  if (login) return <Redirect to="/admin" />;
  return (<Button onClick={loginHandler}>Signin with google</Button>);
};
