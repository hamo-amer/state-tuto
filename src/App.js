import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className='App'>
      <button onClick={toggleShow}>Show</button>
      {show ? <Counter /> : null}
    </div>
  );
}

export default App;
