import { useContext, useState, useEffect } from "react";
import { ToggleTheme } from "./Prog6";

function UseContext() {
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme ? "black" : "grey",
    color: theme ? "grey" : "black",
    padding: "2rem",
    margin: "2rem",
  };

  const [isParaVisible, setParaVisible] = useState(false);
  const [state, setState] = useState(0);
  const [isContext, setContext] = useState(false); 
  const [contextButtonClicked, setContextButtonClicked] = useState(false); 

  const handleLike = () => {
    setState(state + 1);
  };

  useEffect(() => {
    if (isContext && contextButtonClicked) { 
      alert("Context button is clicked");
      setParaVisible(!isParaVisible);
      setContext(!isContext);
    }
  }, [isContext, isParaVisible, contextButtonClicked]);

  const handleContextButtonClick = () => {
    setContextButtonClicked(true); 
    setContext(true);
  };

  const Changezero = () => {
    setState(0);
  };

  return (
    <div style={themeStyle}>
      <p style={{ display: isParaVisible ? "block" : "none" }}>
        The sun rose over the hills, painting the sky with shades of pink and
        orange. Birds chirped happily as they flitted from tree to tree, and a
        gentle breeze rustled the leaves. Down below, a small stream gurgled
        cheerfully, its clear waters reflecting the morning light. A rabbit
        hopped through the meadow, pausing occasionally to nibble on the fresh
        grass. It was a peaceful scene, full of beauty and tranquility.
      </p>
      <br />

      <button onClick={handleContextButtonClick} className="contextbtn">
        Context
      </button>
      <br />
      <p className="nooflikes" onClick={Changezero}>
        {state}
      </p>
      <button onClick={handleLike} className="likebtn">
        Like
      </button>
    </div>
  );
}

export default UseContext;
