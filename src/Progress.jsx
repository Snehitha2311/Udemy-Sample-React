import React, { Fragment } from 'react';
import {ProgressBar} from 'react-bootstrap';

const Progress1 = () => {
    return (
        <Fragment>
            <div>
               <ProgressBar now={60} />
                {/* const now = 60;

                const progressInstance = <ProgressBar now={now} label={`${now}%`} />;

                render(progressInstance); */}
            </div>
        </Fragment>
    )
}
export default Progress1;