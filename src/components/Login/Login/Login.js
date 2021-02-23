import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import googleLogo from '../../../images/icons/google.png'
import logo from '../../../images/logos/logo.png'
import firebaseConfig from './firebase.config';
import './Login.css'
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    const history = useHistory();
    const location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

const handleGoogleSignIn = () => {
    
    const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser([loggedInUser,signedInUser]);
            
                history.replace(from);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
}

    return (
        <main>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="py-5">
                    <Link to='/'>
                        <img src={logo} alt="" width="180px" />
                    </Link>
                </div>
            </div>
            <div className="login-area p-5 border w-25 rounded d-flex flex-column align-items-center justify-content-center">
                <h3 className="font-weight-bold mb-3">Login With</h3>
                <button className="login-button mb-3 px-5 py-2"  onClick={handleGoogleSignIn}>
                    <img src={googleLogo} alt="" width="16px" className="mr-2" />Continue with Google
                </button>
                <p><small className='text-muted'>Don't have an account? <a href="/login">Create an account.</a></small></p>
            </div>
        </main>
    );
};

export default Login;