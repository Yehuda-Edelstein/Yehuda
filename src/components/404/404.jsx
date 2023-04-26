import { useRouteError, Link } from "react-router-dom";
import "./404.scss";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      {error.statusText === "Not Found" ? (
        <p>Sorry, this route doesn't exist.</p>
      ) : (
        <p>{error.message}</p>
      )}

      <p>
        <i>
          <Link to={"/"}>Back to safety</Link>
        </i>
      </p>
    </div>
  );
}

export default ErrorPage;
