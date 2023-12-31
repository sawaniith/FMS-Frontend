import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {PartnerContext} from '../App';
import {BASE_URL} from '../helper'

const Logout = () => {

  const {state, dispatch} = useContext(PartnerContext);

  const navigate = useNavigate();

  useEffect(() => {

    // fetch(`${BASE_URL}/logout`, {
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   credentials: "include"
    // }).then((res) => {
      localStorage.removeItem("jwtoken");
      dispatch({type:"PARTNER", payload: false});
      navigate("/");
      // if (res.status !== 200) {
      //   const error = new Error(res.error);
      //   throw error;
      // }
    // }).catch((err) => {
    //   console.log(err);
    // })
  });



  return (
    <>
         <h1>Logged Out Successfully</h1>
    </> 
  );
};

export default Logout;