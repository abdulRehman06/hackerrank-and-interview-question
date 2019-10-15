import React from 'react';
import {NavLink, Link} from 'react-router-dom'

const Age = ({handleCustomSort}) => (
    <Link to='/age'>

        <button className="btn btn-primary age" name="age" onClick={handleCustomSort}>Age</button>
    </Link>
);

export default Age;
