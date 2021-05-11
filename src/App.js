import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import React from "react";
import Options from "./components/Options";


function App() {
    //const btnHandle = () => toast("Wow so easy!");
  return (
      <div>
          <ToastContainer/>
                <Options/>
      </div>
  );
}
export default App;
