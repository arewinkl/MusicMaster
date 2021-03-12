import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Albums extends Component {
    render (){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <div className="landing-grid">

                
                <Cell col={12}>

                   <div>
                       <h1>New Albums</h1>
                   </div>
                   <div>
                       <h1>Favorite Albums</h1>
                   </div>
                </Cell>
                <Cell col={12}>
                   <div>
                       <h1>WOW</h1>
                       <h1>POW</h1>
                       <h1>Smack</h1>
                   </div>
                   <div>
                       <p>hello this is such a lame test</p>
                   </div>
                </Cell>
               <Cell col={3}>
                    <div>
                        <p>hello there </p>
                        <h3>Rap</h3>
                        <h2>Cool Music</h2>
                        <h3>coolest music</h3>
                    </div>

               </Cell>
               
               
               
               
             
               
                
            </div>
            </Grid>
            

        </div>
    )
        
    }
}

export default Albums;