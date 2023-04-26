import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { Document, Page } from "react-pdf/dist/esm/entry.vite";
import res from "./../../assets/res.pdf";
import "./Resume.scss";
import Terminal from "../terminal/Terminal";

function Resume(props) {
  const [loading, setLoading] = useState(true);
  const [closed, setClosed] = useState(true);

  return (
    <div>
      <div className={loading ? "resume-loading" : "resume-loaded"}>
        {loading && <ClipLoader className="spinner" size={20} />}
        <Document file={res}>
          <Page
            pageNumber={1}
            width={400}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            onLoadSuccess={() => setLoading(false)}
            className="resume"
          />
        </Document>
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

export default Resume;
