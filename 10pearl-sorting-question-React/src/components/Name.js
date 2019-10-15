import React from 'react';
import {NavLink} from "react-router-dom";

const Name = ({ handleCustomSort }) => (
    <NavLink exact to='/name'>

        <button className="btn btn-primary name" name="name" onClick={handleCustomSort}>Name</button>
    </NavLink>
);

export default Name;
