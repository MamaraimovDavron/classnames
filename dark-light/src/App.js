import "./App.css";
import classNames from "classnames";
import { useState } from "react";

// const changeTheme = () => {
//   let className = "App";
//   const theme1 = "dark";
//   const theme2 = "dark";
//   className = classNames(className, { dark: theme1 === "dark" });
//   console.log(className);
//   return className;
// };

function App() {
  const [state, setState] = useState(false);
  let btnClass = classNames({ App: true });

  return (
    <div className={`${btnClass} ${state ? "dark" : "light"}`}>
      <button
        onClick={() => {
          setState(!state);
        }}
        className={state ? "lightBtn" : "darkBtn"}
      >
        {state ? "Light" : "Dark"}
      </button>
    </div>
  );
}

export default App;
