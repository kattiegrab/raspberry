import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/raspberry.png';

const NavWrapper = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    .menu {
        width: 100%;
        max-width: 619px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        a {
            color: #fff;
            text-transform: uppercase;
            text-decoration: none;
            font-weight: 400;
            position: relative;
            &:before{
                content: " ";
                position: absolute;
                left: 0%;
                bottom: -10px;
                height: 1px;
                width: 0%;
                background-color: #fff;
                transition: width 0.5s ease-in-out;
                z-index: 500;
            }
            &:after {
                content: " ";
                position: absolute;
                right: 0%;
                bottom: -10px;
                height: 1px;
                width: 0%;
                background-color: #fff;
                transition: width 0.5s ease-in-out;
                z-index: 500;
            }
            &:hover,&:focus{
                &:before{
                    width:50%
                }
                &:after{
                    width:50%
                }
            }
        }
    }
    .menu-button-container {
        display: none;
        height: 100%;
        width: 30px;
        cursor: pointer;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #menu-toggle {
        display: none;
    }
    .menu-button,
    .menu-button::before,
    .menu-button::after {
        display: block;
        background-color: #fff;
        position: absolute;
        height: 4px;
        width: 30px;
        transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
        border-radius: 2px;
    }
    .menu-button::before {
        content: '';
        margin-top: -8px;
    }
    .menu-button::after {
        content: '';
        margin-top: 8px;
    }
    #menu-toggle:checked + .menu-button-container .menu-button::before {
        margin-top: 0px;
        transform: rotate(405deg);
    }
    #menu-toggle:checked + .menu-button-container .menu-button {
        background: rgba(255, 255, 255, 0);
    }
    #menu-toggle:checked + .menu-button-container .menu-button::after {
        margin-top: 0px;
        transform: rotate(-405deg);
    } 
    .mobileLogo {
        display: none;
    }
    @media (max-width: 768px) {
        .menu-button-container {
            display: flex;
        }
        .menu {
            position: absolute;
            top: 0;
            margin-top: 70px;
            left: 0;
            flex-direction: column;
            width: 100%;
            justify-content: center;
            align-items: center;
            max-width: unset;
            a {
                display: flex;
                justify-content: center;
                margin: 0;
                padding: 0.5em 0;
                width: 100%;
                color: white;
                background-color: #a83a5e;
                opacity: 0;
                &:before, &:after {
                    bottom: 0;
                }
            }
            img {
                display: none;
            }
        }
        #menu-toggle ~ .menu a {
            height: 0;
            margin: 0;
            padding: 0;
            border: 0;
            transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        #menu-toggle:checked ~ .menu a {
            height: 2.5em;
            padding: 0.5em;
            transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
            opacity: 1;
        }
        .mobileLogo {
            display: block;
            position: absolute;
            top: 10px;
            left: 10%;
        }
    }
`

const Nav = () => (
    <NavWrapper>
        <input id="menu-toggle" type="checkbox" />
        <label className='menu-button-container' for="menu-toggle">
            <span className='menu-button'></span>
        </label>
        <img className='mobileLogo' src={logo} alt="Raspberry Kingdom"/>
        <div className="menu">
            <a href="#">about</a>
            <a href="#">offer</a>
            <img src={logo} alt="Raspberry Kingdom"/>
            <a href="#">gallery</a>
            <a href="#">contact</a>
        </div>
    </NavWrapper>
)

export default Nav;