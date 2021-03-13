import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage'
import MyAlbums from './myalbums';
import MySongs from './mysongs';
import TopCharts from './topcharts';
import Wishlist from './wishlist';

const Main = () => (
    <Switch>
        <Route exact path="/MusicMaster" component={LandingPage}/>
        <Route path="/wishlist" component={Wishlist}/>
        <Route path="/myalbums" component={MyAlbums}/>
        <Route path="/mysongs" component={MySongs}/>
        <Route path="/topcharts" component={TopCharts}/>
    </Switch>
)

export default Main;