import React, { Component } from 'react';
import { usersJSON } from '../data';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: '',
            users: usersJSON
        }
    }


    compareByName(a, b) {

    }




    render() {
        let { users } = this.state;
        let { sortBy } = this.props;


        sortBy === 'name' ?
        usersJSON.sort((a, b) => {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          })
        : 
        usersJSON.sort((a, b) => a[sortBy] - b[sortBy])





        return (<div>
            <table className="table table-striped">
                <thead>
                    <tr key="head">
                        <th>Age</th>
                        <th>Name</th>
                        <th>Points</th>
                        <th>Rank</th>
                    </tr>
                </thead>
                <tbody>

                    {/* Rendering data */}
                    {
                        usersJSON
                        &&
                     
                        usersJSON.map((value, index) =>
                            <tr key={index}>
                                <th>{value.age}</th>
                                <th>{value.name}</th>
                                <th>{value.points}</th>
                                <th>{value.rank}</th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>)
    }
}
