import { useState } from "react";
import "./App.css";
import MyTypography from "./components/MyTypography";
import MUIButton from "./components/MUIButton";

function App() {
  return (
    <div className="App">
      <MyTypography />
      <MUIButton/>
    </div>
  );
}

export default App;
