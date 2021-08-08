import React from 'react';
import MainNavigation from './MainNavigation';
import styled from 'styled-components/macro';


const Layout = (props) => {
    return (
        <>
            <MainNavigation />
            <LayoutStyled>

                {props.children}

            </LayoutStyled>
        </>
    )
}


const LayoutStyled = styled.main`
 margin: 3rem auto;
  width: 70%;`

export default Layout
