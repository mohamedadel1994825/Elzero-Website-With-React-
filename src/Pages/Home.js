import { useHistory } from "react-router-dom";
export function Home() {
  const history = useHistory();
  function goDashBoard() {
    history.push("/dashboard");
  }
  function goAbout() {
    history.push("/about");
  }
  return (
    <div>
      <div>
        <button type="button" onClick={goDashBoard}>
          Go goDashBoard
        </button>
      </div>
      <div>
        <button type="button" onClick={goAbout}>
          Go About
        </button>
      </div>
      <h2>Home</h2>
    </div>
  );
}
