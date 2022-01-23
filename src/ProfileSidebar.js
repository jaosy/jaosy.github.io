import React from 'react';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';

export default function ProfileSidebar() {
    return (
        <div className="profileSidebar">
            <div className="profileSidebarContent">
                <Typography variant="body" fontWeight="bold" component="div">
                    Jacqueline Ong
                </Typography>

                <nav className="navigation-container" style={{ paddingTop: "1em" }}>
                    <Link style={{ display: "block" }} to="/">Home</Link>
                    <Link style={{ display: "block" }} to="/fun">Fun</Link>

                </nav>

            </div>
        </div >
    );
}