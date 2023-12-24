import React from 'react';

const Footer = ({ setModalDisplay }) => { 

    const showRules = () => {
        setModalDisplay(true);
    };

    return (
        <footer>
            <p>
                Made with{' '}
                <span role="img" aria-label="React">
                    ⚛️
                </span>{' '}
                by Rafael Aguiar Martins
            </p>
            <button id="rules" onClick={showRules}>Rules</button>
        </footer>
    );
};

export default Footer;
