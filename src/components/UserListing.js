import React, {useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector  } from "react-redux";
import { setUsers } from "../redux/actions/userActions";
import UserComponent from "./UserComponent";

const UserListing = () => {
    const users = useSelector((state) => state);
    const dispatch = useDispatch();


    const fetchUsers = async () => {
        let response = await axios.get("https://reqres.in/api/users").catch((err) => {
            console.log("Err", err);
        });

        let response2 = await axios.get("https://reqres.in/api/users?page=2").catch((err) => {
            console.log("Err", err);
        });

        response.data.data = response.data.data.concat(response2.data.data);

        dispatch(setUsers(response.data.data));

        // console.log(response.data.data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // console.log("users: ", users);
    return (
        <div className="users-container">
            <div className="instructions">
                <h3> The Below Buttons directs to their respective users with the IDs present on the button. Please click on one to get details about them.</h3>
            </div>
            <UserComponent/>
        </div>
    );
    };

export default UserListing;