import React from 'react';
import {NavLink} from 'react-router-dom'

const Rank = ({ handleCustomSort}) => (
    <NavLink exact to = '/rank'>

  <button className="btn btn-primary rank" name="rank" onClick={handleCustomSort}>Rank</button>
    </NavLink>
);

export default Rank;
