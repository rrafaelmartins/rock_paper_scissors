import React from 'react';

const Header = () => {

    return (
        <header className="header">
            <div>
                <h1 id="title">Rock<br /> 
                    Paper<br /> 
                    Scissors
                </h1>
            </div>
            <div id="score">
                <h2>Score: </h2>
            </div>
        </header>

    );
}

export default Header;