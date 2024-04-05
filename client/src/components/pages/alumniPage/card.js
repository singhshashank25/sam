import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { ButtonGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function card(props){
    console.log(props)
    return(
        <Card style={styles.card}> 
        <Card.Body>
            <Card.Title> {props.fname + " " + props.lname}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
                {props.programme+" "+props.department+" "+props.batch}</Card.Subtitle>
                <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </Card.Text>
        <ButtonGroup>
        <NavLink to='/id'><Button variant="outline-dark">
            View More
        </Button></NavLink>
        <Button variant="outline-dark" href={props.linkedIn}>
            LinkedIn
        </Button>
        <Button variant="outline-dark" href={`mailto:${props.email}`}>
            Email
        </Button>
        {props.role && (
            <>
            {' '}
        <Button variant="outline-dark">
        Instagram
        </Button>{' '}
        <Button variant="outline-dark">
        Twitter
        </Button>
            </> 
)}
        </ButtonGroup>
        </Card.Body>
        </Card>
    );
}

const styles = 
    {
        card:{
        width:'100',        
        margin:'1rem',
        },
        title:{
            backgroundColor:'blue',
        },
        body:{
            backgroundColor:"whitesmoke",
        },
    }


export default card;