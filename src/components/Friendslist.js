import React, { useState, useEffect } from "react";
import axios from 'axios';
import axiosWithAuth from "../utils/axioswithAuth";

const FriendsList = () => {
    const [ friends, setFriends] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token')
        axiosWithAuth().get('/friends')
        .then(response => {
            console.log(response)
            setFriends(response.data);
        })
        .catch(err=> {
            console.log(err);
        });
}, [])
    return (<div>
        <h2>FriendsList</h2>
        <ul>
        {
            friends.map(friend => {
                return <li key={friend.id}>{friend.name} - {friend.age} - {friend.email}</li>
            })
        }
      
    </ul>
    </div>
    )

  }
  export default FriendsList;