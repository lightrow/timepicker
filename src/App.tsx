import React, { useRef, useEffect } from "react";

import "./App.css";
import { Timepicker, TimeRange } from "./picker/timepicker";

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const onChange = (ranges: TimeRange[]) => {
    console.log(ranges);
  };

  useEffect(() => {
    const timepicker1 = new Timepicker();
    const timepicker2 = new Timepicker();
    const timepicker3 = new Timepicker();
    const timepicker4 = new Timepicker();
    const timepicker5 = new Timepicker();
    const timepicker6 = new Timepicker();
    const timepicker7 = new Timepicker();
    timepicker1.init(ref.current!, "Monday", [], onChange);
    timepicker2.init(ref.current!, "Tuesday", [], onChange);
    timepicker3.init(ref.current!, "Wednesday", [], onChange);
    timepicker4.init(ref.current!, "Thursday", [], onChange);
    timepicker5.init(ref.current!, "Friday", [], onChange);
    timepicker6.init(ref.current!, "Saturday", [], onChange);
    timepicker7.init(ref.current!, "Sunday", [], onChange);
  }, []);
  return <div ref={ref} className="App"></div>;
}

export default App;
