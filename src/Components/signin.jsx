import { useState } from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom';
import "../styles/signin.css"
import { Button } from '@chakra-ui/react';
import imglogo from "../images/Updated-Logo/CROP_Updated_Logo_W-removebg-preview.png";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      alert('Verification email sent!');
      navigate("/login")

    } catch (err) {
      setError("email is already in use",err);
    }
  };

  return (
    
    <div className='signup-container'>
    <form className='sign-form' onSubmit={handleRegister}>
        <img src={imglogo} alt="logo"/>
      <h2 className='sign-h2'>Sign Up</h2>
      <label>Your email</label>
      <input className='sign-input'
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Password</label>
      <input
        className='sign-input'
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <label>Confirm Password</label>
      <input
        className='sign-input'
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <Button colorScheme='blue' w="100%" p="20px 15px" marginTop="10px" type="submit">Sign In</Button>
      {error && <p>{error}</p>}
    </form>
    </div>
  );
}

export default SignIn;