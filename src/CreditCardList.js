import React, { useState, useEffect } from "react";
import { AddCreditCard } from "./AddCreditCard";
import axios from "axios";

export const CreditCardList = () => {
  //array of objects of creditcards
  const creditCardList = [
    {
      id: 1,
      name: "DigiSmart",
      description: "Ideal for Online Shopping",
      cost: 500
    },

    {
      id: 2,
      name: "Platinum",
      description: "Ideal for travelling",
      cost: 900
    },
    {
      id: 3,
      name: "Gold",
      description: "Good for cashback points",
      cost: 999
    }
  ];

  const [creditCards, setCreditCards] = useState([]);
  const getCreditCardList = () => {
    axios.get("http://localhost:8080/allcards").then((response) => {
      let creditCardList = response.data;
      setCreditCards(creditCardList);
    });
  };
  useEffect(() => {
    getCreditCardList();
  }, []);

  const updateList = (newCreditCard) => {
    newCreditCard.id = creditCards.length + 1;
    setCreditCards([...creditCards, newCreditCard]);
    console.log(creditCards);
  };

  return (
    <div className="row">
      <AddCreditCard className="col-6" updateList={updateList} />
      <div className="col-6">
        {creditCards.map((creditCard) => {
          return (
            <div key={creditCard.id}>
              <ViewCreditCard card={creditCard} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ViewCreditCard = (props) => {
  //Event Handler
  const onClickHandler = (name) => {
    console.log(name);

    //API
    alert("Purchased successfully");
  };
  //Object destructuring
  const { creditCardName, description, cost } = props.card;

  return (
    <div>
      <h2>{creditCardName}</h2>
      <p>
        <i>{description}</i>
      </p>
      <span>{cost}</span>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          onClickHandler(creditCardName);
        }}
      >
        Buy
      </button>
      <button
        type="button"
        className="btn btn-info"
        onClick={() => {
          console.log(creditCardName);
        }}
      >
        Subscribe
      </button>
      <hr></hr>
    </div>
  );
};
