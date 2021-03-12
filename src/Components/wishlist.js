import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Wishlist extends Component {
    render(){
        return(
            <div className="wishing-grid">
                 <h1>THis is your wishlist!</h1> 
                <Grid>
                    <Cell col={12}>
                        <p>Box for Artists</p>
                    </Cell>
                    
                </Grid>
                <Grid>
                    <Cell col={12}>
                        <p> Box for songs</p>
                    </Cell>
                </Grid> 
            </div>
        )
    }
}

export default Wishlist;