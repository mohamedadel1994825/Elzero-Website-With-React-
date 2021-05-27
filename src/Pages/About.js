import { useHistory } from "react-router-dom";

export function About() {
  const history = useHistory();
  function goHome() {
    history.push("/");
  }
    return (
      <div>
        <div>
        <button type="button" className="btn btn-primary" onClick={goHome}>
          Go home
        </button>
      </div>
        <h2>About</h2>
      </div>
    );
  }
  