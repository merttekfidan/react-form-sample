import React from "react";
import "./App.css";
import Form from "./components/Form";
import Store from "./Store";
function App() {
  return (
    <div className="App">
      <Store>
        <Form />
      </Store>
    </div>
  );
}

export default App;
