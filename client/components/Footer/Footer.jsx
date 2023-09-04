import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
<footer className='footer'>
    <div className='container'>
    <p>&copy;  Serviced with care &#128295; © Kemps Maritime Services {new Date().getFullYear()} - Website by Abbie Wills</p>
    </div>
    </footer>    );
}

export default Footer;
