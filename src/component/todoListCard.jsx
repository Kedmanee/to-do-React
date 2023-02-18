import { useState } from 'react'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import '../custom-styles.scss';

function Todo({list}) {
    const addStyle = {
        float: 'right'
    }
    // const list = { now: ["Clean Room", "Sw Homework"], later: ["HID Homework"] }
    return (
        <Card style={{ width: '25rem' }}>
            <Card.Header>To Do List <Button variant="custom-primary" style={addStyle} >Add</Button></Card.Header>
            <Card.Body>
                <Card.Title className='todo-title'>Do Now</Card.Title>
                <ListGroup variant="flush">
                    {list.now.map((list) => (
                        <ListGroup.Item key={list}><Row>
                            <Col xs={1}>
                                <Form.Check type="checkbox" />
                            </Col>
                            <Col>
                                {list}
                            </Col>
                        </Row></ListGroup.Item>
                    ))}

                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default Todo
