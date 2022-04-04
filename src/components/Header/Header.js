import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h3 style={{ color: '#CF202A' }}> reactRouter - রিয়েক্ট রাউটার | https://reactrouter.com/</h3>
            <nav>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/posts">Posts</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/countries">Countries</CustomLink>
                <CustomLink to="/restaurants">Restaurants</CustomLink>
                <CustomLink to="/about">AboutUs</CustomLink>
            </nav>
        </div >
    );
};

export default Header;