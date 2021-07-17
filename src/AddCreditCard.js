import React, { useState } from "react";
import axios from "axios";

export const AddCreditCard = (props) => {
  const [name, setName] = useState("");

  const [description, setDescription] = useState("");

  const [cost, setCost] = useState("");
  //  const[id , setId]=useState("");
  let id;
  //Updating the state of the name
  const handleOnChangeName = (e) => {
    console.log(e);

    setName(e.target.value);
  };
  //Updating the state of the description
  const handleOnChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  
  const AddCreditCardToDb = (newCreditCard) => {
    console.log(newCreditCard);

    let newlyAddedCard;
    axios
      .post("http://localhost:8080/createcreditcard", newCreditCard)
      .then((res) => {
        newlyAddedCard = res.data;
        console.log(res);
        console.log(res.data);
        props.updateList(newlyAddedCard);
      });
  };
  //Updating the state of the cost
  const handleOnChangeCost = (e) => {
    setCost(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let creditCardName = name;
    const newCreditCard = {
      creditCardName,
      description,
      cost
    };
    AddCreditCardToDb(newCreditCard);
    //Updating the List of creditcards on submit
    console.log(newCreditCard);
  };

  return (
    //First Step-Form Template-Html
    //Onchange of a value in text field call a particular method and do some operation
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Credit Card Name:
            <input
              type="text"
              name="name"
              className="form-control"
              value={name}
              onChange={handleOnChangeName}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Credit Card Description:
            <input
              type="text"
              name="description"
              className="form-control"
              value={description}
              onChange={handleOnChangeDescription}
            />
          </label>
        </div>{" "}
        <div className="form-group">
          <label>
            Credit Card Cost:
            <input
              type="text"
              name="cost"
              className="form-control"
              value={cost}
              onChange={handleOnChangeCost}
            />
          </label>
        </div>
        <input type="submit" name="Submit" />
      </form>
    </React.Fragment>
  );
};
