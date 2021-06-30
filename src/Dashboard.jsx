import React, { Component } from 'react';
import './Fun.css';
import { Alert, Navbar, Nav, NavDropdown, Button, Carousel, Card, Container, Row, Col } from 'react-bootstrap';

class Demo1 extends Component {
    render() {
        return (
            <div>
                <Alert variant="success">
                    Welcome to Online Shopping
                </Alert>
                <Navbar bg="dark" variant="dark" sticky="top">
                    <Navbar.Brand>Welcome</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About Us</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav></Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Snehitha</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSNXP6BymW1ctKophUn5gEm5WZ6zcz0cNvw&usqp=CAU/800x400?text=Second slide&bg=282c34" width="100" height="400"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTleZNafmyATHL688sfIfkGm-zV_TwhGi2qgQ&usqp=CAU/800x400?text=Second slide&bg=282c34" width="100" height="400"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgyzmZAtBElGlhIsN0MQRzarYZTQEJe4zpg&usqp=CAU/800x400?text=Third slide&bg=20232a" width="100" height="400"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Container>
                    <Row>
                        <Col xs>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfferFkz23iOdiCBMNCUHzeFUB4XvLzbyKb_uuKJaeChZAUZ3aYhBFZfuRcTE&usqp=CAc/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        <b>TV Units - Norwica Tv<br />Unit in Wenge Finish by<br />Forzza-Pepperfry<br />$15,899<br />Pepperfry</b>
                                    </Card.Text>
                                    <Button variant="primary">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={{ order: 12 }}><Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEfr7jVp3o7v8YLX7JgzTy00Ko2hXAzkpgDULpOYaDRwmRQ9Ut5KbW-v2atHE&usqp=CAc/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    <b>Best Furniture L shape <br />Fabric Corner Furniture 12 <br />Seaters Selections Living Room<br />Sofas Set<br />$56,560<br />Amazon.in</b>
                                </Card.Text>
                                <Button variant="primary">Buy Now</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={{ order: 1 }}><Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNejKm2NmyNXJvC7nYJohlXBhdgFx8eIwY-V6FsA6IVv2WhB6-eZNSCpPGQ&usqp=CAc/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    <b>Rectangular Coffee Tables<br />Kiosk Coffee Table In Frostry<br />By a Globia Creations<br />$3,777<br />Pepperfry</b>
                                </Card.Text>
                                <Button variant="primary">Buy Now</Button>
                            </Card.Body>
                        </Card></Col>
                    </Row>
                </Container>

            </div>



        );
    }
}
export default Demo1;