import React, { useState } from "react";
import Terminal from "../components/terminal/Terminal";

import "./pages.scss";

function Flrp(props) {
  const [closed, setClosed] = useState(true);
  return (
    <div className="markdown">
      <h1>flrp</h1>
      <span className="subHeader">fill 'er up</span>

      <hr></hr>
      <p>
        Blue is where you've been. Green is where you are. Pink is where you're
        going.
      </p>
      <a target="_blank" rel="noreferrer" href="https://flrp.co">
        https://flrp.co
      </a>
      <h2>Origin</h2>
      <hr></hr>
      <p>
        My 1st grade teacher taught us this game on pen and paper; we all tried,
        but no one could beat the 10x10 board. To be honest, I didn't even know
        if it was actually possible until my friend beat it a few weeks after I
        deployed it.
      </p>

      <Terminal
        cwd={"/yehuda/flrp"}
        closed={closed}
        setClosed={setClosed}
        ls={[]}
      />
    </div>
  );
}

export default Flrp;
