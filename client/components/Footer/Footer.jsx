import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
<footer className='footer'>
    <div className='container'>
    <p>© Copyright Kemps Maritime Services Ltd {new Date().getFullYear()} | Serviced with care &#128295; | Website by <a className='anchor' href="https://www.ddicecream.co.uk" target='_blank'>Abbie Wills</a></p>
    </div>
    </footer> 
    );
}

export default Footer;
