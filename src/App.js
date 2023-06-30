import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/Friendslist';
import AddFriend from './components/AddFriend';
import Logout from './components/logout';
import PrivateRoute from './components/PrivateRoute';

function LoginRedirect() {
  let navigate = useNavigate();

  // Here we'll use an effect to check if the user is logged in. 
  // This is a placeholder and you'll have to fill in with your logic.
  React.useEffect(() => {
    const userIsLoggedIn = false; // replace with your logic

    if (!userIsLoggedIn) {
      navigate('/');
    }
  }, [navigate]);

  return null;
}

function App() {
 

  return (
    <Router>
      <div className="App">
        <header>
          <h2>Friends Database</h2>
          <Link className="link"to="/login">Login</Link>
          <Link className="link"to="/friends">FriendsList</Link>
          <Link className="link"to="/friends/add">Add Friends</Link>
          <Link className="link"to="/logout">Logout</Link>
        </header>
        <LoginRedirect />
        <Routes>
          <Route path="/" element={<Login />} />
          <PrivateRoute path="/friends" component={<FriendsList />} />
          <Route path="/friends/add" element={<AddFriend />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

