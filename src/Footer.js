import Typography from "@material-ui/core/Typography";
import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <Typography className="contact" style={{width: "170px", margin: "0 auto", fontSize: "0.7em"}}>
                Personal Shopping s.r.o. ©{new Date().getFullYear()}
            </Typography>
        </div>
    );
};

export default Footer;