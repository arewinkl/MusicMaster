import React, {Component} from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import { Link } from 'react-router-dom';
import Main from "./Components/main"
import './App.css'

class App extends Component {
  render(){
  return (
    <div className="App">
     <div style={{height: '300px', position: 'relative'}}>
    <Layout>
        <Header className="header-color" transparent title="MusicMaster" style={{color: 'white', height: '100px'}} scroll>
            <Navigation>
                <Link to="/mysongs" >My Song</Link>
                <Link to="/myalbums">My Albums</Link>
                <Link to="/wishlist">Wishlist</Link>
                <Link to="/topcharts">Top Charts</Link>
            </Navigation>
        </Header>
        <Drawer title="MusicMaster">
            <Navigation>
                <Link to="/mysongs">My Songs</Link>
                <Link to="/myalbums">My Albums</Link>
                <Link to="/wishlist">Wishlist</Link>
                <Link to="/topcharts">Top Charts</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="Page-content"/>
          <Main />
        </Content>
    </Layout>
</div>
    </div>
  );
}
}

export default App;
