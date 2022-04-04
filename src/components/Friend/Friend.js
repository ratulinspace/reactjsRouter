import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend;

    const navigate = useNavigate();

    const showFriendDetail = () => {
        navigate('/friend/' + id);
    }
    return (
        <div>
            <h4>{name}</h4>
            <button onClick={showFriendDetail}>{username} | <strong>UID: {id}</strong></button>
        </div>
    );
};

export default Friend;