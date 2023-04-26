import Terminal from "../terminal/Terminal";
import { useState, useEffect } from "react";

function Contact(props) {
  const [closed, setClosed] = useState(true);

  return (
    <div>
      <Terminal
        cwd={"/yehuda/contact"}
        closed={closed}
        setClosed={setClosed}
        ls={[]}
      />
    </div>
  );
}

export default Contact;
