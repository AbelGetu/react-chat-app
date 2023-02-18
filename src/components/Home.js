import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, registerUser } from '../actions/userActions';

const Home = ({socket}) => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)

  const { loading, error, userInfo } = userLogin

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [showLoginPage, setShowLoginPage] = useState(true)

  useEffect(() => {
    if (userInfo) {
      navigate('/chat');
    }
  }, [userInfo])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
      dispatch(registerUser(name, email, password))
    
    // localStorage.setItem('userName', userName);
    //sends the username and socket ID to the Laravel and Node.js server
    // socket.emit('newUser', { userName, socketID: socket.id });

  };

  const handleLoginSubmit = (e) => {
    e.preventDefault()

    dispatch(login(email, password))
  }

  
  return (
    <>
    {showLoginPage ? (
        <div>
        <form className="home__container" onSubmit={handleLoginSubmit}>
            <h2 className="home__header">Sign In to Open Chat</h2>
            
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              minLength={6}
              name="email"
              id="email"
              className="email__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Password</label>
            <input
              type="text"
              minLength={6}
              name="password"
              id="password"
              className="email__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="home__cta">SIGN IN</button>
            <p>New Here? Please create an account? <strong><a href='#' onClick={() => setShowLoginPage(false)}>Register</a></strong></p>
          </form>
        </div>
      ) : 
        (<div>
          <form className="home__container" onSubmit={handleSubmit}>
            <h2 className="home__header">Sign Up to Open Chat</h2>
            <label htmlFor="email">Name</label>
            <input
              type="text"
              minLength={6}
              name="name"
              id="name"
              className="email__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              minLength={6}
              name="email"
              id="email"
              className="email__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Password</label>
            <input
              type="text"
              minLength={6}
              name="password"
              id="password"
              className="email__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="home__cta">SIGN UP</button>
            <p>Already have an account? <strong><a href='#' onClick={(e) => setShowLoginPage(true)}>Register</a></strong></p>
          </form>
        </div>)
      }
    </>
  );
};

export default Home;