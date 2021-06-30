import React, { Fragment } from 'react';
import Fun2 from './Fun2';

const Fun1 = (props) => {
    return (
        <div>
            <Fragment>
                <h4>Name: <i>{props.name}</i></h4>
                <h4>Sap ID: {props.id}</h4>
                <p>{props.children}</p>
            </Fragment>
            <Fun2 />
        </div>
    );
}


export default Fun1;