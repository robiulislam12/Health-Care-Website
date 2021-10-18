import React from "react";
import { Button, Card } from "react-bootstrap";

export default function Blog({ img, title}) {
  return (
    <Card style={{ width: "18rem" }} >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      <Button variant="success">Read more</Button>
      </Card.Body>
    </Card>
  );
}
