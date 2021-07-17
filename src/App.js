import React from "react";

//Components in reactjs can be created in two way 1)Js class 2)Js funtions

//stateless funtional component
const FirstComponent = (props) => {
  //important rule-Always return a single element
  return (
    <div>
      <h1>Welcome ,{props.name} </h1>
    </div>
  );
};
//second component called AppName
export const AppName = () => {
  return (
    <div>
      <h1>Credit Card App</h1>

      <button type="button">Login</button>
    </div>
  );
};

export default FirstComponent;
