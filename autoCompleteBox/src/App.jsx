import { useRef, useState } from "react";
import "./App.css";
import country from "./countryData";
function App() {
  const [state, setState] = useState("");
  let ref = useRef();
  document.body.onkeydown = (target) => {
    if (target.key == "Escape") {
      ref.current.style.display = "none";
      console.log("Escape");
    }
  };
  return (
    <div className="input">
      <input
        onChange={(e) => {
          setState(e.target.value);
          ref.current.style.display = "block";
        }}
      />
      <div ref={ref}>
        {country
          .filter((country) => {
            return state !== ""
              ? country.name.toLowerCase().includes(state.toLowerCase())
              : 0;
          })
          .map((country, id) => (
            <h2 key={id}>{country.name}</h2>
          ))}
      </div>
    </div>
  );
}

export default App;
