import React, { useState } from "react";
import Terminal from "../terminal/Terminal";

import "./Home.scss";

function Home() {
  const dirs = ["chicken_domain", "dumbnail", "flrp", "screenplay_rules"];
  const [closed, setClosed] = useState(false);
  const cwd = "/yehuda";

  return (
    <div>
      <Terminal cwd={cwd} closed={closed} setClosed={setClosed} dirs={dirs} />
    </div>
  );
}

export default Home;
