import { useState } from 'react'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import '../custom-styles.scss';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Tag from './tag';

function Todo({ list }) {
    const [show, setShow] = useState(false);
    const [priority, setPriority] = useState('later');
    const [tag, setTag] = useState('Home');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [todoname, setTodoname] = useState('');
    const addStyle = {
        float: 'right'
    }
    const saveNewList = () => {
        console.log(todoname, priority)
        list[priority].push({ name: todoname, tag: tag })
        setTodoname('')
        setShow(false)
    }
    // const list = { now: ["Clean Room", "Sw Homework"], later: ["HID Homework"] }
    return (
        <>
            <Card style={{ width: '25rem' }}>
                <Card.Header>To Do List <Button variant="custom-primary" style={addStyle} onClick={handleShow}>Add</Button></Card.Header>
                <Card.Body>
                    <Card.Title className='todo-title'>Do Now</Card.Title>
                    <ListGroup variant="flush">
                        {list.now.map((list) => (
                            <ListGroup.Item key={list.name}><Row>
                                <Col xs={1}>
                                    <Form.Check type="checkbox" />
                                </Col>
                                <Col>
                                    {list.name}
                                </Col>
                                <Col>
                                    <Tag tagname={list.tag}></Tag>
                                </Col>
                            </Row></ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Card.Title className='todo-title'>Do Later</Card.Title>
                    <ListGroup variant="flush">
                        {list.later.map((list) => (
                            <ListGroup.Item key={list.name}><Row>
                                <Col xs={1}>
                                    <Form.Check type="checkbox" />
                                </Col>
                                <Col>
                                    {list.name}
                                </Col>
                                <Col>
                                    <Tag tagname={list.tag}></Tag>
                                </Col>
                            </Row></ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='todo-title'>Add new list</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control type="email" placeholder="" value={todoname} onChange={e => setTodoname(e.target.value)} />
                    <p style={{ marginTop: '1em' }}>Select Priority</p>
                    <DropdownButton id="dropdown-basic-button" title={priority} variant="custom-primary">
                        <Dropdown.Item onClick={() => setPriority('now')}>Now</Dropdown.Item>
                        <Dropdown.Item onClick={() => setPriority('later')}>Later</Dropdown.Item>
                    </DropdownButton>
                    <p style={{ marginTop: '1em' }}>Select Tag</p>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1} variant="custom-primary">
                        <ToggleButton id="tbg-radio-1" value={1} variant="tag-color" onClick={() => setTag('Home')}>
                           Home
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-2" value={2} variant="tag-color" onClick={() => setTag('Uni')}>
                            Uni
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-3" value={3} variant="tag-color" onClick={() => setTag('Other')}>
                            Other
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="custom-primary" onClick={saveNewList}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Todo
