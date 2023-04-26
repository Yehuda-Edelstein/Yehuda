import Terminal from "../terminal/Terminal";
import { useState, useEffect } from "react";
import "./Experience.scss";

function Experience(props) {
  const [closed, setClosed] = useState(true);

  return (
    <div>
      <div className="experience">
        <div className="experience-item">
          <div className="experience-header">
            <h3>Freelance Software Work - April 2022 - Present</h3>
          </div>
          <ul>
            <li>
              Delivered projects to clients in exchange for fiat currency,
              including full-stack applications, static SPAs, and WordPress
              sites.
            </li>
            <li>
              Acted as the primary point of contact with clients, handled
              project scoping and estimation, and delivered projects within
              specified timelines and budgets.
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <div className="experience-header">
            <h3>Software Engineer, TLP Ventures — Jan 2022 - April 2022</h3>
          </div>
          <ul>
            <li>
              Responsible for maintaining and improving client dashboards.
            </li>
            <li>
              Utilized React/TypeScript/Redux to display sales and other
              incoming API data in an intuitive and effective manner.
            </li>
            <li>
              Collaborated with cross-functional teams to ensure timely delivery
              of high-quality software solutions.
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <div className="experience-header">
            <h3>Assistant Manager, Schmaltz Brothers — 2021 - Jan 2022</h3>
          </div>
          <ul>
            <li>
              Oversaw production and distribution of edible matter from
              vehicular storefront.
            </li>
            <li>I also flipped burgers.</li>
          </ul>
        </div>
      </div>
      <Terminal
        cwd={"/yehuda/experience"}
        closed={closed}
        setClosed={setClosed}
        ls={[]}
      />
    </div>
  );
}

export default Experience;
