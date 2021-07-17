import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Row, Col } from "react-bootstrap";

const apiUrl = "https://api.github.com/users";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  //To get the users using the axios library
  const getUsersList = () => {
    axios.get(apiUrl).then((response) => {
      const userList = response.data;
      setUsers(userList);
      console.log(response.data);
    });
  };

  //Another React Hook
  //Immediately after a component get rendered whatever is inside useEffect will get executed
  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <Row>
      {users.map((user) => {
        return (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={user.avatar_url} />
              <Card.Body>
                <Card.Title>{user.login}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <a href={user.html_url} target="_blank">
                  <Button variant="primary">Go to Porfile</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};
