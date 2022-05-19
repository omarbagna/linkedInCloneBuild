import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Login.css';
import { linkedIn } from './assets';
import { auth } from './firebase';
import { login } from './features/userSlice';

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [profilePic, setProfilePic] = useState("")
  const dispatch = useDispatch('')

  const loginToApp = (e) => {
      e.preventDefault();

      auth.signInWithEmailAndPassword(email, password)
      .then(userAuth => {
          dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoUrl,
          }))
      }).catch(error => alert(error));
  };

  const register = () => {
    if (!name) {
        return alert("Please enter a name");
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoUrl: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                }))
            });
        }).catch(error => alert(error));
  };


  return (
    <div className="login">
        <img className="login__logo" src={linkedIn} alt="logo" />
    
        <form>
            <input 
                placeholder="Full Name (required if registering)" 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} />

            <input 
                placeholder="Profile Picture URL (optional)" 
                type="text"
                value={profilePic} 
                onChange={(e) => setProfilePic(e.target.value)} />

            <input 
                placeholder="Email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} />

            <input 
                placeholder="Password" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} />

            <button type="submit" onClick={loginToApp}>Sign In</button>
        </form>

        <p>Not a member? <span className="login__register" onClick={register}> Register Now</span></p>
    
    </div>
  )
}

export default Login