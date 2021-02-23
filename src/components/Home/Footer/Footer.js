import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="text-center text-dark py-3">
                <small>
                    Copyright © Orange Labs {currentYear}
                </small>
            </div>
        </footer>
    );
};

export default Footer;