import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background-color: #000;
    opacity: 0.43;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 80px;
    font-size: 11px;
    font-weight: 400;
    p {
        &:first-of-type {
            text-transform: uppercase;
        }
        &:nth-of-type(2):hover {
            cursor: pointer;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`

const Footer = () => (
    <FooterWrapper>
        <p>© 2014 Raspberry Kingdom</p>
        <p>Cookies   |   Privacy</p>
        <p>Design by Wizard of Oz</p>
    </FooterWrapper>
)

export default Footer;