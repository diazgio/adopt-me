import React from 'react';
import { Link } from '@reach/router';
import styled, { keyframes } from 'styled-components';
import Colors from '../variables/Colors';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const NavBar = () => {
  const Header = styled.header`
    background: ${Colors.secondary};
    border-radius: 16px;
    padding-bottom: 10px;
    padding-left:10px;
    margin-bottom: 10px;
    margin-top: 10px;
    position: sticky;
    top: 0;
    z-index: 10;
  `
  const Span = styled.span`
    font-size: 55px;
    display: inline-block;
    margin-right: 20px;
    animation: 12s ${spin} linear infinite;
    &:hover {
      animation: 12s ${spin} linear infinite reverse;
    }
  `

  return (
    <Header>
      <Link to="/">Adopt Me!</Link>
      <Span
        role="img" 
        aria-label="logo"
      >
        🐩
      </Span>
    </Header>
  )
}

export default NavBar;