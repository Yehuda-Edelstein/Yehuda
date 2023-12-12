import React, { useState } from "react";
import Terminal from "../terminal/Terminal";

import "./Home.scss";

function Home() {
  const dirs = ["flrp", "dumbnail", "screenplayrules"];
  const [closed, setClosed] = useState(false);
  const cwd = "/yehuda";

  return (
    <div>
      <Terminal cwd={cwd} closed={closed} setClosed={setClosed} dirs={dirs} />
    </div>
  );
}

export default Home;
