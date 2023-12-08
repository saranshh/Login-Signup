import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./NotFound.css";
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/userAction";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NotFound = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logoutUser() {
    console.log("Hii Saru");
    dispatch(logout());  
    alert.success("Logout Successfully");
    // navigate("/");
  }
  return (
    <div className="PageNotFound">
      <ErrorIcon />

      <Typography>Thank You for signing in here. We will connect you soon.</Typography>
      <Link to="/" onClick={logoutUser}>Home</Link>
    </div>
  );
};

export default NotFound;
