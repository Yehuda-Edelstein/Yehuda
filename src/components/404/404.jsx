import { useRouteError, Link } from "react-router-dom";
import "./404.scss";

function ErrorPage() {
  // const error = useRouteError();

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, this route doesn't exist.</p>
      <p>
        <i>
          <Link to={"/"}>Back to safety</Link>
        </i>
      </p>
    </div>
  );
}

export default ErrorPage;
