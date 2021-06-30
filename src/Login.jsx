import React, { Component, Fragment } from 'react';
import './Fun.css';
import { Form, Button, Card, Breadcrumb , Tab, Tabs, Navbar, Col } from 'react-bootstrap';

class Demo extends Component {
    render() {
        return (
            <Fragment>
                {/* <h2>Login Page</h2> */}
                {/* <div className='Demo'> */}
       
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      SNEHITHA
    </Navbar.Brand>
  </Navbar>
  <br/><br/>

                <center>
                    <Card style={{ width: '22rem', height: '30rem'}}>
                        <Card.Body>
                            <Card.Title>Log In</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Please check that you are visiting the correct URL</Card.Subtitle>
                            <Card.Text>
                                <Form>
                                <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                                    <Tab eventKey="home" title="Email">
                                </Tab>
                                <Tab eventKey="profile" title="Mobile">
                                    <form>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form style= {{width: '10rem' }}>
    <Form.Label>Mobile</Form.Label>
      <Form.Control as="select" defaultValue="+86">
        <option>China </option>
        <option>Colombia</option>
        <option>Costa Rica</option>
      </Form.Control>
      </Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label></Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
    </Form.Group>
                                    </form>
                                 </Tab>
                                 </Tabs>
                                 <br/>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email" />
                                        {/* <Form.Text className="text-muted">
                                        </Form.Text> */}
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    {/* <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group> */}
                                    <Button variant="warning" size="lg" block >
                                        Log In
                                    </Button>
                                    <br/>
                                    <Breadcrumb>
                                       <Breadcrumb.Item href="#">Forget Password?</Breadcrumb.Item>
                                    </Breadcrumb>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </center>
            </Fragment>
        );
    }

}
export default Demo;