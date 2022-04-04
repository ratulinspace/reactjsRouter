import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h2 style={{ color: '#CF202A' }}> reactRouter | https://reactrouter.com/</h2>
            <nav>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/about">AboutUs</CustomLink>
            </nav>
        </div >
    );
};

export default Header;