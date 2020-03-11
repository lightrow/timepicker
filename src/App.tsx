import React, { useRef, useEffect } from "react";

import "./App.css";
import { Timepicker } from "./picker/timepicker";

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const onChange = () => {};
  useEffect(() => {
    const timepicker = new Timepicker();
    timepicker.init(ref.current!, "Monday", [], onChange);
  }, []);
  return <div ref={ref} className="App"></div>;
}

export default App;
