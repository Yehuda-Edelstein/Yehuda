import React, { useState } from "react";
import "./Dumbnail.scss";
import Terminal from "../terminal/Terminal";

function Dumbnail(props) {
  const [closed, setClosed] = useState(true);

  return (
    <div className="markdown">
      <h1>Dumbnail: The Ultimate Memeshot Maker</h1>
      <hr></hr>
      <p>
        I created the site to be a one-stop-shop for creating <em>memeshots</em>{" "}
        -- a meme in the version of a screenshot.
      </p>
      <p>
        As of now it has YouTube thumbnails, tweets, Instagram posts, iMessage,
        and ChatGPT conversations. My goal is for Dumbnail to be an open-source
        social media with feeds, user auth, etc, all dedicated to the art of the
        meme: <br></br>
        <br></br>
        <a target="_blank" rel="noreferrer" href="https://dumbnail.com">
          https://dumbnail.com
        </a>
      </p>
      <h2>For Starters</h2>
      <hr></hr>
      <p>
        What makes Dumbnail unique is that it has these interesting type of
        memes all in one place instead of scattered about the internet --
      </p>
      <p>
        -- plus, I think I was the first (not sure if it has since been copied)
        to create fake thumbnails or ChatGPT convos; for ChatGPT I had it up
        within the week of its release.
      </p>
      <h2>Thoughts</h2>
      <hr></hr>
      <p>
        People post memes to every social media, but most of them (if not all)
        aren&#39;t created there. Why not cut out the middle man? Make Dumbnail
        the hub for memes. <em>Memehub</em>...?
      </p>
      <h2>Why Open Source?</h2>
      <hr></hr>
      <p>
        The thing about the meme business, especially this kind, is that the
        actual sites change constantly; updates, design changes, profile
        changes, etc.
      </p>
      <p>
        Dumbnail would need to stay up to date so that the memes would be as
        accurate as possible (a cool feature I wanted was to keep different
        versions of apps [old twitter v. new twitter]).
      </p>
      <p>
        These potentially continuous changes and updates will be more than I can
        handle, I assume.
      </p>
      <h2>Contributing</h2>
      <hr></hr>
      <p>
        Anybody who wants to contribute or check out the project:
        <br></br>
        <br></br>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Yehuda-Edelstein/dumbnail"
        >
          https://github.com/Yehuda-Edelstein/dumbnail
        </a>
      </p>
      <Terminal
        cwd={"/yehuda/dumbnail"}
        closed={closed}
        setClosed={setClosed}
        ls={[]}
      />
    </div>
  );
}

export default Dumbnail;
