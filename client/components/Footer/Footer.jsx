import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
<footer className='footer'>
    <div className='container'>
    <p>&copy; {new Date().getFullYear()} Serviced with care &#128295; © Kemps Maritime Services - Website by Abbie Wills</p>
    </div>
    </footer>    );
}

export default Footer;
