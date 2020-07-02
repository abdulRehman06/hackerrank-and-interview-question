import React from 'react';
import {NavLink} from 'react-router-dom'

const Points = ({handleCustomSort}) => (
    <NavLink  exact to='/points'>

        <button className="btn btn-primary points" name="points" onClick={handleCustomSort}>Points</button>
    </NavLink>
);

export default Points;
