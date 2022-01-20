import './App.css';
import { Timeline, Tweet, Follow } from 'react-twitter-widgets'
import YouTube from 'react-youtube'

function App() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Page under construction :)</h1>
        <h2>Art</h2>
        <p>I am self-taught digital artist specializing in anime/manga-style illustration since 2013.</p>

        <p>I create tutorials and speedpaints to share my process and tips with others.</p>

        <p>From 2017-2021, I served as a community moderator on Anime Art Amino, an art-sharing social media platform.</p>

        <p>Fun fact; I studied traditional art and design following the Cambridge IGCSE syllabus code 0400 and earned a final grade of A*, but anime/manga style is more charming and fun to draw!</p>

        <p>Tools:</p>
        <ul>
          <li>ibisPaint X</li>
          <li>Clip Studio Paint</li>
          <li>Photoshop CS6</li>
          <li>Paint Tool SAI</li>
          <li>Procreate</li>
          <li>iPad 8th Gen + Apple Pencil</li>
        </ul>
        <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/koualoe?style=social" />

        <img alt="YouTube Follow" src="https://img.shields.io/youtube/channel/views/UCOSW69N8mHd13JVRoZmZRxQ?style=social" />

        <Tweet tweetId="1482884018110615552" />

        <h2>X-ertion</h2>
        <p>X-ertion is a student-led Asian hip-hop dance crew founded at Macalester College. We hold open dances every weekend for students of all skill and experience levels, and have public showcases once per academic semester.</p>

        <p>I've been an active member since joining in 2018, and recently took over as co-chair in 2021. As co-chair, I organize our activities and logistics, recruit new members and also arrange dance routines to teach. I am committed to promoting X-ertion as one of the main cultural and performance-based student organizations on campus.</p>
        <YouTube videoId="AdKJGh1hEeY" opts={opts} onReady={(e) => { e.target.pauseVideo() }} />
      </header>
    </div>
  );
}

export default App;
