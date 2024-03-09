import react from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
function App() {
  return (
    // BEM naming convention
    <div className="App">
      
      {/* header */}
      <Header/>
      {/* sidebar */}
      <Sidebar/>
      {/* React-Router -> Chat screen */}
    </div>
  );
}

export default App;
