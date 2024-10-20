import React from "react";
import { useSelector } from "react-redux";
const UserInfo = useSelector((state)=>{
    return state.User;
});