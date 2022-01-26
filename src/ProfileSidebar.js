import React from 'react';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

export default function ProfileSidebar() {
    return (
        <div className="profileSidebar">
            <div className="profileSidebarContent">

                <Avatar alt="Jacqueline Ong" src={require("./static/avatar.jpg")} variant="square" sx={{ width: "70%", height: "70%" }} />


                <Typography variant="body" fontWeight="bold" component="div"
                    style={{ paddingTop: "1em" }}>
                    Jacqueline Ong
                </Typography>

                <div className="iconsBar" style={{ paddingTop: "1em", paddingBottom: "1em", width: 50 }}>
                    <Button style={{ width: 1 }} ><img style={{ height: 20 }} src={require("./static/mail.png")}></img>
                    </Button>

                    <Button ><img style={{ height: 20 }} src={require("./static/cv.png")}></img>
                    </Button>

                    <Button ><img style={{ height: 20 }} src={require("./static/github.png")}></img>
                    </Button>
                </div>
                <nav className="navigation-container" >
                    <Link style={{ display: "block" }} to="/">Home</Link>
                    <Link style={{ display: "block" }} to="/fun">Fun</Link>
                </nav>

            </div>
        </div >
    );
}