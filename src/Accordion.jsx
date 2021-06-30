import React, { Fragment } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const Accordion1 = () => {
    return (
        <Fragment>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Click me!
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! Good Morning!</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Click me!
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>This is Snehitha</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Fragment>
    )
}
export default Accordion1;