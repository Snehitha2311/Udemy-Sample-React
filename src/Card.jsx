import React, { Fragment } from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';

const Card1 = () => {
    return (
        <Fragment>
            <Container>
                    <Row>
                        <Col xs>
                            <Card style={{ width: '18rem'}}>
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

        </Fragment>
    )
}
export default Card1;