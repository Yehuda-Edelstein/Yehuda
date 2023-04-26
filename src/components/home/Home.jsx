import React, { useState, useEffect } from "react";
import quotes from "../../assets/quotes.json";
import Terminal from "../terminal/Terminal";
import "./Home.scss";

function Home(props) {
  const dirs = ["dumbnail", "screenplayrules"];
  const [quote, setQuote] = useState(getRandomQuote());
  const [closed, setClosed] = useState(false);
  const cwd = "/yehuda";

  function getRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
  }

  return (
    <div>
      {closed && (
        <div className="quote">
          <h1>{quote.quote}</h1>
          {quote.by !== "" && (
            <p>
              - <i>{quote.by}</i>
            </p>
          )}
        </div>
      )}
      <Terminal
        cwd={cwd}
        closed={closed}
        setClosed={setClosed}
        setQuote={setQuote}
        dirs={dirs}
      />
    </div>
  );
}

export default Home;
