import React from 'react';
import auth from '../hoc/auth';

const OpList = props => (
    <div>
        <h1 className="center">FBI Operative List</h1>
        <ol>
            <li>Duy smallz</li>
            <li>Sarah</li>
            <li>Steve Smakiy</li>
            <li>Sandra bullridge</li>
            <li>William suzki</li>
            <li>Hanhh kim</li>
            <li>Brian bourne</li>
            <li>Ryan Soto</li>
        </ol>
    </div>
);

export default auth(OpList);
