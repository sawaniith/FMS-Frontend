import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {PartnerContext} from '../App';
import {BASE_URL} from '../helper'

const Logout = () => {

  const {state, dispatch} = useContext(PartnerContext);

  const navigate = useNavigate();

  const getJWTToken = () => {
    return localStorage.getItem("jwtoken");
  };

  const jwtToken = getJWTToken()
  useEffect(() => {

    fetch(`${BASE_URL}/logout`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${jwtToken}`,
        "Content-Type": "application/json"
      },
      credentials: "include"
    }).then((res) => {
      dispatch({type:"PARTNER", payload: false});
      navigate("/");
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    }).catch((err) => {
      console.log(err);
    })
  });



  return (
    <>
         <h1>Logged Out Successfully</h1>
    </> 
  );
};

export default Logout;