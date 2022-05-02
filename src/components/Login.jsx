import { useState, useEffect } from "react";
import {axios} from "axios"


export const Login = () => {

  const [user, setUser]=useState([])

//   useEffect(()=>{
//       axios.get("http://localhost:8080/users").then((data)=>{
//           setUser(data)
//       })

//   }, [])

  

    return (
      <div>
        <input
          className="username"
          type="text"
          name="username"
          placeholder="Enter Username"
        />
        <input
          className="password"
          type="password"
          name="password"
          placeholder="Enter password"
        />
        {/* On this button click make network req to find user with same username and password */}
        {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
        <button className="submit">Login</button>
      </div>
    );
  };