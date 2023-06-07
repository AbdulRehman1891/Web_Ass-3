import React from "react"
import { Signup } from "./signup";
import { Tours } from "./tours";
import { Navbar } from './navbar';


export const Home = () => {
    
  const isLoggedIn = false;
    return(
        <>
        <Navbar isLoggedIn={isLoggedIn}/>
        <Tours/>
        </>
    )
}