import React, { Fragment } from 'react';
import { Navbar, Nav, NavDropdown, Button, Badge, Tooltip, OverlayTrigger} from 'react-bootstrap';

const Navigation = () => {
    return (
        <Fragment>
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
                <Button variant="primary">
                    Login <Badge variant="light">2</Badge>
                    <span className="sr-only">unread messages</span>
                </Button>
                <Nav></Nav>
                <div>
                    {['bottom'].map((placement) => (
                        <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                                <Tooltip id={`tooltip-${placement}`}>
                                    Successfully <strong>{placement}</strong>.
                                 </Tooltip>
                            }
                        >
                            <Button variant="secondary">Sign Up {placement}</Button>
                        </OverlayTrigger>
                    ))}
                </div>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Snehitha</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>

        </Fragment>
    )
}
export default Navigation;