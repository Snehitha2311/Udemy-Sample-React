import React, { Fragment } from 'react';
import { Breadcrumb } from 'react-bootstrap';

const Breadcrumb1 = () => {
    return (
        <Fragment>
            <center>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://www.google.com">
                        Library
                </Breadcrumb.Item>
                    <Breadcrumb.Item active>Feedback</Breadcrumb.Item>
                </Breadcrumb>
            </center>
            
        </Fragment>
    )
}
export default Breadcrumb1;