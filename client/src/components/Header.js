import React from 'react';

const Header = ({ title, emoji }) => {
    return (
        <div>
            <h2 className="sub-heading top-lead">
                {title}
                {emoji && (
                    <span
                        role="img"
                        aria-labelledby="jsx-a11y/accessible-emoji"
                    >
                        {emoji}
                    </span>
                )}
            </h2>
        </div>
    );
};

export default Header;
