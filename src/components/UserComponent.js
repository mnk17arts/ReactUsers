import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserComponent = () => {

    const users = useSelector((state) => {
        return state.allUsers.users});
    const renderList = users.map((user) => {
        const { id, first_name, last_name, email, avatar  } = user;
        return ( 
        <div className='users-div' key={id}>
            <Link to={`/user/${id}`}>    
                <div className="user-btn-div">
                    <button className="user-btn"> {id} </button>
                </div>
            </Link>     
        </div>
        );
    });

    return (
        <>{renderList}</>
    );
    };

export default UserComponent;