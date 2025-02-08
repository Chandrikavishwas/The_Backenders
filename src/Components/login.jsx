import { useState } from 'react';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'; 
import { Button } from '@chakra-ui/react';
import imglogo from "../images/Updated-Logo/CROP_Updated_Logo_W-removebg-preview.png";
import { useToast } from "@chakra-ui/react";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
     await signInWithEmailAndPassword(auth, email, password);


      toast({
        title: 'Successful',
        description: "Here is your dashboard",
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate("/home");
    } catch (err) {
      setError("User  not signed in. Please check your credentials.",err);
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/signIn'); 
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='Login-page'>
      <div className="container">
        <form className="loginForm" onSubmit={handleLogin}>
          <img src={imglogo} alt="logo" />
          <h2 className='login-h2'>Welcome</h2>
          <h3 className='login-h3'>Sign in To your Crow Funding Account</h3>
          <label>Email or Username</label>
          <input className='login-input'
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"} 
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="password-toggle" onClick={togglePasswordVisibility}>
              {showPassword ? (
                <i className="fas fa-eye-slash"></i>
              ) : (
                <i className="fas fa-eye"></i>
              )}
            </span>
          </div>
          <Button colorScheme='teal' w="100%" p="14px 20px" type="submit">Login</Button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p className='login-p'>No account? Sign Up</p>
        <Button colorScheme='red' w="100%" p="14px" marginTop="15px" onClick={handleSignUpRedirect}>Sign Up</Button>
      </div>
    </div>
  );
}

export default Login;