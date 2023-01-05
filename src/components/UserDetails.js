import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector  } from "react-redux";
import { selectedUser, removeSelectedUser } from "../redux/actions/userActions";

const UserDetails = () => {
    const { userId } = useParams();
    let user = useSelector((state) => state.user);

    const dispatch = useDispatch();
    // console.log(userId);

    const fetchUserDetails = async (id) => {
        const response = await axios.get(`https://reqres.in/api/users/${id}`).catch((err) => {
            console.log("Err", err);
        });
        // console.log(response.data);
        dispatch(selectedUser(response.data));

    };
    useEffect(() => {
        if (userId && userId !== "") fetchUserDetails(userId);
        return () => {
            dispatch(removeSelectedUser());
        };
    }, [userId]);


    return (
        <div className="user-card-container">
            
            {Object.keys(user).length === 0 ? (
                <div className="loading">...Loading</div>
            ) : (
                <div className="user-card">
                    <div className="user-image">
                        <img src={user.data.avatar} alt={user.data.first_name} />
                    </div>
                    <div className="user-details">
                        <h2>{user.data.first_name} {user.data.last_name}</h2>
                        <p>{user.data.email}</p>
                    </div>
                </div>
            )}

        </div>
    );
    };

export default UserDetails;