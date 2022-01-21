import React from 'react';
import YouTube from 'react-youtube';

export default function Xertion() {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        <div>
            <h2>X-ertion</h2>
            <p>X-ertion is a student-led Asian hip-hop dance crew founded at Macalester College. We hold open dances every weekend for students of all skill and experience levels, and have public showcases once per academic semester.</p>

            <p>I've been an active member since joining in 2018, and recently took over as co-chair in 2021. As co-chair, I organize our activities and logistics, recruit new members and also arrange dance routines to teach. I am committed to promoting X-ertion as one of the main cultural and performance-based student organizations on campus.</p>
            <YouTube videoId="AdKJGh1hEeY" opts={opts} />
        </div>
    );
}