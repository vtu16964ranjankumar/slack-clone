import react from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
function App() {
  return (
    // BEM naming convention
    <div className="App">
      <h1>Hello Interrupt coder !!!</h1>
      {/* header */}
      <Header/>
      {/* sidebar */}
      <Sidebar/>
      {/* React-Router -> Chat screen */}
    </div>
  );
}

export default App;
