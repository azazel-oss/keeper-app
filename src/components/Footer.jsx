import React from 'react';

function Footer() {
    const today = new Date();
    const year = today.getFullYear();
    return <footer>Copyright {year}</footer>;
}

export default Footer;