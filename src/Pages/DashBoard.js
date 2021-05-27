import { useHistory } from "react-router-dom";
import "bootstrap";

export const Dashboard = () => {
  const history = useHistory();
  function goHome() {
    history.push("/");
  }
  function goAbout() {
    history.push("/about");
  }
  return (
    <div>
      <div>
        <button type="button" className="btn btn-primary" onClick={goHome}>
          Go home
        </button>
      </div>
      <div>
        <button type="button" className={"btn btn-primary mt-5"} onClick={goAbout}>
          Go About
        </button>
      </div>
      <h2 className="mt-5">Dashboard</h2>
    </div>
  );
};
