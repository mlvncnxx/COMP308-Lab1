import React from 'react';
import {useParams} from 'react-router-dom';

function ThankYou() {
    const {studentEmail, studentComment} = useParams();

    return(
        <React.Fragment>
            <div>
                <h1>Thank You {studentEmail}</h1>
                <br/>
                <h3> We appreciate your comments: {studentComment}</h3>
            </div>
        </React.Fragment>
    );
}

export default ThankYou;