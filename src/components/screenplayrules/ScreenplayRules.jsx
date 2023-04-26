import React, { useState } from "react";
import Terminal from "../terminal/Terminal";

function ScreenplayRules(props) {
  const [closed, setClosed] = useState(true);

  return (
    <div className="markdown">
      <h1>Screenplay Rules: How To Write A Screenplay</h1>
      <hr></hr>
      <p>
        I created this site as a way for aspiring screenwriters to learn the
        basics and for amateur screenwriters to hone their craft a bit more:
      </p>
      <a target="_blank" rel="noreferrer" href="https://screenplayrules.com">
        https://screenplayrules.com
      </a>
      <h2>Why Screenwriting?</h2>
      <hr></hr>
      <p>
        What's unique about screenwriting is how rigid the formatting is; for
        example, if you don't write your script in some version of Courrier
        font, it likely will end up in the trash.
      </p>
      <p>
        It may seem ridiculous, but that's just the way it is. Even if your
        story is good, if you don't follow the rules...?
      </p>
      <h2>Rules</h2>
      <hr></hr>
      <p>
        There are many rules that go into correctly writing a screenplay, some
        of which are done for you by various screenwriting softwares, others are
        up for debate; all are important to consider.
      </p>
      <p>That's why I created the screentour --</p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://screenplayrules.com/screentour/intro"
      >
        {" "}
        the screentour
      </a>
      <p>
        -- a way for amatuar writers to learn the process of creating a
        screenplay in an engaging and fun manor.
      </p>
      <h2>Contributing</h2>
      <p>
        The site is hosted on GH pages and is open to criticism or suggestions,
        no matter the writer's experience level. As for reporting bugs or
        issues, pull requests are always welcome:
      </p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Yehuda-Edelstein/screenplayrules"
      >
        https://github.com/Yehuda-Edelstein/screenplayrules
      </a>
      <Terminal
        cwd={"/yehuda/screenplayrules"}
        closed={closed}
        setClosed={setClosed}
        ls={[]}
      />
    </div>
  );
}

export default ScreenplayRules;
