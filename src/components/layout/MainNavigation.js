import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components/macro';


const MainNavigation = () => {
  return (
    <NavStyled>
      <div className="logo">React Post Generator</div>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new-meetup">New Post</Link>
        </li>

        <li>
          <Link to="/favourites">Favourites</Link>
        </li>

      </nav>
    </NavStyled>
  )
}



const NavStyled = styled.header`
 width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #77002e;
    padding: 0 10%;
  }
  
  .logo {
    font-size: 2rem;
    color: white;
    font-weight: bold;
  }
  
  nav{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: baseline;

    li {
      margin-left: 3rem;
      a {
        text-decoration: none;
        font-size: 1.5rem;
        color: #fcb8d2;

        &:hover,
       &a:active,
        a.active {
          color: white;
        }
      }
    }
`



export default MainNavigation
