import React, {Component} from 'react';
import { Grid, Cell, Textfield } from 'react-mdl';
import vinyl from '../assets/images/vinylRecord.png'





class Landing extends Component {
    render(){
         return(
             <div className="landing-grid" style={{width: '100%', margin: 'auto'}}>
                 <Grid >
                     <Cell col={12} >

                        <div className="landing-grid">
                            <h1 style={{fontSize: '60px',fontFamily:'copperplate'}}>Manage Music Your Way! </h1>
                        
                        <p style={{fontFamily:'copperplate'}}>
                            This is the best way to manage your music, whether you want to look over your current library, or add a few new albums to your up coming wish list. If you are a record collector there is nothing worse than buying a new album to only find out that you already own it. This is exactly why we created the MusicMaster app, to help those of you looking to manage and build your music collection.
                        </p>

                        <h4 style={{textDecoration:'underline', fontFamily:'copperplate', fontSize:'28px'}}>Reference your other libraries & search for new music here!</h4>
                         {/* Textfield with floating label */}
                         <Textfield
                            onChange={() => {}}
                            label="Artist Name..."
                            floatingLabel
                            style={{width: '300px' }}
                        />
                         {/* Textfield with floating label */}
                         <Textfield
                            onChange={() => {}}
                            label="Album Name..."
                            floatingLabel
                            style={{width: '300px' }}
                        />

                        {/* Numeric Textfield with floating label */}
                        <Textfield
                            onChange={() => {}}
                            pattern="-?[0-9]*(\.[0-9]+)?"
                            error="Input is not a number!"
                            label="Year..."
                            floatingLabel
                        />
                        
                         <div className="social-links">
                                {/* AppleMusic*/}
                                <a href="https://music.apple.com/us/listen-now?itscg=20200&itsct=rv_eve&ls=1&mttnagencyid=2433&mttncc=US&mttnpid=305109&mttnsiteid=125115&mttnsubad=mus-116513434015&mttnsubkw=ag-116513434015-ad-490661736218" rel="noreferrer" target="_blank">
                                    <i className="fa fa-apple" aria-hidden="true" />
                                    <h6>Apple Music</h6>
                                </a>
                                 {/* Spotify*/}
                                 <a href="https://accounts.spotify.com/en/login/" rel="noreferrer" target="_blank">
                                    <i className="fa fa-spotify" aria-hidden="true" />
                                    <h6>Spotify</h6>
                                </a>
                                 {/* SoundCloud*/}
                                 <a href="https://soundcloud.com/signin" rel="noreferrer" target="_blank">
                                    <i className="fa fa-soundcloud" aria-hidden="true" />
                                    <h6>soundCloud</h6>
                                </a>
                                 {/* Amazon music */}
                                 <a href="https://music.amazon.com/lp/freemusic?tag=googhydr-20&hvadid=491020234963&hvpos=&hvexid=&hvnetw=g&hvrand=294686376768039739&hvpone=&hvptwo=&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9028876&hvtargid=kwd-297919029111&ref=pd_sl_8zzyhl96ip_e" rel="noreferrer" target="_blank">
                                    <i className="fa fa-amazon" aria-hidden="true" />
                                    <h6>Amazon Music</h6>
                                </a>
                                {/* youtube music*/}
                                <a href="https://www.youtube.com/musicpremium" rel="noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                    <h6>YouTube Music</h6>
                                </a>
                                 {/* Google Play*/}
                                 <a href="https://play.google.com/store/apps/top?&utm_source=na_Med&utm_medium=hasem&utm_content=Nov0520&utm_campaign=Evergreen&pcampaignid=MKT-EDR-na-us-1000189-Med-hasem-py-Evergreen-Nov0520-Text_Search_BKWS-id_100524_%7cEXA%7cONSEM_kwid_43700045371544913&gclid=CjwKCAiAl4WABhAJEiwATUnEFwq6pJ_yIJ9a-a3L_O2wFUAbW5AyU-n3yxQFegUHR5v6qYC0wCfbQhoCW-sQAvD_BwE&gclsrc=aw.ds" rel="noreferrer" target="_blank">
                                    <i className="fa fa-google" aria-hidden="true" />
                                    <h6>Google Play</h6>
                                </a>
                            </div>

                      
                       
                        </div>
                       
                     </Cell>
                     
                 </Grid>
                 
                 <div class="footer">
             <img src={vinyl} alt="music" className="image-one"/>
              </div>
             </div>
             
         );
    }
}

export default Landing;