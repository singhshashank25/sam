import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const feedback = () =>{
    return(
        <Container style={{margin:50}}>
        <h2> Do write to Us!</h2>
  <Form>
    <Form.Text>
        Your feedback helps us improve our services. Do let us know your inputs regarding the interface or rendering of services.
    </Form.Text>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>FeedBack</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        </Form>
        <Button variant="outline-dark" type="submit">
        Submit
       </Button>
        </Container>
      
    );
}

export default feedback