import React from 'react';
import { Tweet } from 'react-twitter-widgets'
import { ReactComponent as IgFollowBadge } from '../assets/igFollowBadge.svg'
import { ReactComponent as YtFollowBadge } from '../assets/ytFollowBadge.svg'
import { ReactComponent as TwitterFollowBadge } from '../assets/twitterFollowBadge.svg'

export default function Art() {
    return (
        <div>
            <h2>Art</h2>
            <p>I am self-taught digital artist specializing in anime/manga-style illustration since 2013.</p>

            <p>I create tutorials and speedpaints to share my process and tips with others.</p>

            <p>From 2017-2021, I served as a community moderator on <a href="https://aminoapps.com/c/anime-art/page/user/hi7ug4h5hjgczo6g2gvbysns5i/d3W1_bK2fzfLamRQoKamejmYeKb4mn3QbPlfP">Anime Art Amino</a>, an art-sharing social media platform.</p>

            <p>Fun fact; I studied traditional art and design following the Cambridge IGCSE syllabus code 0400 and earned a final grade of A*, but anime/manga style is more charming and fun to draw!</p>

            <p style={{ fontWeight: 'bold' }}>Tools:</p>
            <ul>
                <li>ibisPaint X</li>
                <li>Clip Studio Paint</li>
                <li>Photoshop CS6</li>
                <li>Paint Tool SAI</li>
                <li>Procreate</li>
                <li>iPad 8th Gen + Apple Pencil</li>
            </ul>


            <TwitterFollowBadge />
            <IgFollowBadge />
            <YtFollowBadge />
            <Tweet tweetId="1482884018110615552" />

        </div>
    );

}