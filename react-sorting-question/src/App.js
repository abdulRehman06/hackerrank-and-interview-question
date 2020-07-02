import React, {Component} from 'react';
import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';


//AR_KK
import {BrowserRouter, Route, Switch} from 'react-router-dom'
//AR_KK

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            sortBy: ""
        }

    }




    handleCustomSort = (e) => {
        // console.log('handleClickAge' , e.target.name)
        // console.log('handleClickAge state' , this.state);
        this.setState({
            sortBy : e.target.name // age, name, points, rank
        })

    }

    handleClickName() {
    }

    handleClickPoints() {
    }

    handleClickRank() {
    }

    render() {
        return (
            <BrowserRouter>
                <div className="text-center buttons">
                    <header className="text-center">
                        <h1>Leaderboard</h1>
                    </header>
                    <div className="text-center buttons">
                        <Age handleCustomSort={this.handleCustomSort }></Age>
                        <Name handleCustomSort={this.handleCustomSort }></Name>
                        <Points handleCustomSort={this.handleCustomSort }></Points>
                        <Rank handleCustomSort={this.handleCustomSort }></Rank>
                        {/*<Table></Table>*/}
                    </div>
                    <div className="custom-route">

                        {/*  passing props render by <Route/> TAG*/}
                        <Route exact path='/age' render={(props) => <Table {...props} sortBy={this.state.sortBy}/>}/>
                        <Route exact path='/name' render ={(props) => <Table  {...props} sortBy={this.state.sortBy}/> }/>
                        <Route exact path='/points' render ={(props) => <Table  {...props} sortBy={this.state.sortBy}/> }/>
                        <Route exact path='/rank' render ={(props) => <Table  {...props} sortBy={this.state.sortBy}/> }/>
                        {/*<Route exact path='/rank' component = {Table}/>*/}
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

