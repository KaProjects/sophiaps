import './default.css';
import igLogo from './icon/ig.png';
import vopLogo from './icon/vop.png';
import phoneLogo from './icon/phone.png';
import mailLogo from './icon/mail.png';
import React from "react";
import Typography from '@material-ui/core/Typography';
import {Link, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Footer from "./Footer";

const Home = () => {
    return (
        <Container className="home">
            <List style={{position: "absolute", bottom: 30}}>
                <ListItem className="listitem">
                    <ListItemIcon>
                        <img src={igLogo} className="icon"/>
                    </ListItemIcon>
                    <ListItemText>
                        <Link href="https://www.instagram.com/sophia.personalshopper/" target="_blank" color="inherit">
                            <Typography className="contact" style={{paddingBottom: "3px", fontSize: "0.8em"}}>
                                sophia.personalshopper
                            </Typography>
                        </Link>
                    </ListItemText>

                </ListItem>
                <ListItem className="listitem">
                    <ListItemIcon>
                        <img src={phoneLogo} className="icon"/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography className="contact" style={{paddingBottom: "0px", fontSize: "0.8em"}}>
                            +421 904 443 697
                        </Typography>
                    </ListItemText>
                </ListItem>
                <ListItem className="listitem">
                    <ListItemIcon>
                        <img src={mailLogo} className="icon"/>
                    </ListItemIcon>
                    <ListItemText>
                        <Link href="mailto:personalshopper.sophia@gmail.com" color="inherit">
                            <Typography className="contact" style={{paddingBottom: "3px", fontSize: "0.8em"}}>
                                personalshopper.sophia@gmail.com
                            </Typography>
                        </Link>
                    </ListItemText>
                    {/*</a>*/}
                </ListItem>
                <ListItem className="listitem">
                    <ListItemIcon>
                        <img src={vopLogo} className="icon"/>
                    </ListItemIcon>
                    <ListItemText>
                        <Link href="/vop" color="inherit">
                            <Typography className="contact" style={{paddingBottom: "0px", fontSize: "0.8em"}}>
                                Všeobecné obchodné podmienky
                            </Typography>
                        </Link>
                    </ListItemText>
                </ListItem>
            </List>
            <Footer/>
        </Container>
    );
};

export default Home;
