import React from 'react';
import { Layout } from 'antd';

import './Footer.sass';

const Footer = () => {

    const { Footer } = Layout;

    return (
        <Footer 
            className="footer"
        >
            <p>
               Hecho con ❤ por Gabriela Duran y Hannah Carabolante
            </p>
        </Footer>
    );
};

export default Footer;