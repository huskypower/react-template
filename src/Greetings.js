import React from "react";

export const UserGreeting = () => {
  return (
    <React.Fragment>
      <h1>Welcome Back!</h1>
      <button type="button" className="btn btn-warning">
        Logout
      </button>
    </React.Fragment>
  );
};

export const GuestGreeting = () => {
  return (
    <React.Fragment>
      <h1>Please Sign Up!</h1>
      <button type="button" className="btn btn-dark">
        Sign Up
      </button>
    </React.Fragment>
  );
};

export const Greeting = () => {
  const isLoggedIn = true;

  // if(isLoggedIn)
  // {
  //     return <UserGreeting/>
  // }
  // else{
  //     return <GuestGreeting/>
  // }

  return (
    <React.Fragment>
      <button type="button">Login</button>
      <React.Fragment>
        {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
      </React.Fragment>
    </React.Fragment>
  );
};
