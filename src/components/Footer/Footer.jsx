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
                Hannah Carabolante
            </p>
        </Footer>
    );
};

export default Footer;