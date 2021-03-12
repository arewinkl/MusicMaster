import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'

class Songs extends Component{
    render(){
        return(
            <div>
                <Grid className="landing-grid">
                    <Cell col={6}>
                        <div>
                            <h1>THis is a test</h1>
                            <p>
                                    thank you
                            </p>
                        </div>
                    </Cell>
                    <Cell col={6}>
                        <div>
                            <h1>This is another one</h1>
                            <p>
                                just need some information to place in this tag to see if it really registers.
                            </p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Songs;