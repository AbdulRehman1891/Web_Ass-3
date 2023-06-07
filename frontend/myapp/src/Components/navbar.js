import React from 'react';
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';
import { Signup } from './signup';
import { Home } from './Home';

export const Navbar = ({ isLoggedIn }) => {
  return (
    <>
      <nav>
        <ul>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/bookings">Bookings</Link>
              </li>
              <li>
                <Link to="/cart">CartItem</Link>
              </li>
              <li>
                <Link to="/wishlist">WishlistItems</Link>
              </li>
              <li>
                <Link to="/profile">My Profile</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/">Homepage</Link>
          </li>
        </ul>
      </nav>

    </>

  );
};

