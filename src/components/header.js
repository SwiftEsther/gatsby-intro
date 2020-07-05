import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const NavLink = styled(Link)`
    color: #222;
    text-decoration: none;
    margin: 0 0.5rem 0 0;
    font-size: 1rem;
    font-weight: ${props => props.fontWeight || 'normal'};
    padding: 0.25rem;
    line-height: 1;

    &.current-page{
        border-bottom: 2px solid #222;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;

const Header = () => (
    <header 
        css={css`
            background: #eee;
            border-bottom: 1px solid #ddd;
            display: flex;
            justify-content: space-between;
            padding: 0.5rem calc((100vw - 550px)/2)
        `}
    >
        <NavLink to='/' fontWeight="bold">FEM Workshop</NavLink>
        <nav
            css={css`
                margin-top: 0;
            `}
        >
            <NavLink to='/' activeClassName='current-page'>Home</NavLink>
            <NavLink to='/about/' activeClassName='current-page'>About</NavLink>
        </nav>
    </header>
);

export default Header;
